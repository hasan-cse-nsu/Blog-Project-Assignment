/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BlogList from "../components/BlogList";
import { getAllBlogs } from "../apiRequest/api";

const BlogPage = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getAllBlogs();
      setList(res);
    })();
  }, []);

  return (
    <>
      <Layout>
        <BlogList list={list} />
      </Layout>
    </>
  );
};

export default BlogPage;
