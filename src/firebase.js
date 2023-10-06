import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDUIrW35TEas6HPJTZhKWsY5Gxsx-Z2NQo",
  authDomain: "uploading-images-52d1c.firebaseapp.com",
  projectId: "uploading-images-52d1c",
  storageBucket: "uploading-images-52d1c.appspot.com",
  messagingSenderId: "664371745494",
  appId: "1:664371745494:web:09c9512f66263b3269af77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);