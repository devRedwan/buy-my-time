const getTopRatedServices = (services) => {
  const interviewService = services.find((service) => service.id === 873);
  const topRatedServices = [
    interviewService,
    ...services
      .filter((topService) => topService.rating === 5)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5),
  ];
  return topRatedServices;
};

export default getTopRatedServices;
