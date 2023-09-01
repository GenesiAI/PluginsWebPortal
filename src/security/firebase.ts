import axios from "axios";
import { debugConsole } from "components/util";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";

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
auth.setPersistence(browserLocalPersistence);

axios.interceptors.request.use(
  async (config) => {
    const auth = getAuth();
    if (auth?.currentUser) {
      const token = await auth.currentUser.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
onAuthStateChanged(auth, (user) => {
  debugConsole("auth:", JSON.stringify(auth));
});

const login = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

const logout = async () => {
  const auth = getAuth();
  await signOut(auth);
};

export { auth, login, logout };
