import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = process.env.NEXT_SECRET || "your-secret-key";

export default async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  const isAuthPage = ["/login", "/register"].includes(req.nextUrl.pathname); // Auth pages
  const isProtectedPage = ["/", "/Dashboard", "/profile", "/settings"].includes(
    req.nextUrl.pathname
  ); // Protected pages

  if (token) {
    try {
      // Verify token
      await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));

      // Redirect away from login/register if already authenticated
      if (isAuthPage) {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect to home page
      }

      return NextResponse.next(); // Allow access to protected routes
    } catch (err) {
      console.error("Token verification failed:", err.message);

      // Invalid token: allow access to login/register
      if (isAuthPage) {
        return NextResponse.next();
      }

      // Redirect invalid token users to login page
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Handle unauthenticated users
  if (isAuthPage) {
    return NextResponse.next(); // Allow access to login/register
  }

  // Redirect unauthenticated users to login page for protected pages
  if (isProtectedPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Default behavior: allow access (e.g., static files, public pages)
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Adjust to match protected/auth routes
};
