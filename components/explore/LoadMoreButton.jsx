import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const LoadMoreButton = ({
  data,
  displayedData,
  setDisplayedData,
  searchTerm,
  setLoading,
  loadingIncrement,
}) => {
  const loadMoreData = () => {
    setDisplayedData([
      ...displayedData,
      ...data?.slice(
        displayedData?.length,
        displayedData?.length + loadingIncrement
      ),
    ]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <ButtonPrimary
      addClass={`LoadMoreButton w-fit mx-auto my-4 ${
        data?.length === displayedData?.length || searchTerm !== ""
          ? "hidden"
          : ""
      }`}
      onClick={loadMoreData}>
      Load More
    </ButtonPrimary>
  );
};

export default LoadMoreButton;
