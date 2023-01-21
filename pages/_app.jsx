import "../styles/tailwind.css";
import "../styles/slick.css";
import ServicesProvider from "../context/servicesProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ServicesProvider>
      <Component {...pageProps} />
    </ServicesProvider>
  );
}

export default MyApp;
