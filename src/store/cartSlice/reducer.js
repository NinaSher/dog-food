import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	itemsInCart: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			console.log(action.payload)
			const findItem = state.itemsInCart.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.itemsInCart.push({
					...action.payload,
					count: 1,
					checkbox: true,
				})
			}
		},
		// setItemInCart: (state, action) => {//добавить в корзину
		// 	state.itemsInCart.push(action.payload)
		// },
		deleteItemFromCart: (state, action) => {//удалить из корзины
			state.itemsInCart = state.itemsInCart.filter(data => data.id !== action.payload)
		},
	}
});

export const { addItem, setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;


//totalPrise цена
// items массив с id карточек