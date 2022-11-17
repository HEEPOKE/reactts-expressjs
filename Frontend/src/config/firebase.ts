import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBps_2miMJFWxHEoOhCZMizivNIuCU8NJU",
  authDomain: "absolute-text-368904.firebaseapp.com",
  projectId: "absolute-text-368904",
  storageBucket: "absolute-text-368904.appspot.com",
  messagingSenderId: "203320795555",
  appId: "1:203320795555:web:3cddc2e0c2208611fb3a16",
  measurementId: "G-5ML45RLHM4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const configFirebase = {
  firebaseConfig,
  app,
  analytics,
};

export default configFirebase;
