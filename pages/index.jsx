import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import TopRatedSellers from "../components/home/TopRatedSellers";
import FeaturedServices from "../components/home/FeautredServices";
import Layout from "../components/layout/index";
import SeoHead from "../components/layout/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Buy My Time" />
      <Layout>
        <Hero />
        <Services />
        <FeaturedServices />
        <TopRatedSellers />
      </Layout>
    </>
  );
}
