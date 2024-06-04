import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCNt9nx3rms3H6eYjAp0Sa-SP-YR8lUVzg",
  authDomain: "prime-clone-483bf.firebaseapp.com",
  projectId: "prime-clone-483bf",
  storageBucket: "prime-clone-483bf.appspot.com",
  messagingSenderId: "662784129279",
  appId: "1:662784129279:web:729a8981d5a80ebbccb4ca",
  measurementId: "G-WSREEQNN10"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const Google=new GoogleAuthProvider();