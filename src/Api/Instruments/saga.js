import { put, takeEvery, call } from 'redux-saga/effects'
import {actionTypes} from "./actions";
import axios from 'axios'

const getInstruments = () => {
    return axios.get(`http://localhost:9001/instruments`)
        .then((response) => {
            return response.data.data
        })
}

function* getInstrumentsSaga() {
    try {
        const response = yield call(getInstruments)
        yield put({
            type: actionTypes.GET_INSTRUMENTS_SUCCESS,
            payload: response,
        })
    } catch (e) {
        yield put({ type: actionTypes.GET_INSTRUMENTS_FAIL, payload: 'Error in loading Products' })
    }
}

export default function* watcherSaga() {
    yield takeEvery(actionTypes.GET_INSTRUMENTS, getInstrumentsSaga)
}
