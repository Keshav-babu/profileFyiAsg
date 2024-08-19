import { useEffect } from "react";
import { useAddToCart } from "../../Hook/add_to_cart";
import { useDiscount } from "../../Hook/use_discount";
import { useDispatch, useSelector } from "react-redux";
import { totalProductPrice } from "../../container/Cart/action";

const CartLayout = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.addProductReducer);

  const { deleteFromCart, addToCart } = useAddToCart();
  const handleDelete = () => {
    deleteFromCart(product.id);
  };

  const handleChange = (e) => {
    const qty = e.target.value;
    addToCart(product, qty, true);
  };

  const {
    discountPercent,
    discountPrice,
    price,
    isDiscountEligible,
    priceAfterDiscount,
  } = useDiscount(product.price, product.gender,product.quantityadded);



  
  return (
    <>
      <div className="justify-between flex items-center p-4 bg-white border rounded shadow-md">
        <div className="w-16 h-16 border-2 p-1 rounded">
          <img src={product.imageURL} alt="pic" />
        </div>

        <div className="ml-4">
          <p className="font-bold">{product.name}</p>
          {isDiscountEligible ? (
            <div className="md:flex gap-1">
              <p>₹{priceAfterDiscount.toLocaleString("en-IN")} </p>
              <p className="text-[#909090] line-through">
                 ₹{price.toLocaleString("en-IN")}
              </p>
              <span className="text-sm font-semibold text-[#129C80]">
                {discountPercent} % off
              </span>
            </div>
          ) : (
            <p className="text-sm text-gray-600">₹{price}</p>
          )}
        </div>

        <select
          id="cart_quantity"
          value={product.quantityadded}
          onChange={handleChange}
          className="border rounded p-1"
        >
          {Array.from(
            { length: product.quantity },
            (_, index) => index + 1
          ).map((num) => (
            <option key={num} value={num}>
              Qty {num}
            </option>
          ))}
        </select>
        <button
          onClick={handleDelete}
          className="border rounded p-1 text-gray-600 hover:text-gray-800"
        >
          Delete
        </button>
      </div>


      


    </>
  );
};

export default CartLayout;
