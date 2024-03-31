import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
    name: ''
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFilterState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        }
    }
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.name;