import React, { useContext } from "react";
import Footer from "/components/Layout/Footer.jsx";
import Header from "./Header";
import { AuthContext } from "../../context/Contexts";
import Modal from "../misc/Modal";

const MainLayout = ({ children }) => {
  const { modalOpen } = useContext(AuthContext);
  return (
    <>
      <div className={`${modalOpen && "blur-md pointer-events-none fixed"}`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
