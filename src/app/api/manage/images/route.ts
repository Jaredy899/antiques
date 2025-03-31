import { NextResponse } from 'next/server';
import { readdir, unlink } from 'fs/promises';
import { join } from 'path';

// Helper function to check if user is authenticated
function isAuthenticated(request: Request) {
  const cookie = request.headers.get('cookie');
  return cookie?.includes('file_manager_auth=true') ?? false;
}

// Helper function to get image URL
function getImageUrl(folder: string, filename: string) {
  return `/images/${folder}/${filename}`;
}

// Helper function to validate folder name
function isValidFolder(folder: string): folder is 'antiques' | 'vendors' {
  return folder === 'antiques' || folder === 'vendors';
}

export async function GET(request: Request) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Get folder from query params
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder || !isValidFolder(folder)) {
    return NextResponse.json(
      { error: 'Invalid folder' },
      { status: 400 }
    );
  }

  try {
    // Read directory contents
    const dirPath = join(process.cwd(), 'public', 'images', folder);
    const files = await readdir(dirPath);

    // Filter for image files and create image objects
    const imageFiles = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        name: file,
        url: getImageUrl(folder, file),
        // You could add more file info here if needed
        size: 0, // You could get actual file size if needed
      }));

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json(
      { error: 'Failed to read images' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { folder, filename } = await request.json();

    if (!folder || !isValidFolder(folder)) {
      return NextResponse.json(
        { error: 'Invalid folder' },
        { status: 400 }
      );
    }

    if (!filename || typeof filename !== 'string') {
      return NextResponse.json(
        { error: 'Invalid filename' },
        { status: 400 }
      );
    }

    // Ensure filename doesn't contain path traversal
    if (filename.includes('/') || filename.includes('\\')) {
      return NextResponse.json(
        { error: 'Invalid filename' },
        { status: 400 }
      );
    }

    const filePath = join(process.cwd(), 'public', 'images', folder, filename);

    // Delete the file
    await unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    );
  }
} 