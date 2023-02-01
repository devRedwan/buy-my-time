import StarIcon from "../../../public/assets/Icon/stars.svg";
import getScrollAnimation from "../../../utils/getScrollAnimation";

const SellerImageCard = ({ selectedSeller, customSellerNameStyle }) => {
  return (
    <div className="sellerInfoWrapper  max-w-xl rounded-lg flex felx-col items-center justify-center shadow-lg shadow-gray-400 relative group overflow-hidden">
      <img
        src={selectedSeller?.sellerImageUrl}
        alt="BuyMyTime Service Professional Image"
        className="w-full overflow-hidden rounded-lg group-hover:scale-105 group-hover:blur-sm transition-all duration-500 ease-in-out"
      />
      <div className="sellerInfo__bg absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-300 to-blue-100  rounded-lg overflow-hidden opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"></div>

      <div className="sellerDescription flex flex-col absolute opacity-0 translate-y-72 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h2
          className={`sellerName ${customSellerNameStyle} w-full text-center font-semibold mb-3 text-2xl sm:text-4xl md:text-5xl`}>
          {selectedSeller?.name}
        </h2>
        <h3 className="sellerSeller__info flex flex-col items-center sm:flex-row justify-evenly mx-auto ">
          Total Listed Services: {selectedSeller?.totalServices}
        </h3>
        <div className="sellerDescription leading-relaxed mb-3 text-md flex items-center justify-center">
          <p className="text-black-600">
            Rating: {selectedSeller?.sellerRating}{" "}
          </p>
          <StarIcon className="h-5 w-5 mb-1" />
        </div>
      </div>
    </div>
  );
};

export default SellerImageCard;
