import { GET_SERVICES } from "./servicesTypes";

const servicesReducer = (state, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default servicesReducer;
