import { useDispatch, useSelector } from "react-redux";
import { calculateDiscount } from "../../Hook/use_discount";
import React, { useEffect } from "react";
import { DISCOUNT_DETAILS } from "../../utility";
import { totalProductPrice } from "../../container/Cart/action";

const DiscountDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state?.addProductReducer.addedProducts
  );
  const cartItemsPrice = useSelector(
    (state) => state?.addProductReducer.total_price_details
  );
  let totalPrice = 0;
  let totalDiscount = 0;

  cartItems.forEach((item) => {
    const { price, gender, quantityadded } = item;
    const { priceAfterDiscount, discountPrice, product_price } =
      calculateDiscount(price, gender, quantityadded, DISCOUNT_DETAILS);

    totalPrice += product_price * quantityadded;
    totalDiscount += discountPrice * quantityadded;
  });
  useEffect(() => {
    dispatch(
      totalProductPrice({
        price: totalPrice,
        discountPrice: totalDiscount,
        delivery_charges: totalPrice>499?0:250,
      })
    );
  }, [cartItems]);
  return (
    <div className="bg-white border rounded shadow-md p-4">
      <p className="border-b-2 text-lg bold text-gray-500 px-3">Price Details</p>
      <div className="p-5 grid gap-3">
        <div className="flex justify-between">
          <p>Price ({cartItems.length} Items)</p>
          <p>₹{cartItemsPrice.price}</p>
        </div>

        <div className="flex justify-between">
          <p>Discount </p>
          <p className="text-sm font-semibold text-[#129C80]">₹{cartItemsPrice.discountPrice}</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery Charges </p>
          <p>{cartItemsPrice.delivery_charges}</p>
        </div>
      </div>
      <div className="border-dashed border-b-2 border-t-2 py-4">
        <div className="flex justify-between font-semibold px-3">
            <p>Total Amount</p>
            <p>₹{cartItemsPrice.price-cartItemsPrice.discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountDetails;
