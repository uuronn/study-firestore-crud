import { onAuthStateChanged } from "firebase/auth";
import { NextPage } from "next";
import { auth, db } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Auth: NextPage = () => {
  const [data, setData] = useState<object>();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        setUid(user.uid);
      } else {
        console.log("ログインされていません");
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      const setDatas = async () => {
        await setDoc(doc(db, "tests", uid), {
          test: "テスト",
          correct: 30
        });
        // console.log(uid);
      };
      setDatas();

      const refTest = async () => {
        const docSnap = await getDoc(doc(db, "tests", uid));
        setData(docSnap.data());
      };
      refTest();
    }
  }, [uid]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <h1>title</h1>
      <button onClick={signIn}>this is test</button>
      <p>ユーザーuid: {uid}</p>
      <p>ログイン中のユーザー名: {name}</p>
      <p>{data?.test}</p>
      <p>{data?.correct}</p>
    </>
  );
};

export default Auth;
