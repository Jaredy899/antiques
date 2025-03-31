import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Get allowed passwords from environment variable
    const allowedPasswords = process.env.FILE_MANAGER_PASSWORDS?.split(',') || ['admin123'];
    
    // Check if the provided password matches any of the allowed passwords
    if (allowedPasswords.includes(password)) {
      // Set the auth cookie
      const response = NextResponse.json({ success: true });
      response.cookies.set('file_manager_auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      });
      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
} 