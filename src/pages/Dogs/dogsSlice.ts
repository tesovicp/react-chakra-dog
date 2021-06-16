import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface IDogsState {
    dogsList: string[];
}

const initialState: IDogsState = {
    dogsList: [],
};

const dogsSlice: Slice<IDogsState> = createSlice({
    name: "dogs",
    initialState,
    reducers: {
        getDogsList: (state: IDogsState, action: PayloadAction<string[]>) => {
            state.dogsList = action.payload;
        },
    }
});

export const {
    getDogsList,
} = dogsSlice.actions;

export default dogsSlice.reducer;