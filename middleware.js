"use server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.NEXT_SECRET); // Secret key

export async function middleware(req) {
  console.log("Middleware is running... maainn "); // Debug log
  const token = await req.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/register", req.url)); // Redirect if logged in
  }

  try {
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.redirect(new URL("/", req.url)); // Redirect if logged in
  } catch (err) {
    console.error("Invalid token on auth route:", err);
    const response = NextResponse.next();
    response.cookies.set("token", "", { maxAge: -1 }); // Clear token
    return response;
  }
}

export const config = {
  matcher: "/Dashboard", // Match specific routes or all routes (e.g. '/')
};
