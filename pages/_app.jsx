import { Toaster } from "react-hot-toast";
import BackToTopButton from "../components/misc/buttons/BackToTopButton";
import AuthContextProvider from "../context/AuthContextProvider";
import ServicesProvider from "../context/ServicesProvider";
import "../styles/slick.css";
import "../styles/tailwind.css";

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
