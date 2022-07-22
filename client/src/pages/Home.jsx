import React from "react";
import { posts } from "../data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
