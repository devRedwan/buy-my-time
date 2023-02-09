import React, { useEffect, useReducer, useState, useRef } from "react";
import { getSellersData } from "../utils/getSellersData";
import { getServicesData } from "../utils/getServicesData";
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
  const [cart, setCart] = useState([]);
  const initialRender = useRef(true);

  const setServices = (newServices) => {
    dispatch({ type: GET_SERVICES, payload: newServices });
  };

  useEffect(() => {
    async function fetchServices() {
      try {
        const serviceData = await getServicesData();
        dispatch({ type: GET_SERVICES, payload: serviceData });
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchSellers() {
      try {
        const sellerData = await getSellersData();
        dispatch({ type: GET_SELLERS, payload: sellerData });
      } catch (error) {
        console.error(error);
      }
    }
    if (JSON.parse(localStorage.getItem("cart"))) {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      setCart([...cart, ...storedCart]);
    }
    fetchServices();
    fetchSellers();
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        sellers: state.sellers,
        loading: state.loading,
        dispatch,
        cart,
        setCart,
        setServices,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
