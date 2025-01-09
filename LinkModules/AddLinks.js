"use server";

import { db } from "@/app/module/firebaseClient";
import {
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";

export async function AddLink(link, UserId) {
  const userIdString = String(UserId);
  // Ensure link is a valid object and not a nested array

  //const collectionName = "Users";
  // The new object to add to the `links` array
  const n = link[0];
  //console.log(n);
  // Reference to the document in Firestore
  const userDocRef = doc(db, "Users", userIdString);

  // Add the new object to the 'links' array
  await updateDoc(userDocRef, {
    links: arrayUnion(n), // Adds the new object to the existing `links` array
  });

  console.log("Document added successfully!");
  return {
    success: true,
    msg: "Link Added .",
  };
  if (!link || typeof link !== "object" || Array.isArray(link)) {
    return {
      success: false,
      msg: "Invalid link format. Must be a single object.",
    };
  }

  // Ensure UserId is provided and is converted to a string
  if (!UserId) {
    return { success: false, msg: "User ID is required." };
  }
  console.log(userIdString);

  try {
    await setDoc(doc(db, "Users", userIdString), { name: "hello" });
    return {
      success: true,
      msg: "Document created and link added successfully.",
    };
  } catch (setError) {
    console.error("Error creating document:", setError);
    return { success: false, msg: "Failed to create document." };
  }
}
