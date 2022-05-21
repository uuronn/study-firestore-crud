import type { NextPage } from "next";
import { db } from "../firebaseConfig";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";

// export const getStaticProps = async () => {
//   const docRef = doc(db, "cities", "test");
//   const docSnap = await getDoc(docRef);

//   // const json = JSON.parse(JSON.stringify(docSnap));

//   return {
//     props: {
//       posts: json
//     }
//   };
// };

const main = async () => {
  const docRef = doc(db, "cities", "test");
  const docSnap = await getDoc(docRef);

  console.log(docSnap.id);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data().title);
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
};

main();

const sub = async () => {
  const querySnapshot = await getDocs(collection(db, "cities"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    console.log(doc.data());
  });
};

sub();

const Home: NextPage = () => {
  // console.log(posts._document.data.value.mapValue.fields.title.stringValue);
  return (
    <div>
      <h1>index</h1>
      {/* <h1>{posts._document.data.value.mapValue.fields.title.stringValue}</h1> */}
    </div>
  );
};

export default Home;
