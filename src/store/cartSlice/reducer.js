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
		minusItem(state, action) {
			const findItem = state.itemsInCart.find((obj) => obj.id === action.payload)
			findItem.quantity--

			state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
				if (obj.discount) {
					const priceCart = obj.price - ((obj.price / obj.discount))
					return (priceCart * obj.quantity) + sum
				}
				return (obj.price * obj.quantity) + sum
			}, 0)
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
		clearItems(state) {
			state.itemsInCart = []
			state.totalPrice = 0
		},
	}
})

export const {
	addItem,
	removeItem,
	minusItem,
	clearItems,
	setCheckbox,
	toggleCheckAll,
	deleteItemFromCart
} = cartSlice.actions

export default cartSlice.reducer
//totalPrise цена
// items массив с id карточек
//quantity кол-во