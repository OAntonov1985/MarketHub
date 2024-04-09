import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomian,
    projectId: process.env.projectId,
    storageBucket: "markethub-0304.appspot.com",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export async function uploadImagesToStorage(files, productBrend) {
    const uploadPromises = files.map(async file => {
        const storageRef = ref(storage, `${productBrend}/` + file.name);
        await uploadBytesResumable(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    });

    return Promise.all(uploadPromises);
}
