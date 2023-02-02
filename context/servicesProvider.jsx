import React, { useEffect, useReducer } from "react";
import { getSellers } from "../utils/getSellers";
import { getServices } from "../utils/getServices";
import ServicesContext from "./servicesContext";
import servicesReducer from "./servicesReducer";
import { GET_SERVICES, GET_SELLERS } from "./servicesTypes";

const ServicesProvider = ({ children }) => {
  const initialState = {
    services: [],
    sellers: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(servicesReducer, initialState);

  useEffect(() => {
    async function fetchServices() {
      try {
        const serviceData = await getServices();
        dispatch({ type: GET_SERVICES, payload: serviceData });
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchSellers() {
      try {
        const sellerData = await getSellers();
        dispatch({ type: GET_SELLERS, payload: sellerData });
      } catch (error) {
        console.error(error);
      }
    }
    fetchServices();
    fetchSellers();
  }, []);

  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        sellers: state.sellers,
        loading: state.loading,
        dispatch,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
