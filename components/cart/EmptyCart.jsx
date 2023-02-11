import Image from "next/image";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const EmptyCart = () => {
  return (
    <div className="cart__empty flex flex-col items-center justify-center mx-4 relative">
      <Image
        src="/assets/empty_cart.svg"
        alt="BuyMyTime EmptyCart Image"
        width={500}
        height={500}
        className="EmptyCart__illustration h-96 w-full"
      />
      <h2 className=" my-8">You don't have any services in your cart!</h2>

      <ButtonPrimary className="btn " href="/explore">
        Explore Services
      </ButtonPrimary>
    </div>
  );
};

export default EmptyCart;
