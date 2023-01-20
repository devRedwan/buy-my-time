import Services from "../components/home/Services";
import TopServices from "../components/home/TopServices";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { getServices } from "../utils/getServices";

export default function Home({ services }) {
  console.log(services);
  return (
    <>
      <SeoHead title="Buy My Time" />
      <Layout>
        <Hero />
        <Services />
        <TopServices />
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const services = await getServices();
  return {
    props: {
      services,
    },
  };
};
