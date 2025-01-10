"use server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/module/firebaseClient";
export async function FETCHLINK(Name) {
  //onst cook = await cookies();
  // Retrieve cookie value
  if (!Name) {
    throw new Error("UserId cookie is required to fetch user details.");
  }

  try {
    const usersRef = collection(db, "Users");
    const userQuery = query(usersRef, where("FullName", "==", Name));
    const res = await getDocs(userQuery);

    if (res.empty) {
      console.log("No matching user found.");
      return { userData: null };
    }

    const doc = res.docs[0];
    //console.log("_______" + doc.id);
    // Get the first matched document
    const userData = doc.data(); // Extract document data
    //console.log("Fetched User Data:", userData.Id);
   // console.log(userData);
    return { links: userData.links }; // Return user data as an object
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    throw new Error("Failed to fetch user details.");
  }
}
