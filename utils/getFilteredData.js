export const getMyInterviewService = (services) => {
  const interviewServiceId = "e7f5dba1-b25a-4f92-a71f-8c55f9d31405";
  const interviewService = services.find(
    (service) => service.id === interviewServiceId
  );
  return interviewService;
};

export const getAllServices = (services) => {
  const myInterviewService = getMyInterviewService(services);
  const allServices = [
    myInterviewService,
    ...services.filter((service) => service.id !== myInterviewService.id),
  ];
  return allServices;
};

export const getTopRatedServices = (services) => {
  const myInterviewService = getMyInterviewService(services);
  const topRatedServices = [
    myInterviewService,
    ...services
      .filter((topService) => topService.rating === 5)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5),
  ];
  return topRatedServices;
};

export const getMostPopularServices = (services) => {
  const MostPopularServices = services
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 6);
  return MostPopularServices;
};

export const getTopRatedSellers = (sellers) => {
  const topRatedSellers = sellers
    .sort((a, b) => b.sellerRating - a.sellerRating)
    .slice(0, 4);
  return topRatedSellers;
};

export const sortData = (sortingOptions, a, b, sortType) => {
  return sortingOptions.reduce((result, sortingOption) => {
    if (sortType === sortingOption.sortingValue) {
      return b[sortingOption.sortingValue] - a[sortingOption.sortingValue];
    }
    return result;
  }, 0);
};

export const sortAndFilterData = (
  data,
  setDisplayedData,
  displayedDataLength,
  filteringProperty,
  sortingOptions,
  sortingValue,
  searchTerm
) => {
  return setDisplayedData(
    searchTerm === ""
      ? data
          ?.sort((a, b) => sortData(sortingOptions, a, b, sortingValue))
          ?.slice(0, displayedDataLength)
      : data
          ?.sort((a, b) => sortData(sortingOptions, a, b, sortingValue))
          ?.filter((item) =>
            item[filteringProperty]
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
  );
};
