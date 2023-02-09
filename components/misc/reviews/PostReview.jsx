import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import UserRating from "./UserRating";

const PostReview = () => {
  const [userRating, setUserRating] = useState(0);
  const handleRating = (value) => {
    setUserRating(value);
  };
  return (
    <>
      <div className="serviceReviews__newReview h-36 w-full text-center mb-6">
        <textarea
          type="text"
          className="h-full w-full p-2 rounded-lg focus:shadow-blue-300 placeholder:text-gray-400 resize-none"
          placeholder="Write a review"
        />
      </div>
      <div className="review__ratingSubmit flex flex-wrap justify-evenly items-center relative w-full">
        <div className="review__rating h-10 relative flex items-center flex-wrap">
          Rate the Service:
          <UserRating onClick={handleRating} />
        </div>
        <ButtonPrimary addClass="!px-6 min-w-fit mx-2">
          Post Your Review
        </ButtonPrimary>
      </div>
    </>
  );
};

export default PostReview;
