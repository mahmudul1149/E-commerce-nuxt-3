import { initializeApp } from "firebase/app";
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyB64dapkwR4kCnNyyF1ZjjcTn5eXOB7sZc",
    authDomain: "learn-nuxt3-a7466.firebaseapp.com",
    projectId: "learn-nuxt3-a7466",
    storageBucket: "learn-nuxt3-a7466.appspot.com",
    messagingSenderId: "523101373216",
    appId: "1:523101373216:web:9b90950ef8c8180e020d45",
    measurementId: "G-JRBHQC6PDN",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
});
