import { getStorage, ref, deleteObject } from "firebase/storage";
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


export default async function deleteImagesAndFolder(imageUrls) {
    try {
        for (let i = 0; i < imageUrls.length; i++) {
            const imageRef = ref(storage, imageUrls[i]);
            await deleteObject(imageRef);
        }
        return true;
    } catch (error) {
        console.error("Ошибка при удалении изображений и папки:", error);
        return false;
    }
}
