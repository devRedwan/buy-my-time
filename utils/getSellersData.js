import axios from "axios";

export const getSellersData = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSellers`
  );
  return data.sellers;
};
