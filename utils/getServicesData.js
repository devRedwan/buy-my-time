import axios from "axios";

export const getServicesData = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getServices`
  );
  return data.services;
};
