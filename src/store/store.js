

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice/reducer';
import { userSlice } from './userSlise/reduser';
import productSlise from './productSlise/reducer';
//import {favoriteReducer}  from './favorites/favorites';

export const store = configureStore({
	reducer: {
		product: productSlise,
		cart: cartSlice,
		user: userSlice,
		//favorite: favoriteSlice.reducer,
	}
})