import axios from "axios";

export const getServices = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`
  );
  return data.services;
};
