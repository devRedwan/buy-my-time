import { useContext, useState } from "react";
import Layout from "../components/Layout/index";
import SeoHead from "../components/layout/SeoHead";
import PageHeader from "../components/misc/PageHeader";
import ServicesContext from "../context/servicesContext";
import ButtonPrimary from "../components/misc/buttons/ButtonPrimary";
import CartItem from "../components/cart/CartItem";
import ButtonOutline from "../components/misc/buttons/ButtonOutline";

export default function () {
  const { services } = useContext(ServicesContext);

  const [cart, setCart] = useState([]);
  return (
    <>
      <SeoHead title="Buy My Time | Cart" />
      <Layout>
        <PageHeader title="Cart" bgImageKey="CartBGImage" />

        <main className="cart px-8 xl:px-16 max-w-screen-xl mx-auto py-6 sm:py-16 flex flex-wrap justify-evenly">
          <section className="cart__details  my-4 flex-auto ">
            <div className="cartHeading__text">
              <h4 className="cartItems text-xl font-medium">
                Services in Your Cart
              </h4>
              <p className="subtotal text-sm font-thin">
                Subtotal {`(${cart.length} items)`}: $280
              </p>
            </div>
            <div className="cart__serviceItems">
              <CartItem services={services} />
              <CartItem services={services} />
              <ButtonOutline addClass="my-2" href="/explore">
                Add More Services
              </ButtonOutline>
            </div>
          </section>
          <section className="cart__summary  my-4 flex-auto">
            <div className="cartSummary__headingText mb-4">
              <h4 className="cartSummary__heading text-xl font-medium">
                Order Summary
              </h4>
            </div>
            <div className="costBreakdown">
              <div className="costBreakdown__details border-b border-blue-300">
                <div className="subtotal flex justify-between">
                  <p className="subtotal text-xs font-thin ">Subtotal:</p>
                  <span className="subtotal text-xs font-thin ">$280.00</span>
                </div>
                <div className="fees flex justify-between">
                  <p className="fees text-xs font-thin ">Convinience Fee:</p>
                  <span className="subtotal text-xs font-thin ">$3.00</span>
                </div>
              </div>
            </div>
            <h4 className="costBreakdown__total flex justify-between">
              <p className="fees font-medium ">Total:</p>
              <span className="subtotal  font-medium ">$283.00</span>
            </h4>
            <div className="cart__checkout mt-8 text-center">
              <ButtonPrimary addClass="my-2">Proceed to Checkout</ButtonPrimary>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
