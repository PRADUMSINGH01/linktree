"use server";

import { firestore } from "./firebase";

export async function CheckUserAccount(email) {
  if (!email) {
    return { success: false, msg: "No data submitted. Please try again... " };
  }

  try {
    let res = await firestore
      .collection("Users")
      .where("email", "==", email)
      .get();
    const doc = res.docs[0];
    if (!doc) {
      return {
        success: true,
        msg: "there is no user with this Email Id .Please Make your account",
      };
    }
    if (!res) {
      return {
        success: true,
        msg: "User Not Found.You can create New account ",
      };
    } else {
      return {
        success: false,
        msg: "You have Account with this mail Id.Please try with different email Id ... ",
      };
    }
  } catch (error) {
    return { success: false, msg: "some Internal  issue" };
  }
}
