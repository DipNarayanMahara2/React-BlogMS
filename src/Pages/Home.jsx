import React from "react";
import Layout from "../Components/layout";
import BlogCard from "./components/BLogCard/BlogCard";


const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default Home;
