import Layout from "../components/Layout/index";
import SeoHead from "../components/layout/SeoHead";

export default function () {
  return (
    <>
      <SeoHead title="Buy My Time | Cart" />
      <Layout>
        <h1 className="text-red relative h-35 border-black-600">
          This is the Cart Page
        </h1>
      </Layout>
    </>
  );
}
