"use server";
import { cookies } from "next/headers";
export async function AddCookies(token) {
  const res = await token;
  const cook = await cookies();
  if (res) {
    cook.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "Strict",
      maxAge: 3600, // 1 hour
    });

    return { success: true, msg: "Login Successfully " };
  } else {
    return { success: false, msg: "Cookies not added " };
  }
}
