import React, { useContext } from "react";
import Footer from "/components/Layout/Footer.jsx";
import Header from "./Header";
import { AuthContext } from "../../context/Contexts";
import Modal from "../misc/Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const MainLayout = ({ children }) => {
  const { modalOpen, toggleModalOpen } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${
          modalOpen && "blur-md pointer-events-none fixed w-full"
        }`}>
        <Header
          modalSignIn={() => toggleModalOpen("signIn")}
          modalSignUp={() => toggleModalOpen("signUp")}
        />
        {children}
        <Footer />
      </div>
      <Modal title="Sign In" id="signIn">
        <SignInForm />
      </Modal>
      <Modal title="Sign Up" id="signUp">
        <SignUpForm />
      </Modal>
    </>
  );
};

export default MainLayout;
