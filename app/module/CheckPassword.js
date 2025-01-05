"use server";

import bcrypt from "bcrypt";
import { firestore } from "./firebase";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function CheckPassword(email, password) {
  try {
    const secret = process.env.NEXT_SECRET;

    const cook = cookies();
    let res = await firestore
      .collection("Users")
      .where("email", "==", email)
      .get();
    if (!res) {
      return {
        success: false,
        msg: "there is no user with this Email Id .Please Make your account",
      };
    }
    const doc = res.docs[0];
    if (!doc) {
      return {
        success: false,
        msg: "there is no user with this Email Id .Please Make your account",
      };
    }
    const userData = doc.data();
    const hash = userData.password;
    const isPasswordVeri = await bcrypt.compare(password, hash);

    if (isPasswordVeri) {
      const token = jwt.sign(
        {
          data: userData.id,
        },
        secret,
        { expiresIn: "1h" }
      );
      console.log(token);
      const res = await cook.set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
      return { success: true, msg: "password verified" };
    } else {
      return { success: false, msg: "password is incorrect" };
    }
  } catch (error) {
    return {success:false ,msg:"Internal serever issue"}
  }
}
