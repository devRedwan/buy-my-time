import { XMarkIcon } from "@heroicons/react/24/solid";
import ExistingReviews from "./ExistingReviews";
import PostReview from "./PostReview";

const ReviewModal = ({ reviewModalOpen, showReviews }) => {
  return (
    <div
      className={`serviceReview__wrapper fixed bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 p-4  w-full lg:w-3/4 max-w-2xl transition-opacity duration-300 ease-in-out rounded-lg drop-shadow-lg ${
        reviewModalOpen ? "opacity-100 z-50" : "opacity-0 hidden"
      }`}>
      <div className="selectedReviews relative p-4 rounded-lg bg-blue-100 shadow-lg shadow-blue-100 flex flex-col lg:justify-center w-full max-h-[70vh] overflow-y-auto">
        <h1 className="reviews__title text-center text-2xl my-4 font-medium relative">
          Reviews
        </h1>
        <XMarkIcon
          onClick={showReviews}
          className="h-7 w-7 text-blue-500 absolute top-3 right-3 cursor-pointer"
        />
        <PostReview />

        <ExistingReviews />
      </div>
    </div>
  );
};

export default ReviewModal;
