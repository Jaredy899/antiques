import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    if (!folder || !["antiques", "vendors"].includes(folder)) {
      return NextResponse.json(
        { error: "Invalid folder" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "File must be an image" },
        { status: 400 }
      );
    }

    // Validate file size (4MB)
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be less than 4MB" },
        { status: 400 }
      );
    }

    // Create a unique filename
    const timestamp = Date.now();
    const extension = file.name.split(".").pop();
    const filename = `${timestamp}.${extension}`;
    const path = join(process.cwd(), "public", "images", folder, filename);

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save file
    await writeFile(path, buffer);

    // Return the URL
    const url = `/images/${folder}/${filename}`;
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
} 