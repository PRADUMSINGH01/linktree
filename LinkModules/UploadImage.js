import { storage } from "@/app/module/firebaseClient";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export function uploadImage() {
  // Get the file from the input element
  const file = document.getElementById("imageUpload").files[0];

  if (!file) {
    alert("Please select a file to upload");
    return;
  }

  // Create a reference to the Firebase Storage location
  const storageRef = ref(storage, "images/" + file.name);

  // Upload the file to Firebase Storage
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log("Uploaded a file!", snapshot);

      // Optionally, get the file's download URL after upload
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("File available at", url);
        // You can use the URL (e.g., display the image)
        document.getElementById("image").src = url; // Assuming there's an <img id="image"> element
      });
    })
    .catch((error) => {
      console.error("Error uploading image:", error);
    });
}
