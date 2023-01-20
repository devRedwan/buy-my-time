import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const servicesData = groq`*[_type == 'service'] {_id,...,seller->{name,sellerImageUrl,sellerRating}}`;
export default async function handler(request, response) {
  const services = await sanityClient.fetch(servicesData);
  response.status(200).json({ services });
}
