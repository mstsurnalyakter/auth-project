// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2wtjqBT-W0xiKUYFW2MQhl0vaB72Al20",
  authDomain: "auth-project-37e60.firebaseapp.com",
  projectId: "auth-project-37e60",
  storageBucket: "auth-project-37e60.appspot.com",
  messagingSenderId: "630994163981",
  appId: "1:630994163981:web:fc22877871edc47fd7b844",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
