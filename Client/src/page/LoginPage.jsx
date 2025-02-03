/* eslint-disable no-unused-vars */
import React from "react";
import MenuBar from "../components/MenuBar";
import LoginForm from "./../components/LoginForm";
import FooterBar from "../components/FooterBar";

const LoginPage = () => {
  return (
    <>
      <MenuBar />
      
      <LoginForm />

      <FooterBar />
    </>
  );
};

export default LoginPage;
