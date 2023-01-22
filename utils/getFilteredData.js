export const getTopRatedServices = (services) => {
  const interviewServiceId = "e7f5dba1-b25a-4f92-a71f-8c55f9d31405";
  const interviewService = services.find(
    (service) => service.id === interviewServiceId
  );
  const topRatedServices = [
    interviewService,
    ...services
      .filter((topService) => topService.rating === 5)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5),
  ];
  return topRatedServices;
};

export const getTopRatedSellers = (sellers) => {
  const topRatedSellers = sellers
    .sort((a, b) => b.sellerRating - a.sellerRating)
    .slice(0, 4);
  return topRatedSellers;
};
