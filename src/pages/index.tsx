import type { NextPage } from "next";
import { db } from "../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export const getStaticProps = async () => {
  const docRef = doc(db, "cities", "test");
  const docSnap = await getDoc(docRef);

  const json = JSON.parse(JSON.stringify(docSnap));

  return {
    props: {
      posts: json
    }
  };
};

const Home: NextPage = ({ posts }) => {
  console.log(posts);
  console.log(posts._document.data.value.mapValue.fields.title.stringValue);
  return (
    <div>
      <h1>index</h1>
      <h1>{posts._document.data.value.mapValue.fields.title.stringValue}</h1>
    </div>
  );
};

export default Home;
