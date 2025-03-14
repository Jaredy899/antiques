import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/antiques", "/api/webhook/clerk"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    // Public routes don't require authentication
    return;
  }
  
  // Protect all other routes
  await auth.protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 