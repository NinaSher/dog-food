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
				findItem.quantity++
			} else {
				state.itemsInCart.push({
					...action.payload,
					quantity: 1,
				})
			}
		},

		removeItem(state, action) {
			state.itemsInCart = state.itemsInCart.filter((cart) => cart.id !== action.payload)
			state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
				if (obj.discount) {
					const priceCart = obj.price - ((obj.price / obj.discount))
					return (priceCart * obj.count) + sum
				}
				return (obj.price * obj.count) + sum
			}, 0)
		},

		deleteItemFromCart: (state, action) => {//удалить из корзины
			state.itemsInCart = state.itemsInCart.filter(data => data.id !== action.payload)
		},
		clearCart() {
			return []
		},
	}
})

export const {
	addItem,
	removeItem,
	clearItems,
	setCheckbox,
	toggleCheckAll,
	deleteItemFromCart
} = cartSlice.actions

export default cartSlice.reducer
//totalPrise цена
// items массив с id карточек
//quantity кол-во