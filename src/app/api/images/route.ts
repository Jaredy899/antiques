import { readdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'main';
    
    const imagesDir = join(process.cwd(), 'public', 'images', folder);
    const files = await readdir(imagesDir);
    
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/images/${folder}/${file}`);
    
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
} 