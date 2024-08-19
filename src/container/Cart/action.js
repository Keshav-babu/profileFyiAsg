import ADD_PRODUCT from "./constant";


export const updateCartRequest=(data)=>({
    type: ADD_PRODUCT.ADD_PRODUCT_REQUEST,
    data
})

export const updateCart=(data)=>({
    type: ADD_PRODUCT.ADD_PRODUCT_SUCCESS,
    data
})

export const updateCartFailure=(data)=>({
    type: ADD_PRODUCT.ADD_PRODUCT_FAILURE,
    data
})

export const totalProductPrice=(data)=>({
    type: ADD_PRODUCT.ADD_PRODUCT_PRICE,
    data
})