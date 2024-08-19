import { DISCOUNT_DETAILS } from "../utility";

export function useDiscount(price, gender,quantity) {

  const minPrice = DISCOUNT_DETAILS.minPriceToDiscountElligible;

  const isDiscountEligible = price > minPrice;
  const discountPercent = isDiscountEligible ? DISCOUNT_DETAILS[gender] : 0;

  const product_price=Number(price)*Number(quantity)

  const priceAfterDiscount=product_price - product_price * (discountPercent / 100);
  const  discountPrice=product_price * (discountPercent / 100);

  


  return {
    isDiscountEligible,
    priceAfterDiscount,
    discountPrice,
    discountPercent,
    price:product_price
  };
}



// utils/discountUtils.js
export function calculateDiscount(price, gender, quantity, discountDetails) {
  const minPrice = discountDetails.minPriceToDiscountElligible;
  const isDiscountEligible = price > minPrice;
  const discountPercent = isDiscountEligible ? discountDetails[gender] : 0;

  const discountPrice = price * (discountPercent / 100);
  const priceAfterDiscount = price - discountPrice;

  return {
    isDiscountEligible,
    priceAfterDiscount,
    discountPrice,
    discountPercent,
    product_price:price
  };
}




