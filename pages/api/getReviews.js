import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export default async function handler(req, res) {
  const serviceId = req.query.serviceId;

  const reviewsData = groq`*[_type == 'review' && references(*[_type == 'service' && _id == $serviceId]._id)]
   {'id':_id,'reviewer':name,rating,review,'created':_createdAt,...} | order(_createdAt desc)`;

  try {
    const reviews = await sanityClient.fetch(reviewsData, { serviceId });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
