"use server";
import { cookies } from "next/headers";
export async function AddCookies(token) {
  const res = await token;
  const cook = cookies();
  if (res) {
    await cook.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "Strict",
      maxAge: 3600, // 1 hour
    });

    return { success: true, msg: "cookies added " };
  } else {
    return { success: false, msg: "Cookies not added " };
  }
}
