import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state,action) {
            state.push(action.payload)
        },
        removeItem(state, action){
            state.filter((item)=> item.id === action.payload.id);
        }


    }
});

const reducer = cartSlice.reducer;
export default reducer;

export const {removeItem, addItem } = cartSlice.actions;