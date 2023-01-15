import Services from "../components/home/Services";
import TopServices from "../components/home/TopServices";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
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
