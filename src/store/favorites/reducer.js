import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id)
			console.log(action.payload)
			if (!findItem) {
				state.items.push({ ...action.payload, favorite: true })
			} else {
				findItem.favorite = false
				state.items = state.items.filter((favorite) => favorite !== findItem)
			}
		},
		clearFavorites(state) {
			state.favorite=[]
		},
	},
})


export const {
	addFavorite,
	clearFavorites,
} = favoriteSlice.actions
export default favoriteSlice.reducer
