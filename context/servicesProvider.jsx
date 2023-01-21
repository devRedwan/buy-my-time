import React, { useEffect, useReducer } from "react";
import { getServices } from "../utils/getServices";
import ServicesContext from "./servicesContext";
import servicesReducer from "./servicesReducer";
import { GET_SERVICES } from "./servicesTypes";

const ServicesProvider = ({ children }) => {
  const initialState = {
    services: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(servicesReducer, initialState);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices();
        dispatch({ type: GET_SERVICES, payload: data });
      } catch (error) {
        console.error(error);
      }
    }
    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider
      value={{ services: state.services, loading: state.loading, dispatch }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
