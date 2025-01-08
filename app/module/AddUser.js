"use server";

//import {firestore} from './firebase'

import { db } from "./firebaseClient";
import { collection, addDoc } from "firebase/firestore";

export async function AddData(Fname, Lname, email, password) {
  if (!password) {
    return { success: false, msg: "No data submitted. Please try again... " };
  }

  try {
    const docRef = await addDoc(collection(db, "Users"), {
      Fname,
      Lname,
      email,
      password,
      FullName: Fname + Lname,
      Id: Math.random(),
    });
    if (docRef.id) {
      // console.log(docRef.id);
      return { success: true, msg: "Data Added successfully " };
    } else {
      return { success: false, msg: "Data Not Added. Please try again " };
    }
  } catch (error) {
    return { success: false, msg: "some Internal  issue" };
  }
}
