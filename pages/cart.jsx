import { useContext } from "react";
import CartItem from "../components/cart/CartItem";
import EmptyCart from "../components/cart/EmptyCart";
import Layout from "../components/Layout/MainLayout";
import SeoHead from "../components/Layout/SeoHead";
import ButtonOutline from "../components/misc/buttons/ButtonOutline";
import ButtonPrimary from "../components/misc/buttons/ButtonPrimary";
import PageHeader from "../components/misc/PageHeader";
import ServicesContext from "../context/servicesContext";

const Cart = () => {
  const { cart, setCart } = useContext(ServicesContext);
  const removeFromCart = (selectedService) => {
    setCart(
      cart.filter((service) => service.id !== selectedService.id && service)
    );
  };
  const subTotalPrice = cart.reduce(
    (sum, service) => sum + service.totalPrice,
    0
  );
  const convinienceFee = 2.5 * cart.length;

  return (
    <>
      <SeoHead title="Buy My Time | Cart" />
      <Layout>
        <PageHeader title="Cart" bgImageKey="CartBGImage" />

        <main className="cart px-8 xl:px-16 max-w-screen-xl mx-auto py-6 sm:py-16 flex flex-wrap justify-evenly">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <section className="cart__details  my-4 flex-auto mr-4">
                <div className="cartHeading__text ">
                  <h4 className="cartItems text-xl font-medium md:text-2xl">
                    Services in Your Cart
                  </h4>
                  <p className="subtotal text-sm font-thin">
                    Subtotal {`(${cart.length} items)`}:{" "}
                    {subTotalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="cart__serviceItems">
                  {cart?.map((service) => (
                    <CartItem
                      service={service}
                      key={service?.id}
                      removeFromCart={removeFromCart}
                    />
                  ))}

                  <ButtonOutline addClass="my-2" href="/explore">
                    Add More Services
                  </ButtonOutline>
                </div>
              </section>
              <section className="cart__summary  my-4 flex-auto ml-4 h-fit  lg:sticky top-28">
                <div className="cartSummary__headingText mb-4">
                  <h4 className="cartSummary__heading text-xl font-medium md:text-2xl">
                    Order Summary
                  </h4>
                </div>
                <div className="costBreakdown">
                  <div className="costBreakdown__details border-b border-blue-300">
                    <div className="subtotal flex justify-between">
                      <p className="subtotal text-xs font-thin ">Subtotal:</p>
                      <span className="subtotal text-xs font-thin ">
                        ${subTotalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="fees flex justify-between">
                      <p className="fees text-xs font-thin ">
                        Convinience Fee ($2.50/service):
                      </p>
                      <span className="subtotal text-xs font-thin ">
                        ${convinienceFee.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="costBreakdown__total flex justify-between">
                  <p className="fees font-medium ">Total:</p>
                  <span className="subtotal  font-medium ">
                    ${(subTotalPrice + convinienceFee).toFixed(2)}
                  </span>
                </h4>
                <div className="cart__checkout mt-8 text-center">
                  <ButtonPrimary addClass="my-2">
                    Proceed to Checkout
                  </ButtonPrimary>
                </div>
              </section>
            </>
          )}
        </main>
      </Layout>
    </>
  );
};

export default Cart;
