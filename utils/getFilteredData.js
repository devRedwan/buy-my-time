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
