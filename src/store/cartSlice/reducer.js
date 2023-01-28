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
					//checkbox: true,
				})
			}

			state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},


		minusItem(state, action) {
			const findItem = state.itemsInCart.find((obj) => obj.id === action.payload)
			findItem.count--

			state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
				if (obj.discount) {
					const priceCart = obj.price - ((obj.price / obj.discount))
					return (priceCart * obj.count) + sum
				}
				return (obj.price * obj.count) + sum
			}, 0)
		},


		removeItem(state, action) {
			state.itemsInCart = state.itemsInCart.filter((obj) => obj.id !== action.payload)
			state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
				if (obj.discount) {
					const priceCart = obj.price - ((obj.price / obj.discount))
					return (priceCart * obj.count) + sum
				}
				return (obj.price * obj.count) + sum
			}, 0)
		},

		setCheckboxEl(state, action) {
			const findItem = state.itemsInCart.find((obj) => obj.id === action.payload)
			if (findItem) {
				findItem.checkbox = !findItem.checkbox
				findItem.count = 0
			}
			if (findItem.checkbox === true) {
				findItem.count = 1
				state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
					if (obj.discount) {
						const priceCart = obj.price - ((obj.price / obj.discount))
						return (priceCart * obj.count) + sum
					}
					return (obj.price * obj.count) + sum
				}, 0)
			}
		},

		toggleCheckAll(state) {
			state.itemsInCart = state.itemsInCart.map((el) => ({ ...el, checkbox: !el.checkbox }))
		},
	},

	deleteItemFromCart: (state, action) => {//удалить из корзины
		state.itemsInCart = state.itemsInCart.filter((obj) => obj.id !== action.payload)
	},
	clearItems(state) {
      state.items = []
      state.totalPrice = 0
   },
}
)

export const {
	addItem,
	removeItem,
	clearItems,
	setCheckboxEl,
	toggleCheckAll,
	deleteItemFromCart,
	plusItem,
	minusItem,
} = cartSlice.actions

export default cartSlice.reducer
//totalPrise цена
// items массив с id карточек
//quantity кол-во