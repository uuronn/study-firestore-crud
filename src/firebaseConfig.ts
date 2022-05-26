// firebase setup
import { initializeApp } from "firebase/app";
// FireStoreへの接続情報の取得
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

export const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_APP_ID
});

export const db = getFirestore(app);
export const storage = getStorage(app);
