import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "images.json");

// Ensure the data directory exists
async function ensureDataDir() {
  const dir = path.join(process.cwd(), "data");
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Read the current images data
async function readImagesData(): Promise<Record<string, string[]>> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

// Write images data
async function writeImagesData(data: Record<string, string[]>) {
  await ensureDataDir();
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
}

// Get all images from all users combined
async function getAllImages() {
  const data = await readImagesData();
  const allImages = new Set<string>();
  
  // Combine all images from all users
  Object.values(data).forEach((userImages: string[]) => {
    userImages.forEach((image: string) => allImages.add(image));
  });
  
  return Array.from(allImages);
}

export async function GET() {
  // Public access - return all images
  const images = await getAllImages();
  return NextResponse.json({ images });
}

export async function POST(req: Request) {
  const session = await auth();
  
  // Only allow authenticated users to modify images
  if (!session?.userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { images } = await req.json();
  const data = await readImagesData();
  data[session.userId] = images;
  await writeImagesData(data);

  return NextResponse.json({ success: true });
} 