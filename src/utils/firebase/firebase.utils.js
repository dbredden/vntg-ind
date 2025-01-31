import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAF93KQQbYiEGrsMCqrOLgxHGGdlDT-r7E',
  authDomain: 'vntg-ind.firebaseapp.com',
  projectId: 'vntg-ind',
  storageBucket: 'vntg-ind.firebasestorage.app',
  messagingSenderId: '40845209564',
  appId: '1:40845209564:web:f4d2863b1f46c0ff67a919'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
