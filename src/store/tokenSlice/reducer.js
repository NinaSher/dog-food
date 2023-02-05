import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: {
		value: '',
	},
}

const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setToken(state, action) {
			state.value = `${action.payload}`
		},
		removeToken(state) {
			state.value = ''
		},
	},
})

export const { setToken, removeToken } = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer