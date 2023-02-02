const ServiceSkeletonCard = () => {
  return (
    <section className="serviceCard__container w-96 p-6 sm:p-8 mx-auto max-w-lg max-h-screen overflow-hidden m-8 min-h-fit shadow-lg shadow-blue-100 rounded-xl cursor-pointer bg-gray-100">
      <div className="serviceImageWrapper w-full h-1/2 overflow-hidden animate-pulse ">
        <div className="h-40 sm:h-60 w-full bg-gray-400 animate-pulse  "></div>
      </div>
      <div className="service__textWrapper p-2">
        <h3 className="serviceTitle my-2 rounded-lg  bg-gray-400 h-10 flex items-center justify-center animate-pulse leading-relaxed"></h3>
        <p className="serviceDescription mb-3 rounded-lg bg-gray-400 h-24  flex items-center justify-center animate-pulse leading-relaxed"></p>
        <div className="serviceSeller__info flex h-28 flex-col items-center sm:flex-row justify-evenly w-11/12  mx-auto ">
          <h3 className="service__Price rounded-lg bg-gray-400 h-7 w-20 animate-pulse leading-relaxed"></h3>
          <div className="serviceSeller__image w-24 h-24 object-cover mb-3 rounded-full shadow-xl shadow-blue-100 bg-gray-400 animate-pulse leading-relaxed"></div>
          <div className="serviceSeller__text  ">
            <h3 className="serviceSeller__name rounded-lg  bg-gray-400 h-7 w-20 mb-3 animate-pulse leading-relaxed"></h3>
            <p className="serviceSeller__meta rounded-lg  bg-gray-400 h-7 w-20 animate-pulse leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div className="service_metaData flex justify-around mb-2">
        <div className="service__visits flex align-center bg-gray-400  w-20 h-5 rounded-lg animate-pulse leading-relaxed"></div>
        <div className="service__likes flex align-center bg-gray-400 w-20 h-5 rounded-lg animate-pulse leading-relaxed"></div>
        <div className="service__rating flex align-center bg-gray-400 w-20 h-5 rounded-lg animate-pulse leading-relaxed"></div>
      </div>
    </section>
  );
};

export default ServiceSkeletonCard;
