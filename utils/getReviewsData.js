import axios from "axios";

export const getReviewsData = async (serviceId) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getReviews?serviceId=${serviceId}`
  );
  return data.reviews;
};
