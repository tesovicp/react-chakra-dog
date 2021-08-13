import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getCatsApi } from "../api/getCatsApi";
import { AppState } from "../../../common/main.reducer";

export const useCatsList = () => {
    const catsList: string[] = useSelector((state: AppState) => state.catsSlice.catsList);
    const dispatch: Dispatch<any> = useDispatch();

    const getCats = () => getCatsApi(dispatch);

    return {
        catsList,
        getCats,
    };
};
