import "../styles/tailwind.css";
import "../styles/slick.css";
import ServicesProvider from "../context/servicesProvider";
import BackToTopButton from "../components/misc/buttons/BackToTopButton";

function MyApp({ Component, pageProps }) {
  return (
    <ServicesProvider>
      <Component {...pageProps} />
      <BackToTopButton />
    </ServicesProvider>
  );
}

export default MyApp;
