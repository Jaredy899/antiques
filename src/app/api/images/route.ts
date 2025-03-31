import { NextResponse } from "next/server";
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');

    if (!folder || !['antiques', 'vendors'].includes(folder)) {
      return NextResponse.json({ error: 'Invalid folder' }, { status: 400 });
    }

    const directory = join(process.cwd(), 'public', 'images', folder);
    const files = await readdir(directory);
    
    // Filter for image files and create URLs
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/images/${folder}/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading images:', error);
    return NextResponse.json({ error: 'Failed to read images' }, { status: 500 });
  }
} 