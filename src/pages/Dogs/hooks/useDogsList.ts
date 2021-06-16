import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getDogsApi } from "../api/getDogsApi";
import { AppState } from "../../../common/main.reducer";

export const useDogsList = () => {
    const dogsList: string[] = useSelector((state: AppState) => state.dogsSlice.dogsList);
    const dispatch: Dispatch<any> = useDispatch();

    const getDogs = () => getDogsApi(dispatch);

    return {
        dogsList,
        getDogs,
    };
};
