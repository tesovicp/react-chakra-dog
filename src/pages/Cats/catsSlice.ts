import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface ICatsState {
    catsList: string[];
    loading: boolean;
}

const initialState: ICatsState = {
    catsList: [],
    loading: false,
};

const catsSlice: Slice<ICatsState> = createSlice({
    name: "cats",
    initialState,
    reducers: {
        setLoading: (state: ICatsState, action: PayloadAction<undefined>) => {
            state.loading = true;
        },
        getCatsList: (state: ICatsState, action: PayloadAction<string[]>) => {
            state.catsList = action.payload;
            state.loading = false;
        },
    }
});

export const {
    setLoading,
    getCatsList,
} = catsSlice.actions;

export default catsSlice.reducer;