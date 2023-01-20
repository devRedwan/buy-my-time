import { createClient } from "next-sanity";
import { sanityClient } from "./sanity";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

const services = require("./services.json");

services.forEach((service) => {
  const seller = service.seller;
  delete service.seller;
  sanityClient.patch
    .set({ seller: { _type: "reference", _ref: seller.id } })
    .commit();
});
