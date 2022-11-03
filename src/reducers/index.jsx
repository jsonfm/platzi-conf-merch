import { cartReducer } from "@/reducers/cart";
import { combineReducers } from "./combine";

export const reducer = combineReducers(cartReducer);
