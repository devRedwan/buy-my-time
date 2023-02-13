import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ServicesContext } from "../../../context/Contexts";
import ButtonPrimary from "../buttons/ButtonPrimary";
import UserRating from "./UserRating";

const PostReview = () => {
  const router = useRouter();
  const { id } = router?.query;
  const { reviews, setReviews } = useContext(ServicesContext);
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRating = (value) => {
    setUserRating(value);
  };

  const postNewReview = async () => {
    if (!selectedRating) {
      toast.error("Please select a rating.", { duration: 2000 });
      return;
    }
    if (reviewer.length < 4 || reviewer.length > 60) {
      toast.error(
        "Please correct your name. Name should be at least 4 characters and no more than 60 characters long.",
        { duration: 3000 }
      );
      return;
    }
    if (review.length < 15) {
      toast.error(
        "Please re-write your review. Review should be at least 15 characters long.",
        { duration: 3000 }
      );
      return;
    }

    const reviewToast = toast.loading("Posting Review...");

    const newReview = {
      serviceId: id,
      rating: userRating,
      reviewer: reviewer,
      review: review,
      _createdAt: Date.now(),
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
      icon: "🚀",
      id: reviewToast,
    });
  };

  return (
    <>
      <div className="serviceReviews__newReview h-36 w-full mb-6">
        <input
          type="text"
          placeholder="Write Your Name..."
          className={`ml-2 mb-2 bg-transparent border-b border-x-0 border-t-0 border-blue-500 outline-none focus:ring-0 ${
            reviewer && "border-none"
          }`}
          onChange={(event) => setReviewer(event.target.value)}
          value={reviewer}
        />
        <textarea
          type="text"
          className="h-full outline-none w-full p-2 rounded-lg focus:outline-blue-500 focus:ring-0 focus:border-0 placeholder:text-gray-400 resize-none"
          placeholder="Write a review..."
          onChange={(event) => setReview(event.target.value)}
          value={review}
        />
      </div>
      <div className="review__ratingSubmit flex flex-wrap justify-evenly items-center relative w-full my-10">
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
