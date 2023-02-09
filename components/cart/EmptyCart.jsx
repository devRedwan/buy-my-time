import EmptyCartImg from "../../public/assets/empty_cart.svg";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const EmptyCart = () => {
  return (
    <div className="cart__empty flex flex-col items-center justify-center mx-4">
      <EmptyCartImg className="h-96 w-full  " />
      <h2 className=" my-8">You don't have any services in your cart!</h2>

      <ButtonPrimary className="btn " href="/explore">
        Explore Services
      </ButtonPrimary>
    </div>
  );
};

export default EmptyCart;
