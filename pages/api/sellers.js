import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const sellersData = groq`*[_type=='seller']{
   'id': _id, name, sellerImageUrl, sellerRating,
   'totalServices': count(*[_type == 'service' && references(^._id)]),
   'serviceDetails': *[_type == 'service' && references(^._id)]}`;

export default async function handler(_, response) {
  const sellers = await sanityClient.fetch(sellersData);
  response.status(200).json({ sellers });
}
