import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze ({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
         data: [],
         status: STATUSES.IDLE,
    },

    reducers: {
        setProducts(state, action) {

            state.data = action.payload
        },

        remove(state, action) {

            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;