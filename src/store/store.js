

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice/reducer';
//import productSlise from './productSlise/reducer';

export const store = configureStore({
	reducer: {
		//product: productSlise,
		cart: cartSlice,
	}
})