import { useEffect, useMemo, useState } from "react";
import { sortAndFilterData } from "../../utils/getFilteredData";
import ServiceCard from "../misc/service-card/ServiceCard";
import ServicesSkeletonCard from "../misc/service-card/ServiceSkeletonCard";
import FilterSearchInput from "./FilterSearchInput";
import LoadMoreButton from "./LoadMoreButton";
import SortDropDown from "./SortDropDown";
import { serviceSortingOptions } from "./SortingOptions";

const ExploreServices = ({ getFilteredServices, services }) => {
  const allServices = useMemo(() => getFilteredServices, [services]);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serviceSearchTerm, setServiceSearchTerm] = useState("");
  const [serviceSortingValue, setServiceSortingValue] = useState("");

  useEffect(() => {
    if (allServices) {
      setTimeout(() => {
        setLoading(false);
      }, 500);

      sortAndFilterData(
        allServices,
        setDisplayedServices,
        6,
        "title",
        serviceSortingOptions,
        serviceSortingValue,
        serviceSearchTerm
      );
    }
  }, [
    allServices,
    serviceSearchTerm,
    serviceSortingValue,
    serviceSortingOptions,
  ]);

  return (
    <main className="exploreServices py-6 px-2 xl:px-5 max-w-screen-xl mx-auto">
      <section className="exploreServicesSection flex flex-col justify-center">
        <div className="filterSortWrapper flex flex-wrap justify-evenly mb-5">
          <SortDropDown
            setSortingValue={setServiceSortingValue}
            id="sortServices"
            sortingOptions={serviceSortingOptions}
          />

          <FilterSearchInput
            setSearchTerm={setServiceSearchTerm}
            SearchTerm={serviceSearchTerm}
            placeholder="Search Services"
          />
        </div>

        <div className="servicesCardList flex flex-wrap justify-evenly text-center animate-floatUp">
          {loading || !displayedServices
            ? new Array(displayedServices.length)
                .fill(0)
                .map((_, index) => <ServicesSkeletonCard key={index} />)
            : displayedServices.map(
                (service) =>
                  service && (
                    <ServiceCard
                      service={service}
                      key={service?.id}
                      className="serviceCard animate-floatUp"
                    />
                  )
              )}
        </div>

        <LoadMoreButton
          data={allServices}
          displayedData={displayedServices}
          setDisplayedData={setDisplayedServices}
          searchTerm={serviceSearchTerm}
          setLoading={setLoading}
          loadingIncrement={4}
        />
      </section>
    </main>
  );
};

export default ExploreServices;
