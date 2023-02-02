import { GET_SERVICES, GET_SELLERS } from "./servicesTypes";

const servicesReducer = (state, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
    case GET_SELLERS:
      return {
        ...state,
        sellers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default servicesReducer;
