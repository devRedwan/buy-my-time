import "../styles/tailwind.css";
import "../styles/slick.css";
import ServicesProvider from "../context/ServicesProvider";
import BackToTopButton from "../components/misc/buttons/BackToTopButton";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "../context/AuthContextProvider";
import { AuthContext } from "../context/Contexts";
import { useContext } from "react";
import Modal from "../components/misc/Modal";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ServicesProvider>
        <Toaster
          containerStyle={{
            top: "50%",
          }}
        />
        <Component {...pageProps}  />
        <BackToTopButton />
      </ServicesProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
