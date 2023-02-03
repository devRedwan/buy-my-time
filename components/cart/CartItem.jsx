import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const CartItem = ({ services }) => {
  return (
    <div className="cartService__itemWrapper my-5 py-6 border-b border-blue-300 max-w-xl">
      <div className="cartService__itemDetails">
        <div
          className="cartService__textWrapper rounded-lg bg-no-repeat bg-cover bg-center bg-blend-overlay h-full w-full bg-white-500 bg-opacity-80 p-2 xs:py-8 sm:py-12 md:py-16 max-w-lg"
          style={{
            backgroundImage: `url(${services[0]?.serviceImageUrl})`,
          }}>
          <h2 className="cartService__title text-lg font-medium">
            {services[0]?.title}
          </h2>
          <p className="cartService__description font-thin text-xs ">
            {services[0]?.description}
          </p>
          <span className="cartService__unitPrice text-xs font-normal text-gray-400">
            ${services[0]?.price}/Hour
          </span>
        </div>
        <div className="cartService__qtyTotalPrice mt-4">
          <div className="cartService__qty flex items-center font-thin">
            <button>
              <MinusIcon className="h-6 w-6 mr-4 border rounded-full border-blue-300" />
            </button>
            2 Hours
            <button>
              <PlusIcon className="h-6 2-6 ml-4 border rounded-full border-blue-300" />
            </button>
            <button className="cartService__removeButton ml-14 text-xs font-thin border-b text-gray-400">
              Remove
            </button>
          </div>
          <div className="cartService__TotalPrice mt-2 px-3 text-lg font-medium">
            $89.99
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
