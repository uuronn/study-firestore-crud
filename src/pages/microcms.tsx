import type { NextPage } from "next";

// GET
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/crud`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string
    }
  });

  const posts = await res.json();

  return {
    props: {
      posts: posts
    }
  };
};

// POST
export const postData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string
    },
    body: JSON.stringify({ title: "testData" })
  });
  const posts = await res.json();

  return console.log(posts);
};

const Home: NextPage = ({ posts }) => {
  console.log(posts.contents);
  return (
    <div>
      <h1>{posts.contents.title}</h1>
      <p>{posts.contents.body}</p>
      {posts.contents.map((item) => (
        <li key={item.title}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </li>
      ))}
      <button
        onClick={() => {
          postData();
        }}
      >
        post
      </button>
    </div>
  );
};

export default Home;
