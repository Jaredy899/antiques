import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only protect /manage routes
  if (!request.nextUrl.pathname.startsWith('/manage')) {
    return NextResponse.next();
  }

  // Check for authentication cookie
  const isAuthenticated = request.cookies.has('file_manager_auth');
  
  // If not authenticated and not trying to authenticate, redirect to login
  if (!isAuthenticated && !request.nextUrl.pathname.endsWith('/auth')) {
    return NextResponse.redirect(new URL('/manage/auth', request.url));
  }

  return NextResponse.next();
}

// Configure the paths that should be handled by this middleware
export const config = {
  matcher: '/manage/:path*',
}; 