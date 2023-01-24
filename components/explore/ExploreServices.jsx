import { useContext, useEffect, useState } from "react";
import ServicesContext from "../../context/servicesContext";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import ServiceCard from "../misc/service-card/ServiceCard";
import { getAllServices } from "../../utils/getFilteredData";
import ServicesSkeletonCard from "../misc/service-card/ServiceSkeletonCard";

const ExploreServices = () => {
  const [inputValue, setInputValue] = useState("");
  const { services, sellers, loading } = useContext(ServicesContext);
  const [allServices, setAllServices] = useState([]);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [displayedServicesIds, setDisplayedServicesIds] = useState(new Set());

  const loadMoreData = () => {
    console.log("load more data");
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue);
    }
  };

  useEffect(() => {
    setAllServices(getAllServices(services));
    setDisplayedServices(getAllServices(services).slice(0, 6));
  }, [services]);

  return (
    <main className="exploreServices py-6 px-2 xl:px-5 max-w-screen-xl mx-auto">
      <section className="exploreServicesSection flex flex-col justify-center">
        <div className="filterSortWrapper flex flex-wrap justify-evenly mb-5">
          <select
            name="sortData"
            id="sortServices"
            defaultValue=""
            className="sorting__DropDown w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center">
            <option value="" disabled>
              Sort By
            </option>
            <option value="likes">Most Liked</option>
            <option value="rating">Top Rated</option>
            <option value="visits">Most Inquired</option>
          </select>
          <input
            type="text"
            className="serviceFilter__searchbar w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center placeholder:text-gray-400"
            placeholder="Search Services"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyUp={handleKeyUp}
          />
        </div>

        <div className="servicesCardList flex flex-wrap justify-evenly text-center">
          {displayedServices.map((service, index) =>
            service ? (
              <ServiceCard
                service={service}
                key={service.id}
                className="serviceCard"
              />
            ) : (
              <ServicesSkeletonCard key={index} />
            )
          )}
        </div>

        <ButtonPrimary
          addClass="ServicesLoadMoreButton w-fit mx-auto my-4"
          onClick={loadMoreData}>
          Load More
        </ButtonPrimary>
      </section>
    </main>
  );
};

export default ExploreServices;
