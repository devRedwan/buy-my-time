import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useContext } from "react";
import ServicesContext from "../../../context/servicesContext";
import TimeAgo from "react-timeago";

const ExistingReviews = () => {
  const router = useRouter();
  const { id: serviceSelectedId } = router?.query;
  const { services } = useContext(ServicesContext);
  const selectedService = services?.find(
    (service) => service?.id === serviceSelectedId
  );
  const selectedReviews = selectedService?.reviews;
  console.log(selectedReviews);

  return (
    <div className="existingReviews__wrapper mt-4 w-full">
      <h2 className="existingReviews__title text-center text-xl font-medium my-2">
        Customer Reviews
      </h2>
      <div className="existingReviews__list my-2 w-full">
        {selectedReviews?.map((review) => (
          <div
            key={review?.id}
            className="existing__review py-3 my-6 rounded-lg shadow-lg shadow-blue-300">
            <div className="review__header flex flex-wrap justify-evenly items-center">
              <h3 className="review__reviewer">{review?.reviewer}</h3>
              <div className="review__rating flex items-center">
                <StarIcon className="text-starYellow h-6 w-6 mr-1" />
                {review?.rating.toFixed(1)}
              </div>

              <TimeAgo
                date={review?.created}
                className="review__timestamp text-sm text-gray-400 font-thin"
              />
            </div>
            <p className="review__text px-4 py-2 rounded-lg text-sm text-left">
              {review?.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExistingReviews;
