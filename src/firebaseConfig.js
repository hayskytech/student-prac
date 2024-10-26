import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, onIdTokenChanged, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5fdKt-aeJGVxa5lEZxuye4tSIZKkfy-0",
  authDomain: "newone-55b3f.firebaseapp.com",
  databaseURL: "https://newone-55b3f-default-rtdb.firebaseio.com",
  projectId: "newone-55b3f",
  storageBucket: "newone-55b3f.appspot.com",
  messagingSenderId: "269884942787",
  appId: "1:269884942787:web:32fcb04cbcd5e4e767b576"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();

/* Below part is only for authentication */
export const auth = getAuth();

export function FBInitialSetup(setUser) {
  useEffect(() => {
    const unsubscribeAuthState = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    const unsubscribeIdToken = onIdTokenChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribeAuthState();
      unsubscribeIdToken();
    };
  }, [auth]);
}

export function doLogout() {
  signOut(auth).then(() => {
    window.location.reload()
  }).catch((error) => {
    console.error(error);
  });
}

export function doLogin() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}