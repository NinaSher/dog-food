import { createSlice } from '@reduxjs/toolkit'


const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addProductToFavorite: (state, action) => {
			state.push(action.payload)
		},
		removeProductFromFavorite: (state, action) => {
			return state.filter((id) => id !== action.payload)
		},
		clearFavoriteList: () => {
			return []
		},
	},
})

export const {
	addProductToFavorite,
	removeProductFromFavorite, clearFavoriteList,
} = removeProductFromFavorite
export default favoriteSlice.reducer