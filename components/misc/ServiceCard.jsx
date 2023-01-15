import { EyeIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="serviceWrapper max-w-lg overflow-hidden p-5">
      <Link href="/service/[id]" as={`/service/${service.id}`}>
        <div className="serviceBox__container overflow-hidden shadow-lg shadow-blue-100 rounded-lg ">
          <div className="serviceImageWrapper w-full h-1/2">
            <img
              className="h-60 object-cover w-full "
              src={service.imageURL}
              alt="BuyMyTime Services"
            />
          </div>
          <h3 className="serviceTitle font-bold">{service.title}</h3>
          <p className="serviceTitle">{service.description}</p>
          <div className="service_metaData flex justify-around">
            <div className="service__visits flex align-center">
              <EyeIcon className="h-5 w-5" /> &nbsp; {service?.visits}
            </div>
            <div className="service__likes flex align-center">
              <HeartIcon className="h-5 w-5" />
              &nbsp;
              {service.likes}
            </div>
            <div className="service__rating flex align-center">
              <StarIcon className="h-5 w-5" />
              &nbsp;
              {service.rating}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
