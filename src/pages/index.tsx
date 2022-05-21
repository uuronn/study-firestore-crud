import type { NextPage } from "next";
import { db } from "../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

// // 単一の参照
// const main = async () => {
//   const docRef = doc(db, "cities", "test");
//   const docSnap = await getDoc(docRef);

//   // if (docSnap.exists()) {
//   //   console.log("Document data:", docSnap.data().title);
//   // } else {
//   //   // doc.data() will be undefined in this case
//   //   console.log("No such document!");
//   // }

//   return console.log(docSnap.id);
// };

// main();

// // 複数の参照
// const sub = async () => {
//   const querySnapshot = await getDocs(collection(db, "cities"));

//   return querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     console.log(doc.data());
//   });
// };

// sub();

// // 書きかえる
// const setDB = async () => {
//   // Add a new document in collection "cities"
//   await setDoc(doc(db, "cities", "test"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });
// };

// setDB();

const Home: NextPage = () => {
  const [data, setData] = useState<object>();
  // 単一の参照
  useEffect(() => {
    const main = async () => {
      const docRef = doc(db, "cities", "test");
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data().title);
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }

      // console.log(docSnap.data());
    };
    main();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  // console.log(posts._document.data.value.mapValue.fields.title.stringValue);
  return (
    <div>
      <h1>index</h1>
      <h1>{data?.name}</h1>
      {/* <h1>{posts._document.data.value.mapValue.fields.title.stringValue}</h1> */}
    </div>
  );
};

export default Home;
