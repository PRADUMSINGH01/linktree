import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.NEXT_SECRET); // Secret key

export async function middleware(req) {
  const token = req.cookies.get("token");
  
  const currentPath = req.nextUrl.pathname;

  const authRoutes = ["/login", "/register"];

  if (authRoutes.includes(currentPath) && token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.redirect(new URL("/", req.url)); // Redirect if logged in
    } catch (err) {
      console.error("Invalid token on auth route:", err);
      const response = NextResponse.next();
      response.cookies.set("token", "", { maxAge: -1 }); // Clear token
      return response;
    }
  } else if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
    } catch (err) {
      console.error("Invalid token on protected route:", err);
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.set("token", "", { maxAge: -1 }); // Clear token
      return response;
    }
  }

  return NextResponse.next(); // Proceed if no conditions matched
}

export const config = {
  matcher: ["/login", "/register", "/", "/Dashboard"], // Protect relevant routes
};
