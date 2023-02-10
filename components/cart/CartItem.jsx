import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ServicesContext from "../../context/servicesContext";

const CartItem = ({ service, removeFromCart }) => {
  const { cart, setCart } = useContext(ServicesContext);
  const [qty, setQty] = useState(1);
  const totalPrice = parseFloat(service?.price * qty);

  useEffect(() => {
    const serviceInCart = cart?.find(
      (cartService) => cartService?.id === service?.id
    );
    if (serviceInCart) {
      const updatedCart = cart.map((cartService) => {
        if (cartService.id === service.id) {
          return { ...cartService, totalPrice };
        }
        return cartService;
      });
      setCart(updatedCart);
    }
    return () => {};
  }, [totalPrice]);

  return (
    <div className="cartService__itemWrapper my-5 py-6 border-b border-blue-300 max-w-2xl">
      <div className="cartService__itemDetails">
        <Link
          legacyBehavior
          href="/service/[id]"
          as={`/service/${service?.id}`}>
          <div
            className="cartService__textWrapper rounded-lg bg-no-repeat bg-cover bg-center bg-blend-overlay h-full w-full bg-blue-100 bg-opacity-95 p-2 xs:py-8 sm:py-12 md:py-16 max-w-2xl cursor-pointer"
            style={{
              backgroundImage: `url(${service?.serviceImageUrl})`,
            }}>
            <h2 className="cartService__title text-lg font-medium xs:text-2xl lg:text-3xl">
              {service?.title}
            </h2>
            <p className="cartService__description font-thin text-xs xs:text-sm lg:text-md">
              {service?.description}
            </p>
            <span className="cartService__serviceProfessional text-xs font-normal 0">
              <span className="font-medium">Service Professional</span>: &nbsp;
              {service?.seller?.name}
            </span>
          </div>
        </Link>
        <div className="cartService__qtyTotalPrice mt-4">
          <div className="cartService__qty flex items-center font-thin">
            <button
              onClick={() => setQty((prevQty) => Math.max(1, prevQty - 1))}>
              <MinusIcon className="h-6 w-6 mr-4 border rounded-full border-blue-300" />
            </button>
            {qty} {qty === 1 ? "Hour" : "Hours"}
            <button onClick={() => setQty((prevQty) => prevQty + 1)}>
              <PlusIcon className="h-6 2-6 ml-4 border rounded-full border-blue-300" />
            </button>
            <button
              className="cartService__removeButton ml-14 text-xs font-thin border-b text-gray-400"
              onClick={() => removeFromCart(service)}>
              Remove
            </button>
          </div>
          <div className="cartService__TotalPrice mt-2 px-3 text-lg font-medium">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
