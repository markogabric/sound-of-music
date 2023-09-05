import { combineReducers } from "redux";
import { userSlice} from "../features/userSlice";
import { cartSlice } from "../features/cartSlice";

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    cart: cartSlice.reducer,
})