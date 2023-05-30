import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_Uz75Yuy5fYfpnP9Y74gltpLneFrdAqg",
    authDomain: "genesi-ai.firebaseapp.com",
    projectId: "genesi-ai",
    storageBucket: "genesi-ai.appspot.com",
    messagingSenderId: "238356356220",
    appId: "1:238356356220:web:93111e3f0057bbab78fdf9",
    measurementId: "G-B18YXBPFT3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };