import {combineReducers} from "redux";
import getInstruments from "./Api/Instruments/reducers";
import authReducer from "./reducers/authReducer";
import addToCart from "./actions/Cart/reducers";

const reducers = combineReducers({
    getInstruments,
    auth: authReducer,
    addToCart,
})

export default reducers