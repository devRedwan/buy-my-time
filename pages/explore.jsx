import { useContext } from "react";
import ExploreSellers from "../components/explore/ExploreSellers";
import ExploreServices from "../components/explore/ExploreServices";
import Layout from "../components/layout";
import SeoHead from "../components/layout/SeoHead";
import AccordianMenu from "../components/misc/AccordianMenu";
import ServicesContext from "../context/servicesContext";
import { getAllServices } from "../utils/getFilteredData";

export default function Explore() {
  const { services } = useContext(ServicesContext);

  return (
    <>
      <SeoHead title="Buy My Time | Explore" />
      <Layout>
        <header className="exploreTitleWrapper bg-[url('https://i.postimg.cc/s2j9Dn6S/Explore-title-background.png')] bg-no-repeat bg-cover bg-blend-overlay h-32 sm:h-40 w-full ">
          <div className="h-full w-full flex justify-center items-center bg-blue-500 bg-opacity-95">
            <h1 className="exploreTitle text-4xl sm:text-7xl font-semibold  text-white-500 tracking-widest">
              Explore
            </h1>
          </div>
        </header>
        <main className="explore px-8 xl:px-16 max-w-screen-xl mx-auto">
          <section className="grid grid-flow-row gap-8 py-6 sm:py-16 sm:grid-flow-col">
            <AccordianMenu title="Services">
              <ExploreServices
                getFilteredServices={getAllServices(services)}
                services={services}
              />
            </AccordianMenu>
          </section>

          <section className="grid grid-flow-row gap-8 pt-6 pb-12 sm:pt-16 sm:pb-32 sm:grid-flow-col">
            <AccordianMenu title="Service Professionals">
              <ExploreSellers />
            </AccordianMenu>
          </section>
        </main>
      </Layout>
    </>
  );
}
