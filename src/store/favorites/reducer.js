import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favourite: [],
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addItemFavorites: (state, action) => {
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
)

export const {
	addItemFavorites,
	clearFavoriteList,
} = favoriteSlice.actions
export default favoriteSlice.reducer