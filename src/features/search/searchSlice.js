import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload;
        },
        clearSearch: (state) => {
            state.value = "";
        },
    },
});

export default searchSlice.reducer;
export const { setSearch, clearSearch } = searchSlice.actions;