import { useContext, useEffect, useMemo, useState } from "react";
import ServicesContext from "../../context/servicesContext";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import ServiceCard from "../misc/service-card/ServiceCard";
import { getAllServices } from "../../utils/getFilteredData";
import ServicesSkeletonCard from "../misc/service-card/ServiceSkeletonCard";

const ExploreServices = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDropDown, setSortDropDown] = useState("");
  const { services } = useContext(ServicesContext);
  const allServices = useMemo(() => getAllServices(services), [services]);
  const [displayedServices, setDisplayedServices] = useState([]);

  const sortServices = (a, b, sortType) => {
    if (sortType === "likes") {
      return b.likes - a.likes;
    } else if (sortType === "rating") {
      return b.rating - a.rating;
    } else if (sortType === "visits") {
      return b.visits - a.visits;
    }
    return 0;
  };

  const loadMoreData = () => {
    setDisplayedServices([
      ...displayedServices,
      ...allServices.slice(
        displayedServices.length,
        displayedServices.length + 4
      ),
    ]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (allServices) {
      setTimeout(() => {
        setLoading(false);
      }, 500);

      allServices &&
        setDisplayedServices(
          searchQuery === ""
            ? allServices
                .sort((a, b) => sortServices(a, b, sortDropDown))
                .slice(0, 6)
            : allServices
                .sort((a, b) => sortServices(a, b, sortDropDown))
                .filter((service) =>
                  service.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
        );
    }
  }, [allServices, searchQuery, sortDropDown]);

  return (
    <main className="exploreServices py-6 px-2 xl:px-5 max-w-screen-xl mx-auto">
      <section className="exploreServicesSection flex flex-col justify-center">
        <div className="filterSortWrapper flex flex-wrap justify-evenly mb-5">
          <select
            name="sortData"
            id="sortServices"
            defaultValue="sortDropDown"
            className="sorting__DropDown w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center"
            onChange={(event) => setSortDropDown(event.target.value)}>
            <option value="">Sort By</option>
            <option value="likes">Most Likes</option>
            <option value="rating">Top Rating</option>
            <option value="visits">Most Visits</option>
          </select>
          <input
            type="text"
            className="serviceFilter__searchbar w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center placeholder:text-gray-400"
            placeholder="Search Services"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        <div className="servicesCardList flex flex-wrap justify-evenly text-center">
          {loading || !displayedServices
            ? new Array(displayedServices.length)
                .fill(0)
                .map((_, index) => <ServicesSkeletonCard key={index} />)
            : displayedServices.map((service, index) => (
                <ServiceCard
                  service={service}
                  key={service.id}
                  className="serviceCard"
                />
              ))}
        </div>

        <ButtonPrimary
          addClass={`ServicesLoadMoreButton w-fit mx-auto my-4 ${
            allServices.length === displayedServices.length ||
            searchQuery !== ""
              ? "hidden"
              : ""
          }`}
          onClick={loadMoreData}>
          Load More
        </ButtonPrimary>
      </section>
    </main>
  );
};

export default ExploreServices;
