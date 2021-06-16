import { combineReducers } from "redux";
import dogsSlice from "../pages/Dogs/dogsSlice";

export type AppState = ReturnType<typeof mainReducer>;

export const mainReducer = combineReducers({
    dogsSlice,
});