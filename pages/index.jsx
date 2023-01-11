import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Buy My Time" />
      <Layout>
        <Hero />
        <Services />
        <Pricing />
      </Layout>
    </>
  );
}
