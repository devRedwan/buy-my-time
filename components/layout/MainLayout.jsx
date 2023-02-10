import React from "react";
import Footer from "/components/layout/Footer.jsx";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
  ß;
};

export default MainLayout;
