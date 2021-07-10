import {all} from 'redux-saga/effects'
import instruments from "./Api/Instruments/saga";
import cart from "./actions/Cart/sagas";

export default function* rootSaga() {
    yield all([
        instruments(),
        cart()
    ])
}