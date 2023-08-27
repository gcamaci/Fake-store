import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state,action) {
            state.push(action.payload)
        },
        removeItem(state, action){
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }


    }
});

const reducer = cartSlice.reducer;
export default reducer;

export const {removeItem, addItem } = cartSlice.actions;