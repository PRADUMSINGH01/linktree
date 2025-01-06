"use server";

import { db } from "./firebaseClient";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function CheckUserAccount(res) {
  try {
    // Extract email from the input
    const { email } = res;

    if (!email) {
      return { success: false, msg: "No email provided. Please try again." };
    }

    // Create a reference to the Users collection and query for the email
    const usersRef = collection(db, "Users");
    const userQuery = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);

    // Check if any documents match the query
    if (querySnapshot.empty) {
      return {
        success: true,
        msg: "No user found with this email ID. Please create an account.",
      };
    }

    // User found
    return {
      success: false,
      msg: "An account exists with this email ID. Please try a different email.",
    };
  } catch (error) {
    console.error("Error checking user account:", error);
    return {
      success: false,
      msg: "An error occurred while checking the account. Please try again later.",
    };
  }
}
