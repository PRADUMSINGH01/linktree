"use server";

import bcrypt from "bcrypt";
//import { firestore } from "./firebase";
import { db } from "./firebaseClient";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { collection, query, where, getDocs } from "firebase/firestore";
import { AddCookies } from "./AddCookies";

export async function CheckPassword(email, password) {
  try {
    const secret = process.env.NEXT_SECRET;

    const cook = cookies();
    const usersRef = collection(db, "Users");
    const userQuery = query(usersRef, where("email", "==", email));
    const res = await getDocs(userQuery);

    if (!res || res.empty) {
      return {
        success: false,
        msg: "There is no user with this Email ID. Please create an account.",
      };
    }

    const doc = res.docs[0];
    if (!doc) {
      return {
        success: false,
        msg: "There is no user with this Email ID. Please create an account.",
      };
    }

    const userData = doc.data();
    if (!userData.password) {
      throw new Error("Password hash is missing in user data.");
    }

    const isPasswordVeri = await bcrypt.compare(password, userData.password);

    if (isPasswordVeri) {
      if (!userData?.email) {
        throw new Error("User ID is missing. Cannot generate token.");
      }

      if (!userData?.email) {
        throw new Error("User ID is missing. Cannot generate token.");
      }
      const token = jwt.sign({ data: userData.email }, secret, {
        expiresIn: "1h",
      });

      if (!token) {
        throw new Error("Token is missing. Cannot set cookie.");
      } else {
        const res = await AddCookies(token);
        if (res.success === true) {
          console.log(res.msg);
        } else {
          console.log(res.msg);
        }
      }

      return { success: true, msg: "Password verified" };
    } else {
      return { success: false, msg: "Password is incorrect" };
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw error; // Rethrow the error for external handling
  }
}
