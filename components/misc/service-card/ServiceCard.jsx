import { EyeIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <main className="serviceCardWrapper max-w-lg max-h-screen overflow-hidden p-6 sm:p-8 mx-auto min-h-fit ">
      <Link href="/service/[id]" as={`/service/${service?.id}`}>
        <section className="serviceCard__container overflow-hidden shadow-lg shadow-blue-100 rounded-xl cursor-pointer">
          <div className="serviceImageWrapper w-full h-1/2 overflow-hidden ">
            <img
              className="h-40 sm:h-60 object-cover w-full hover:scale-105 transition-all duration-1000 ease-in-out"
              src={service?.serviceImageUrl}
              alt="BuyMyTime Services"
            />
          </div>

          <div className="service__textWrapper p-2">
            <h3 className="serviceTitle font-semibold text-xl sm:text-3xl my-2 sm:h-20 flex items-center justify-center">
              {service?.title}
            </h3>
            <p className="serviceDescription mb-3 text-sm sm:h-24  flex items-center justify-center">
              {service?.description}
            </p>

            <div className="serviceSeller__info flex sm:h-28 flex-col items-center sm:flex-row justify-evenly w-11/12  mx-auto ">
              <h3 className="service__Price">${service?.price} / Hour</h3>
              <Link href="/seller/[id]" as={`/seller/${service?.seller.id}`}>
                <img
                  className="serviceSeller__image w-24 h-24 object-cover mb-3 rounded-full shadow-xl shadow-blue-100 hover:scale-105 hover:shadow-blue-300 transition-all duration-500 ease-in-out cursor-pointer"
                  src={service?.seller.sellerImageUrl}
                  alt="Service Professional - buymytime"
                />
              </Link>
              <div className="serviceSeller__text transition-all duration-500 ease-in-out">
                <h3 className="serviceSeller__name text-md">
                  {service?.seller.name}
                </h3>
                <p className="serviceSeller__meta text-xs">
                  Service Professional
                </p>
              </div>
            </div>
          </div>
          <div className="service_metaData flex justify-around">
            <div className="service__visits flex align-center">
              <EyeIcon className="h-5 w-5 text-gray-400" /> &nbsp;{" "}
              {service?.visits}
            </div>
            <div className="service__likes flex align-center">
              <HeartIcon className="h-5 w-5 text-blue-500" />
              &nbsp;
              {service?.likes}
            </div>
            <div className="service__rating flex align-center">
              <StarIcon className="h-5 w-5 text-green-500" />
              &nbsp;
              {service?.rating.toFixed(1)}
            </div>
          </div>
        </section>
      </Link>
    </main>
  );
};

export default ServiceCard;
