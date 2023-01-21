import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	itemsInCart: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	redusers: {
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
					checkbox: true,
				})
			}
		},
		setItemInCart: (state, action) => {//добавить в корзину
			state.itemsInCart.push(action.payload)
		},
		deleteItemFromCart: (state, action) => {//удалить из корзины
			state.itemsInCart = state.itemsInCart.filter(data => data.id !== action.payload)
		},
	}
});

export const { addItems, setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;


//totalPrise цена
// items массив с id карточек