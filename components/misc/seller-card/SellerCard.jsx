import Link from "next/link";
import StarIcon from "../../../public/assets/Icon/stars.svg";

const SellerCard = ({ seller }) => {
  return (
    <main className="sellerCardWrapper max-w-xl max-h-screen overflow-hidden p-4 sm:p-5 mx-auto w-full m-2 min-h-fit min-w-fit">
      <Link legacyBehavior href="/seller/[id]" as={`/seller/${seller?.id}`}>
        <section className="sellerCard__container mx-auto overflow-hidden shadow-lg shadow-blue-100 rounded-xl cursor-pointer flex flex-col sm:flex-row h-96 sm:h-72 w-full ">
          <div className="sellerImageWrapper w-full md:w-1/2 sm:h-full overflow-hidden ">
            <img
              className="sellerImage h-full w-full object-cover hover:scale-105 transition-all duration-1000 ease-in-out"
              src={seller?.sellerImageUrl}
              alt="BuyMyTime sellers"
            />
          </div>

          <div className="seller__textWrapper p-2 flex flex-col items-center justify-center w-full md:w-1/2 ">
            <h2 className="sellerTitle max-w-min font-semibold text-2xl md:text-2xl xl:text-3xl my-2 flex items-center justify-center text-blue-500">
              {seller?.name}
            </h2>
            <h3 className="sellerSeller__info flex flex-col items-center sm:flex-row justify-evenly w-11/12 mx-auto ">
              Total Listed Services: {seller?.totalServices}
            </h3>
            <div className="sellerDescription leading-relaxed mb-3 text-md  flex items-center justify-center">
              <p>Rating: {seller?.sellerRating} </p>
              <StarIcon className="h-5 w-5 ml-1" />
            </div>
          </div>
        </section>
      </Link>
    </main>
  );
};

export default SellerCard;
