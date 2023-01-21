

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice/reducer';
import productReducer from './productSlise/reducer';

export const store = configureStore({
	reducer: {
		product: productReducer,
		cart: cartReducer,
	}
})