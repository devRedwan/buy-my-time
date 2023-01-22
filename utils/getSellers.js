import axios from "axios";

export const getSellers = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sellers`
  );
  return data.sellers;
};
