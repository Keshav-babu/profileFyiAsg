import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../container/Cart/action";

export function useAddToCart() {


  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state?.addProductReducer?.addedProducts
  );


  let isAlreadyInCart=false

  const addToCart = (product_details,qty,isUpdateQty) => {
    isAlreadyInCart = cartItems?.find(
        (item) => item.id === product_details.id
      );

    const filterCartItems=cartItems.filter(
        (item) => item.id !== product_details.id
      );
    const quantityadded=isUpdateQty?qty:isAlreadyInCart ? Number(isAlreadyInCart.quantity) + Number(qty) : 1;
    const itemToBeAdded = {
      ...product_details,
      quantityadded:Number(quantityadded)

    };

    const updatedCartItems = [...filterCartItems, itemToBeAdded];
    dispatch(updateCart(updatedCartItems));
  };

  const deleteFromCart = (id) => {

    const filterCartItems=cartItems.filter(
        (item) => item.id !== id
      );
    const updatedCartItems = [...filterCartItems];
    dispatch(updateCart(updatedCartItems));
  };


  return {
    isAlreadyInCart,
    addToCart,
    deleteFromCart
  };
}
