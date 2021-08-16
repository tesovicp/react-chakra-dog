import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getDogsContextApi } from "../api/getDogsContextApi";
import { AppState } from "../../../common/main.reducer";

export const useDogsList = () => {
    const dogsList: string[] = useSelector((state: AppState) => state.dogsSlice.dogsList);
    const dispatch: Dispatch<any> = useDispatch();

    const getDogs = () => getDogsContextApi(dispatch);

    return {
        dogsList,
        getDogs,
    };
};
