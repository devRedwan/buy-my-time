import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import TopRatedServices from "../components/home/TopRatedServices";
import Layout from "../components/layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Buy My Time" />
      <Layout>
        <Hero />
        <Services />
        <TopRatedServices />
      </Layout>
    </>
  );
}
