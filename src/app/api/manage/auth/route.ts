import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const FILE_MANAGER_PASSWORD = process.env.FILE_MANAGER_PASSWORD || 'admin123';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password !== FILE_MANAGER_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Create response with success message
    const response = NextResponse.json({ success: true });

    // Set authentication cookie (24 hour expiry)
    response.cookies.set('file_manager_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
} 