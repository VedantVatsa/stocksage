import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7AjKu76DA0GtSqGI2_QuEwM-cisvT1x4",
  authDomain: "retail-login-f4f89.firebaseapp.com",
  databaseURL: "https://retail-login-f4f89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "retail-login-f4f89",
  storageBucket: "retail-login-f4f89.appspot.com",
  messagingSenderId: "957286498999",
  appId: "1:957286498999:web:fc2dcebcf9978404694332"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };