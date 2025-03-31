import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "vendors.json");

// Define types
type Vendor = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  boothNumber: string;
  boothImage?: string;
};

type VendorsData = {
  vendors: Vendor[];
};

// Ensure the data directory exists
async function ensureDataDir(): Promise<void> {
  const dir = path.join(process.cwd(), "data");
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Read the current vendors data
async function readVendorsData(): Promise<VendorsData> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(data) as VendorsData;
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
async function writeVendorsData(data: VendorsData): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
}

// GET endpoint to retrieve all vendors
export async function GET(): Promise<NextResponse> {
  const data = await readVendorsData();
  return NextResponse.json(data);
}

// POST endpoint to update a vendor's booth image
export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.json() as { vendorId: number; boothImage: string };
  const { vendorId, boothImage } = body;

  const data = await readVendorsData();
  const vendorIndex = data.vendors.findIndex(v => v.id === vendorId);

  if (vendorIndex === -1) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }

  const vendor = data.vendors[vendorIndex];
  if (!vendor) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }

  vendor.boothImage = boothImage;
  await writeVendorsData(data);

  return NextResponse.json({ success: true });
} 