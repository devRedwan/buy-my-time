const SellerSkeletonCard = () => {
  return (
    <main className="sellerCardWrapper max-w-xl max-h-screen overflow-hidden p-4 sm:p-5 mx-auto w-full m-2 min-h-fit min-w-fit">
      <section className="sellerCard__container mx-auto overflow-hidden shadow-lg shadow-blue-100 rounded-xl cursor-pointer flex flex-col sm:flex-row h-96 sm:h-72 w-full bg-gray-100">
        <div className="sellerImageWrapper w-full md:w-1/2 sm:h-full overflow-hidden ">
          <div className="sellerImage h-56 sm:h-full w-full object-cover hover:scale-105 transition-all duration-1000 ease-in-out bg-gray-500 animate-pulse"></div>
        </div>

        <div className="seller__textWrapper p-2 flex flex-col items-center justify-center w-full md:w-1/2 ">
          <h2 className="sellerTitle font-semibold my-2 flex items-center justify-center bg-gray-500 animate-pulse h-8 w-32"></h2>
          <h3 className="sellerSeller__info flex flex-col items-center sm:flex-row justify-evenly mx-auto bg-gray-500 animate-pulse h-8 w-44"></h3>
          <div className="sellerDescription leading-relaxed mb-3 flex items-center justify-center bg-gray-500 animate-pulse h-8 w-28 mt-2">
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellerSkeletonCard;
