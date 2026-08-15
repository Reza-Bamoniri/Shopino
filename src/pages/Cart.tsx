import CartProduct from "../components/cart/CartProduct/CartProduct";
import CartTitle from "../components/cart/CartTitle";
import Checkout from "../components/cart/Checkout";
import ClearBasket from "../components/cart/ClearBasket";
import EmptyBasket from "../components/cart/EmptyBasket";


const Cart = () => {
  const cartLength = 0;
  if (!cartLength) {
    return <EmptyBasket />;
  } else {
    return (
      <main id="cart-page" className="my-10 container grid grid-cols-9 gap-5">
        <div id="cart-content" className="col-span-6">
          <div className="flex-between">
            <CartTitle />
            <ClearBasket />
          </div>

          <div id="cart-products-container" className=" space-y-4 mt-2">
            {Array.from({ length: 3 }).map((product, index) => (
              <CartProduct {...product} />
            ))}
          </div>
        </div>
        <Checkout />
      </main>
  )}
}

export default Cart