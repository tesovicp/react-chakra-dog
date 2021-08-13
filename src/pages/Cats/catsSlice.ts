import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface ICatsState {
    catsList: string[];
}

const initialState: ICatsState = {
    catsList: [],
};

const catsSlice: Slice<ICatsState> = createSlice({
    name: "cats",
    initialState,
    reducers: {
        getCatsList: (state: ICatsState, action: PayloadAction<string[]>) => {
            state.catsList = action.payload;
        },
    }
});

export const {
    getCatsList,
} = catsSlice.actions;

export default catsSlice.reducer;