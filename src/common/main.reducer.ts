import { combineReducers } from "redux";
import catsSlice from "../pages/Cats/catsSlice";
import dogsSlice from "../pages/Dogs/dogsSlice";

export type AppState = ReturnType<typeof mainReducer>;

export const mainReducer = combineReducers({
    catsSlice,
    dogsSlice,
});