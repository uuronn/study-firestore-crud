import { onAuthStateChanged } from "firebase/auth";
import { NextPage } from "next";
import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Auth: NextPage = () => {
  const [uid, setUid] = useState<string>("");
  const [name, setName] = useState<string | null>("");
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      if (!res) throw new Error("res取れてないよ");

      setUid(res.user.uid);
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setName(user.displayName);
      console.log(user);
      console.log(user.displayName);
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("else");
    }
  });

  // const email = "test";
  // const password = "testPass";
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <>
      <h1>title</h1>
      <button onClick={signIn}>this is test</button>
      <p>ユーザー名: {uid}</p>
      <p>ログイン中のユーザー: {name}</p>
    </>
  );
};
export default Auth;
