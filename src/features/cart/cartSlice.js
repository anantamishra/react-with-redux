
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            state.items.push(item);
            state.total += item.price;
        },
    },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
