import { useContext, useEffect, useMemo, useState } from "react";
import ServicesContext from "../../context/servicesContext";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import SellerSkeletonCard from "../misc/seller-card/SellerSkeletonCard";
import SellerCard from "../misc/seller-card/SellerCard";

const ExploreSellers = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDropDown, setSortDropDown] = useState("");
  const { sellers } = useContext(ServicesContext);
  const [displayedSellers, setDisplayedSellers] = useState([]);

  const sortSellers = (a, b, sortType) => {
    if (sortType === "listed_services") {
      return b.totalServices - a.totalServices;
    } else if (sortType === "rating") {
      return b.sellerRating - a.sellerRating;
    }
    return 0;
  };

  const loadMoreData = () => {
    setDisplayedSellers([
      ...displayedSellers,
      ...sellers.slice(displayedSellers.length, displayedSellers.length + 2),
    ]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (sellers) {
      setTimeout(() => {
        setLoading(false);
      }, 500);

      sellers &&
        setDisplayedSellers(
          searchQuery === ""
            ? sellers
                .sort((a, b) => sortSellers(a, b, sortDropDown))
                .slice(0, 4)
            : sellers
                .sort((a, b) => sortSellers(a, b, sortDropDown))
                .filter((seller) =>
                  seller.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
        );
    }
  }, [sellers, searchQuery, sortDropDown]);

  return (
    <main className="exploreSellers py-6 max-w-screen-xl mx-auto">
      <section className="exploreSellersSection flex flex-col justify-center">
        <div className="filterSortWrapper flex flex-wrap justify-evenly mb-5">
          <select
            name="sortData"
            id="sortSellers"
            defaultValue="sortDropDown"
            className="sorting__DropDown w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center"
            onChange={(event) => setSortDropDown(event.target.value)}>
            <option value="">Sort By</option>
            <option value="listed_services">Most Services Listed</option>
            <option value="rating">Top Rating</option>
          </select>
          <input
            type="text"
            className="sellerFilter__searchbar w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center placeholder:text-gray-400"
            placeholder="Search Sellers"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
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

        <ButtonPrimary
          addClass={`SellersLoadMoreButton w-fit mx-auto my-4 ${
            sellers.length === displayedSellers.length || searchQuery !== ""
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

export default ExploreSellers;
