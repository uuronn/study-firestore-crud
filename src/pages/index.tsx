import type { NextPage } from "next";
import { db } from "../firebaseConfig";
import {
  getDoc,
  doc,
  setDoc,
  addDoc,
  collection
  // getDocs
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface Score {
  miss: number;
  correct: number;
}

const Home: NextPage = () => {
  const [data, setData] = useState<Score>();
  // const [datas, setDatas] = useState<Score[]>([]);

  // 追加
  const addScore = async () => {
    await addDoc(collection(db, "test"), {
      gomi: "ggggg"
    });
  };

  // 更新
  const setScore = async () => {
    await setDoc(doc(db, "users", "score"), {
      miss: 10,
      correct: 30
    });
  };

  useEffect(() => {
    // 単一の参照
    const refScore = async () => {
      const docRef = doc(db, "users", "score");
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    refScore();

    //   const refsScroe = async () => {
    //     const querySnapshot = await getDocs(collection(db, "users"));

    //     return querySnapshot.forEach((doc) => {
    //       // console.log(doc.id, " => ", doc.data());
    //       // console.log(doc.data());
    //       console.log(doc);

    //       setDatas(doc);
    //     });
    //   };
    //   refsScroe();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  // useEffect(() => {
  //   if (datas) {
  //     console.log(datas);
  //   }
  // }, [datas]);

  return (
    <div>
      <h1>index</h1>
      <h1>{data?.miss}</h1>
      <h1>{data?.correct}</h1>
      <button onClick={() => setScore()}>スコアを送信</button>
      <button onClick={() => addScore()}>追加ボタン</button>
      {/* {datas.map((item) => {
        <h1>{item.correct}</h1>;
        <h1>{item.correct}</h1>;
      })} */}
    </div>
  );
};

export default Home;
