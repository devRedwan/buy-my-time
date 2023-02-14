import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaTMTJ86b82hTM1Ql4yq-n6T5ChA39QfM",
  authDomain: "buymytime-devredwan.firebaseapp.com",
  projectId: "buymytime-devredwan",
  storageBucket: "buymytime-devredwan.appspot.com",
  messagingSenderId: "161684459652",
  appId: "1:161684459652:web:4e5427e2b270720ec232d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
