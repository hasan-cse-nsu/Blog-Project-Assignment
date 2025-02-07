/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import SliderSection from "../components/SliderSection";
import { getAllBlogs } from "../apiRequest/api";

const HomePage = () => {
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
        <SliderSection list={list} />
      </Layout>
    </>
  );
};

export default HomePage;
