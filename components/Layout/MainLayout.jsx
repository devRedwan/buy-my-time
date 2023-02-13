import React, { useContext } from "react";
import Footer from "/components/Layout/Footer.jsx";
import Header from "./Header";
import { AuthContext } from "../../context/Contexts";
import Modal from "../misc/Modal";
import SignInForm from "./SignInForm";

const MainLayout = ({ children }) => {
  const { modalOpen, toggleModalOpen } = useContext(AuthContext);

  return (
    <>
      <div className={`${modalOpen && "blur-md pointer-events-none fixed"}`}>
        <Header toggleModalOpen={() => toggleModalOpen("signIn")} />
        {children}
        <Footer />
      </div>
      <Modal title="Sign In" id="signIn">
        <SignInForm />
      </Modal>
    </>
  );
};

export default MainLayout;
