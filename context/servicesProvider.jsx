import React, { useEffect, useReducer, useState } from "react";
import { getReviewsData } from "../utils/getReviewsData";
import { getSellersData } from "../utils/getSellersData";
import { getServicesData } from "../utils/getServicesData";
import { ServicesContext } from "./Contexts";
import servicesReducer from "./ServicesReducer";
import { GET_REVIEWS, GET_SELLERS, GET_SERVICES } from "./ServicesTypes";

const ServicesProvider = ({ children }) => {
  const initialState = {
    services: [],
    sellers: [],
    reviews: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(servicesReducer, initialState);
  const [serviceId, setServiceId] = useState();

  const setServices = (newServices) => {
    dispatch({ type: GET_SERVICES, payload: newServices });
  };

  const setReviews = (newReviews) => {
    dispatch({ type: GET_REVIEWS, payload: newReviews });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const serviceData = await getServicesData();
        dispatch({ type: GET_SERVICES, payload: serviceData });
        const sellerData = await getSellersData();
        dispatch({ type: GET_SELLERS, payload: sellerData });
        const reviewsData = await getReviewsData(serviceId);
        dispatch({ type: GET_REVIEWS, payload: reviewsData });
      } catch (error){
        console.error(error);
      }
    }
    fetchData();
  }, [serviceId, dispatch]);

  const values = {
    services: state.services,
    sellers: state.sellers,
    reviews: state.reviews,
    loading: state.loading,
    dispatch,
    setServices,
    setReviews,
    setServiceId,
  };

  return (
    <ServicesContext.Provider value={values}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
