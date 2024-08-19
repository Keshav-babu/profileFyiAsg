import { useSelector } from "react-redux";
import CartLayout from "../../component/CartLayout";
import DiscountDetails from "../../component/DiscountDetails";

const Cart = () => {
  const cartItems = useSelector(
    (state) => state?.addProductReducer.addedProducts
  );
  return (
    <div className="mt-24 m-2 grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="md:col-span-3 grid gap-4">
        {cartItems?.map((item) => (
          <CartLayout product={item} />
        ))}
      </div>
      <div className="md:col-span- p-4">
        <DiscountDetails/>
      </div>
    </div>
  );
};

export default Cart;

