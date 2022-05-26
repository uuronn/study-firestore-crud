import type { NextPage } from "next";
import { db } from "../firebaseConfig";
import {
  getDoc,
  doc,
  setDoc,
  addDoc,
  collection,
  // getDocs
  deleteDoc,
  updateDoc,
  deleteField
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface Score {
  miss: number;
  correct: number;
}

const Home: NextPage = () => {
  const [data, setData] = useState<Score>();
  const [img, setImg] = useState();
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

  // ドキュメントを削除
  const deleteDocment = async () => {
    await deleteDoc(doc(db, "users", "cQxpamAZDQzjSKLOtEur"));
  };

  // 特定のフィールドを削除
  const deleteHandler = async () => {
    await updateDoc(doc(db, "users", "cQxpamAZDQzjSKLOtEur"), {
      mijss: deleteField()
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

    const refImage = async () => {
      const docRef = doc(db, "users", "image");
      const docSnap = await getDoc(docRef);
      setImg(docSnap.data());
    };
    refImage();

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

  useEffect(() => {
    if (img) {
      console.log(img);
    }
  }, [img]);

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
      <img src={img?.url} alt="" />
      <button onClick={() => deleteHandler()}>フィールドを削除</button>
      <button onClick={() => deleteDocment()}>ドキュメント削除</button>

      {/* {datas.map((item) => {
        <h1>{item.correct}</h1>;
        <h1>{item.correct}</h1>;
      })} */}
    </div>
  );
};

export default Home;
