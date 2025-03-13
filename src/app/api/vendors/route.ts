import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "vendors.json");

// Ensure the data directory exists
async function ensureDataDir() {
  const dir = path.join(process.cwd(), "data");
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Read the current vendors data
async function readVendorsData(): Promise<Record<string, any>> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      vendors: [
        {
          id: 1,
          name: "Vintage Treasures",
          specialty: "Mid-century furniture and decor",
          description: "Specializing in authentic mid-century modern pieces from the 1950s-1970s, including furniture, lighting, and decorative objects.",
          boothNumber: "A12",
          boothImage: ""
        },
        {
          id: 2,
          name: "Southern Heritage",
          specialty: "Americana and folk art",
          description: "Offering authentic Americana, folk art, primitives, and handcrafted items with a focus on Southern heritage and traditions.",
          boothNumber: "B23",
          boothImage: ""
        },
        {
          id: 3,
          name: "Time Capsule Collectibles",
          specialty: "Vintage toys and advertising",
          description: "Nostalgic collection of vintage toys, advertising signs, and memorabilia from the 1920s through the 1980s.",
          boothNumber: "C08",
          boothImage: ""
        },
        {
          id: 4,
          name: "Heritage Silver",
          specialty: "Fine silver and estate jewelry",
          description: "Curated collection of sterling silver, silverplate, and fine estate jewelry from various periods.",
          boothNumber: "D15",
          boothImage: ""
        }
      ]
    };
  }
}

// Write vendors data
async function writeVendorsData(data: Record<string, any>) {
  await ensureDataDir();
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
}

// GET endpoint to retrieve all vendors
export async function GET() {
  const data = await readVendorsData();
  return NextResponse.json(data);
}

// POST endpoint to update a vendor's booth image
export async function POST(req: Request) {
  const session = await auth();
  
  // Only allow authenticated users to modify vendor data
  if (!session?.userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { vendorId, boothImage } = await req.json();
  
  if (!vendorId || !boothImage) {
    return NextResponse.json({ error: "Vendor ID and booth image are required" }, { status: 400 });
  }

  const data = await readVendorsData();
  
  // Find the vendor and update their booth image
  const vendorIndex = data.vendors.findIndex((v: any) => v.id === vendorId);
  
  if (vendorIndex === -1) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }
  
  data.vendors[vendorIndex].boothImage = boothImage;
  await writeVendorsData(data);

  return NextResponse.json({ success: true, vendor: data.vendors[vendorIndex] });
} 