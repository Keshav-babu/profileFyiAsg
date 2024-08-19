import PRODUCTS_CONSTANTS from "./constant"

const initialState={
    isAllProductsLoading:false,
    isAllProductsLoaded:false,
    allProducts:null
}


const allProductReducer=(state=initialState,action)=>{
    switch(action.type){        
        case PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS:
            return {
                ...state,
                isAllProductsLoading:true
            }
        case PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                isAllProductsLoading:false,
                isAllProductsLoaded:true,
                allProducts:action.data
            }
        case PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                isAllProductsLoading:false,
                isAllProductsLoaded:false
            }
        default:
            return state
    }
}


export default allProductReducer;