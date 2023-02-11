import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const servicesData = groq`*[_type == 'service']{
  'id': _id,...,
  seller->{'id':_id, name, sellerImageUrl, sellerRating},
  'reviews': *[_type == 'review' && references(^._id) ]{
     'id':_id,'reviewer':name,rating,review,'created':_createdAt,
      } | order(created desc)
  }`;
export default async function handler(request, response) {
  const services = await sanityClient.fetch(servicesData);
  response.status(200).json({ services });
}
