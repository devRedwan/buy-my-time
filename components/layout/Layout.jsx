import React from "react";
import Footer from "/components/layout/Footer.jsx";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
  ß;
};

export default Layout;
