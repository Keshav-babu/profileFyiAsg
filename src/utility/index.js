

export const DISCOUNT_DETAILS={
    minPriceToDiscountElligible:250,
    Men:20,
    Women:30
}



export const getLocalKey = (key, isNullAllowed = false) => {
    if (isNullAllowed && typeof window !== "undefined")
      return JSON.parse(window.localStorage.getItem(key));
    return (
      JSON.parse(
        typeof window !== "undefined" && window.localStorage.getItem(key)
      ) || []
    );
  };
  
  export const setLocalKey = (key, data) => {
    if (key === "wf_cart_enteries") {
      const count = data.length;
      setCartCount(count);
    }
    window.localStorage.setItem(key, JSON.stringify(data));
  };