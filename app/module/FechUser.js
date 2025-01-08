"use server";
import { db } from "./firebaseClient";
import { collection, query, where, getDocs } from "firebase/firestore";
import { cookies } from "next/headers";

export async function FETCHUSER() {
  const cook = await cookies();
  const Name = cook.get("UserId")?.value;
  console.log(Name);
  if (!Name) {
    throw new Error("UserId cookie is required to fetch user details.");
  }

  try {
    const usersRef = collection(db, "Users");
    const userQuery = query(
      usersRef,
      where("email", "==", "hs947518@gmail.com")
    );
    const res = await getDocs(userQuery);

    if (res.empty) {
      console.log("No matching user found.");
      return { userData: null };
    }

    const doc = res.docs[0];
    console.log("_______" + doc.id);
    // Get the first matched document
    const userData = doc.data(); // Extract document data
    //console.log("Fetched User Data:", userData.Id);
    console.log(userData);
    return { id: doc.id, links: userData.links }; // Return user data as an object
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    throw new Error("Failed to fetch user details.");
  }
}
