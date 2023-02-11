import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import ServicesContext from "../../context/servicesContext";

const CartItem = ({ service }) => {
  const { cart, setCart } = useContext(ServicesContext);
  const quantity = (() => {
    const cartItem = JSON.parse(localStorage.getItem(service?.id));
    return cartItem?.quantity || 1;
  })();
  const totalPrice = parseFloat(service?.price * quantity);

  const removeFromCart = (selectedService) => {
    setCart(
      cart?.filter((service) => service?.id !== selectedService?.id && service)
    );
  };

  const handleQuantityChange = (change) => {
    const updatedQuantity = Math.max(1, quantity + change);
    localStorage.setItem(
      service.id,
      JSON.stringify({
        ...service,
        quantity: updatedQuantity,
        totalPrice: parseFloat(service?.price * updatedQuantity),
      })
    );
    const serviceInCart = cart?.find(
      (cartService) => cartService?.id === service?.id
    );
    if (serviceInCart) {
      const updatedCart = cart.map((cartService) => {
        if (cartService.id === service.id) {
          return {
            ...cartService,
            quantity: updatedQuantity,
            totalPrice: parseFloat(service?.price * updatedQuantity),
          };
        }
        return cartService;
      });
      setCart(updatedCart);
    }
  };

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
            <button onClick={() => handleQuantityChange(-1)}>
              <MinusIcon className="h-6 w-6 mr-4 border rounded-full border-blue-300" />
            </button>
            {quantity} {quantity === 1 ? "Hour" : "Hours"}
            <button onClick={() => handleQuantityChange(+1)}>
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
