import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favourite: [],
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addItemFavorites: {
			reducer(state, action) {
				if (state.some((el) => el === action.payload)) {
					return state.filter((el) => el !== action.payload)
				}
				return [...state, action.payload]
			},
		},
		clearFavorites() {
			return []
		},
	},
})


export const {
	addItemFavorites,
	removeItemFavorite,
} = favoriteSlice.actions
export default favoriteSlice.reducer