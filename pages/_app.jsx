import "../styles/tailwind.css";
import "../styles/slick.css";
import ServicesProvider from "../context/servicesProvider";
import BackToTopButton from "../components/misc/buttons/BackToTopButton";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ServicesProvider>
      <Toaster
        containerStyle={{
          top: "50%",
        }}
      />
      <Component {...pageProps} />
      <BackToTopButton />
    </ServicesProvider>
  );
}

export default MyApp;
