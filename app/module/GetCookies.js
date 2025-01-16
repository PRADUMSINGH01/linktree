"use server";
import { cookies } from "next/headers";

export async function GetCookies() {
  const getcookies = await cookies();

  const res = getcookies.get("token");
  if (res) {
    return true;
  } else {
    return false;
  }
}
