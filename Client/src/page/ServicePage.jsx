/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ServiceSection from "./../components/ServiceSection";
import { getService } from "../apiRequest/api";

const ServicePage = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getService();
      setList(res);
    })();
  }, []);

  return (
    <>
      <Layout>
        <ServiceSection list={list} />
      </Layout>
    </>
  );
};

export default ServicePage;
