import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected: ''
};
export const selectedSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        selectLink: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const { selectLink } = selectedSlice.actions;

export default selectedSlice.reducer;
