import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.NEXT_SECRET); // Use your secret key as Uint8Array

// Middleware to handle JWT verification and route protection
export async function middleware(req) {
  const token = req.cookies.get("token");
  const currentPath = req.nextUrl.pathname;

  // Define protected routes where login/register should be blocked if a token exists
  const authRoutes = ["/login", "/register"];

  if (authRoutes.includes(currentPath) && token) {
    try {
      // Verify token with jose
      await jwtVerify(token, JWT_SECRET);
      // If token is valid, redirect to home or another protected route
      return NextResponse.redirect(new URL("/", req.url));
    } catch (err) {
      console.error("Invalid token:", err);
      // Optionally, handle invalid tokens by clearing the cookie
      const response = NextResponse.next();
      response.cookies.set("token", "", { maxAge: -1 });
      return response;
    }
  } else if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
    } catch (err) {
      console.error("Invalid token on a protected route:", err);
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.set("token", "", { maxAge: -1 });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
