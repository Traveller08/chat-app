import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCM5sGZq0fxlEktJkc7eVTY29tazLG7PHE",
    authDomain: "chit-chat-app-6d1fa.firebaseapp.com",
    projectId: "chit-chat-app-6d1fa",
    storageBucket: "chit-chat-app-6d1fa.appspot.com",
    messagingSenderId: "863712027845",
    appId: "1:863712027845:web:f16546c01eaf811aa23cac"
  }
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getDatabase(app);
export default app;