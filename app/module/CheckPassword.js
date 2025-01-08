"use server";

import bcrypt from "bcrypt";
import { db } from "./firebaseClient";
import jwt from "jsonwebtoken";

import { collection, query, where, getDocs } from "firebase/firestore";
;

export async function CheckPassword(req) {
  try {
    const secret = process.env.NEXT_SECRET;

    const { email, password } = req;
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

      return {
        success: true,
        token: token,
        userId: userData.name,
        msg: "token generated",
      };
    } else {
      return { success: false, msg: "Password is incorrect" };
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw error; // Rethrow the error for external handling
  }
}
