import PRODUCTS_CONSTANTS from "./constant";

export const getAllProducts=(data)=>({
    type: PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS,
    data
})


export const getAllProductsSuccess=(data)=>({
    type: PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS_SUCCESS,
    data
})

export const getAllProductsFailure=(data)=>({
    type: PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS_FAILURE,
    data
})