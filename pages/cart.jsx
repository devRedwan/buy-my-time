import Layout from "../components/Layout/index";
import SeoHead from "../components/layout/SeoHead";
import PageHeader from "../components/misc/PageHeader";

export default function () {
  return (
    <>
      <SeoHead title="Buy My Time | Cart" />
      <Layout>
        <PageHeader title="Cart" bgImageKey="CartBGImage" />

        <h1 className="text-red relative h-35 border-black-600">
          This is the Cart Page
        </h1>
      </Layout>
    </>
  );
}
