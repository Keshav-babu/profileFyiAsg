import { combineReducers } from "redux";
import allProductReducer from "../products/reducer";
import AddedProductReducer from "../Cart/reducer";


const rootReducer = combineReducers({
    productReducer:allProductReducer,
    addProductReducer:AddedProductReducer
})


export default rootReducer;