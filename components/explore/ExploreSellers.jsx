import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../context/Contexts";
import { sortAndFilterData } from "../../utils/getFilteredData";
import SellerCard from "../misc/seller-card/SellerCard";
import SellerSkeletonCard from "../misc/seller-card/SellerSkeletonCard";
import FilterSearchInput from "./FilterSearchInput";
import LoadMoreButton from "./LoadMoreButton";
import SortDropDown from "./SortDropDown";
import { sellerSortingOptions } from "./SortingOptions";

const ExploreSellers = () => {
  const [loading, setLoading] = useState(true);
  const [sellerSearchTerm, setSellerSearchTerm] = useState("");
  const [sellerSortingValue, setSellerSortingValue] = useState("");
  const { sellers } = useContext(ServicesContext);
  const [displayedSellers, setDisplayedSellers] = useState([]);

  useEffect(() => {
    if (sellers) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      sortAndFilterData(
        sellers,
        setDisplayedSellers,
        4,
        "name",
        sellerSortingOptions,
        sellerSortingValue,
        sellerSearchTerm
      );
    }
  }, [sellers, sellerSearchTerm, sellerSortingOptions, sellerSortingValue]);

  return (
    <main className="exploreSellers py-6 max-w-screen-xl mx-auto">
      <section className="exploreSellersSection flex flex-col justify-center">
        <div className="filterSortWrapper flex flex-wrap justify-evenly mb-5">
          <SortDropDown
            setSortingValue={setSellerSortingValue}
            id={"sortSellers"}
            sortingOptions={sellerSortingOptions}
          />

          <FilterSearchInput
            setSearchTerm={setSellerSearchTerm}
            SearchTerm={sellerSearchTerm}
            placeholder="Search Sellers"
          />
        </div>
        <div className="sellersCardList flex flex-wrap justify-evenly text-center">
          {loading || !displayedSellers
            ? new Array(displayedSellers.length)
                .fill(0)
                .map((_, index) => <SellerSkeletonCard key={index} />)
            : displayedSellers.map((seller) => (
                <SellerCard
                  seller={seller}
                  key={seller.id}
                  className="sellerCard"
                />
              ))}
        </div>

        <LoadMoreButton
          data={sellers}
          displayedData={displayedSellers}
          setDisplayedData={setDisplayedSellers}
          searchTerm={sellerSearchTerm}
          setLoading={setLoading}
          loadingIncrement={2}
        />
      </section>
    </main>
  );
};

export default ExploreSellers;
