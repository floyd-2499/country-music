import {actionTypes} from "./actions"

export const initialState = {
    success: false,
    cartItems: []
}

const addToCart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                success: true,
                cartItems: action.payload
            }

        default:
            return state
    }
}

export default addToCart
