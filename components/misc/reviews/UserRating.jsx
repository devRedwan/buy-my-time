import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const UserRating = ({ onClick, selectedRating, setSelectedRating }) => {
  const [hoverRating, setHoverRating] = useState(5);

  const handleClick = (value) => {
    setSelectedRating(Math.max(value, 1));
    onClick(Math.max(value, 1));
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`w-6 h-6 cursor-pointer ${
            selectedRating !== null && selectedRating >= value
              ? "text-starYellow"
              : hoverRating >= value
              ? "text-starYellow"
              : "text-gray-500"
          } hover:text-starYellow`}
          onClick={() => handleClick(value)}
          onMouseEnter={() => setHoverRating(value)}
          onMouseLeave={() => {
            setHoverRating(selectedRating || 1);
          }}>
          <StarIcon />
        </span>
      ))}
    </div>
  );
};

export default UserRating;
