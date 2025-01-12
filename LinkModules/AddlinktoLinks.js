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

export async function AddLinktolinks(link, UserId) {
  const userIdString = String(UserId);
  // Ensure link is a valid object and not a nested array

  //const collectionName = "Users";
  // The new object to add to the `links` array
  const n = link;
  // Reference to the document in Firestore

  const userDocRef = doc(db, "Users", userIdString);

  // Add the new object to the 'links' array
  for (const iterator of n) {
    await updateDoc(userDocRef, {
      [`links.link`]: arrayUnion(iterator), // Adds the new object to the existing `links` array
    });
  }

  console.log("Document added successfully!");
  return {
    success: true,
    msg: "Link Added .",
  };
}
