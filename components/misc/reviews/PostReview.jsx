import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import ServicesContext from "../../../context/servicesContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import UserRating from "./UserRating";

const PostReview = ({ serviceSelectedId }) => {
  const { reviews, setReviews, setServiceId } = useContext(ServicesContext);
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRating = (value) => {
    setUserRating(value);
  };
  const postNewReview = async () => {
    setServiceId(serviceSelectedId);
    if (!selectedRating) {
      alert("Please select a rating.");
      return;
    }
    if (reviewer.length < 4 || reviewer.length > 60) {
      alert(
        "Please correct your name. Name should be at least 4 characters and no more than 60 characters long."
      );

      return;
    }
    if (review.length < 15) {
      alert(
        "Please re-write your review. Review should be at least 15 characters long."
      );
      return;
    }
    const reviewToast = toast.loading("Posting Review...");
    const newReview = {
      serviceId: serviceSelectedId,
      rating: userRating,
      reviewer: reviewer,
      review: review,
    };

    await fetch(`/api/addReview`, {
      body: JSON.stringify(newReview),
      method: "POST",
    });
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    setUserRating(5);
    setReview("");
    setReviewer("");
    toast.success("Review Posted!", {
      id: reviewToast,
    });
  };

  return (
    <>
      <div className="serviceReviews__newReview h-36 w-full mb-6">
        <input
          type="text"
          placeholder="Write Your Name..."
          className={`ml-2 mb-2 bg-transparent border-b border-blue-500 outline-none ${
            reviewer && "border-none"
          }`}
          onChange={(event) => setReviewer(event.target.value)}
          value={reviewer}
        />
        <textarea
          type="text"
          className="h-full outline-none w-full p-2 rounded-lg focus:outline-blue-500 placeholder:text-gray-400 resize-none"
          placeholder="Write a review..."
          onChange={(event) => setReview(event.target.value)}
          value={review}
        />
      </div>
      <div className="review__ratingSubmit flex flex-wrap justify-evenly items-center relative w-full mt-4">
        <div className="review__rating h-10 relative flex items-center flex-wrap">
          Rate the Service:
          <UserRating
            onClick={handleRating}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
        </div>
        <ButtonPrimary addClass="!px-6 min-w-fit mx-2" onClick={postNewReview}>
          Post Your Review
        </ButtonPrimary>
      </div>
    </>
  );
};

export default PostReview;
