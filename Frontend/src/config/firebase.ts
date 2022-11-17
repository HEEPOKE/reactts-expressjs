import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STOREAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "./env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STOREAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const configFirebase = {
  firebaseConfig,
  app,
  analytics,
};

export default configFirebase;
