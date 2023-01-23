import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Collapsible from "react-collapsible";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const ExploreServices = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue);
    }
  };

  return (
    <main className="exploreServices py-6 px-2 xl:px-5 max-w-screen-xl mx-auto">
      <section className="exploreServicesSection">

        <div className="filterServices flex flex-wrap justify-evenly mb-5">
          <select
            name="filterList"
            id=""
            className="servicesFilter__DropDown w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center">
            <option value="" disabled selected>
              Filter Services By
            </option>
            <option className="text-blue-500" value="likes">
              Most Liked
            </option>
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

        <div className="servicesCardList flex flex-wrap justify-evenly"></div>
        
        <ButtonPrimary addClass="ServicesLoadMoreButton mx-auto my-4" href="">
          Load More
        </ButtonPrimary>
      </section>
    </main>
  );
};

export default ExploreServices;
