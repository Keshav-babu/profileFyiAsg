import { useDispatch, useSelector } from "react-redux";
import { useDiscount } from "../../Hook/use_discount";
import { getLocalKey, setLocalKey } from "../../utility";
import { useAddToCart } from "../../Hook/add_to_cart";
import { useState } from "react";

const ProductCard = ({ product_details }) => {
  const {
    price,
    discountPercent,
    discountPrice,
    isDiscountEligible,
    priceAfterDiscount,
  } = useDiscount(product_details.price, product_details.gender,1);
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state?.addProductReducer.addedProducts
  );
  const isAddedinCart = cartItems?.find(
    (item) => item.id === product_details.id
  );
  const { addToCart, isAlreadyInCart } = useAddToCart();
  const handleAddToCart = () => {
    addToCart(product_details, 1);
  };
  const handleChange = (e) => {
    addToCart(product_details, e.target.value, true);
  };

  return (
    <div className="w-[338px] h-fit relative px-2 pt-2 pb-1 rounded  bg-white  border shadow-md">
      <img
        className="aspect-square object-cover mb-3 w-full"
        src={product_details.imageURL}
        alt="Description"

      />
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {isDiscountEligible ? (
            <>
              <p>₹{priceAfterDiscount.toLocaleString("en-IN")}</p>
              <p className="text-[#909090] line-through">
                ₹{price.toLocaleString("en-IN")}
              </p>
              <span className="text-sm font-semibold text-[#129C80]">
                {discountPercent} % off
              </span>
            </>
          ) : (
            <p>₹{price.toLocaleString("en-IN")}</p>
          )}
        </div>
        {!isAddedinCart ? (
          <button
            onClick={handleAddToCart}
            className="bg-black text-white p-1 px-3  rounded-md"
          >
            Add to {isAddedinCart ? "✔️ " : "Cart"}
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <label htmlFor="quantity" className="text-sm">
              Quantity:
            </label>

            <select
              id="quantity"
              value={isAddedinCart.quantityadded}
              onChange={handleChange}
              className="border rounded p-1"
            >
              {Array.from(
                { length: product_details.quantity },
                (_, index) => index + 1
              ).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <p className="rounded p-1 px-2 absolute top-0 left-0 font-semibold text-white bg-black bg-opacity-40">
        {product_details.name}
      </p>
    </div>
  );
};

export default ProductCard;
