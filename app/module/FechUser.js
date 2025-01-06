import { firestore } from "./firebase";

export default async function FETCHUSER(email) {
  if (!email) {
    throw new Error("Email is required to fetch user details.");
  }

  try {
    const res = await firestore
      .collection("Users")
      .where("email", "==", email)
      .get();

    if (res.empty) {
      return []; // Return an empty array if no matching users are found
    }

    const userDetails = res.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return userDetails; // Always return an object/array
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw new Error("Failed to fetch user details.");
  }
}
