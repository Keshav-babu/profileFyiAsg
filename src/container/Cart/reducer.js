import ADD_PRODUCT from "./constant"



const initialState={
    isProductAdded:false,
    
    addedProducts:[],
    total_price_details:{
        price:0,
        discountPrice:0
    }
}




const AddedProductReducer=(state=initialState,action)=>{
    switch(action.type){        
        case ADD_PRODUCT.ADD_PRODUCT_REQUEST:
            return {
                ...state,

            }
        case ADD_PRODUCT.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                
            }
        case ADD_PRODUCT.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isProductAdded:true,
                addedProducts:action.data
            }
        case ADD_PRODUCT.ADD_PRODUCT_PRICE:
            return {
                ...state,
                total_price_details:action.data
            }
        default:
            return state
    }
}


export default AddedProductReducer;