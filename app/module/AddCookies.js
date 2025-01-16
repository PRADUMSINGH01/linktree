"use server";
import { cookies } from "next/headers";
export async function AddCookies(token, UserId) {
  const res = await token;
  const cook = await cookies();
  if (res) {
    cook.set({
      name: "token",
      value: res,
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "Strict",
      maxAge: 604800, // 7 days in seconds
    });
    cook.set({
      name: "UserId",
      value: UserId,
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "Strict",
      maxAge: 604800, // 7 days in seconds
    });

    return { success: true, msg: "Login Successfully " };
  } else {
    return { success: false, msg: "Cookies not added " };
  }
}
