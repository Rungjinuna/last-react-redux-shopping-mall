// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7pKz3LsnWOnVP7UdFou--A9ZtIY4s6q4',
  authDomain: 'shopping-mall-326ba.firebaseapp.com',
  projectId: 'shopping-mall-326ba',
  storageBucket: 'shopping-mall-326ba.appspot.com',
  messagingSenderId: '34349306237',
  appId: '1:34349306237:web:0866c87aa0f8a2b86dfc14',
  measurementId: 'G-D26CZVV709',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
