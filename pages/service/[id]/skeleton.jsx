export const SkeletonServiceDetails = () => {
  return (
    <>
      <div className="serviceSelected__LeftColumn max-w-2xl min-w-full">
        <h2 className="serviceSelected__Title bg-gray-100 animate-pulse rounded-lg h-10 w-full"></h2>
        <div className="service__metaData flex flex-wrap justify-start items-center lg:hidden">
          <div className="sellerinfo__wrapper flex items-center my-3 ">
            <div className="seller__image bg-gray-100 animate-pulse w-12 h-12 object-cover rounded-full shadow-xl shadow-blue-100  "></div>
            <h3 className="seller__name m-3 bg-gray-100 animate-pulse rounded-lg h-7 w-36"></h3>
          </div>
          <div className="service__metaData flex">
            <div className="serviceMeta__visits flex items-center mx-2 bg-gray-100 animate-pulse rounded-lg h-7 w-16"></div>
            <div
              className="serviceMeta__likes flex mx-2  items-center
            bg-gray-100 animate-pulse rounded-lg h-7 w-16"></div>
            <div className="serviceMeta__rating flex mx-2  items-center bg-gray-100 animate-pulse rounded-lg h-7 w-16  "></div>
          </div>
        </div>
        <figure className="serviceSelected__ImgWrapper my-4 h-96 ">
          <div className="serviceSelected__Img w-full h-full rounded-lg bg-gray-100 animate-pulse"></div>
        </figure>
        <p className="serviceSelected__description mt-4 bg-gray-100 animate-pulse rounded-lg h-6 w-full"></p>
        <p className="serviceSelected__description mt-1 bg-gray-100 animate-pulse rounded-lg h-6 w-full"></p>
        <p className="serviceSelected__description mt-1 bg-gray-100 animate-pulse rounded-lg h-6 w-3/4"></p>
        <h3 className="serviceSelected__Price  mt-4 bg-gray-100 animate-pulse rounded-lg h-10 w-36"></h3>
      </div>
    </>
  );
};

export const SkeletonSeller = () => {
  return (
    <div className="serviceSelected__rightColumn service__metaData hidden lg:flex flex-col items-center justify-center py-3 ml-16">
      <div className="sellerImageInfo__wrapper flex flex-col justify-center items-center my-3 w-60">
        <div className="serviceSellerImage bg-gray-100 animate-pulse rounded-lg h-60 w-60"></div>
      </div>

      <div className="service__metaData flex flex-col mt-5">
        <div className="serviceMeta__visits flex  items-center mb-2 bg-gray-100 animate-pulse rounded-lg h-7 w-28"></div>
        <div
          className="serviceMeta__likes flex   items-center
        hover:scale-110 mb-2   bg-gray-100 animate-pulse rounded-lg h-7 w-28"></div>
        <div
          className="serviceMeta__rating flex  items-center
        hover:scale-110   bg-gray-100 animate-pulse rounded-lg h-7 w-28"></div>
      </div>
    </div>
  );
};
