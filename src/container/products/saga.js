import { all, call, put, takeLatest } from "redux-saga/effects";
import { getProductsData } from "../api";
import { getAllProductsFailure, getAllProductsSuccess } from "./action";
import PRODUCTS_CONSTANTS from "./constant";






export function* getAllProducts(action){
    try {

        const response = yield call(getProductsData,action.data)
        yield put(getAllProductsSuccess(response)
        )
        
    } catch (error) {
        yield put(getAllProductsFailure(error))
        
    }
}


export default function* watchGetAllProductsRequest() {


yield all([
    takeLatest(PRODUCTS_CONSTANTS.GET_ALL_PRODUCTS,getAllProducts)
])


}