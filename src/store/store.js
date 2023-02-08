

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice/reducer';
import { userSlice } from './userSlise/reduser';
import productSlise from './productSlise/reducer';
import {tokenReducer} from './tokenSlice/reducer'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoriteSlice } from './favorites/reducer';
//import { favoriteSlice } from './favorites/reducer';

const rootReducer = combineReducers({
	product: productSlise,
	cart: cartSlice,
	user: userSlice,
	favorites: favoriteSlice,
	token: tokenReducer,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
})

export const persistor = persistStore(store);
export default store;

