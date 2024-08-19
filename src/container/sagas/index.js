import {all} from "redux-saga/effects";

import watchGetAllProductsSaga from "../products/saga";
export default function* rootSaga() {
    yield all([
        watchGetAllProductsSaga()
    ])
}