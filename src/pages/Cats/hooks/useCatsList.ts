import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getCatsApi } from "../api/getCatsApi";
import { AppState } from "../../../common/main.reducer";
import { ICatsState } from "../catsSlice";

export const useCatsList = () => {
    const cats: ICatsState = useSelector((state: AppState) => state.catsSlice);
    const dispatch: Dispatch<any> = useDispatch();

    const getCats = () => getCatsApi(dispatch);

    return {
        catsList: cats.catsList,
        isLoading: cats.loading,
        getCats,
    };
};
