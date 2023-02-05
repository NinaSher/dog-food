
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import  store, {persistor } from './store/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'

 export const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
		</PersistGate>
	</Provider>
	</React.StrictMode>
)

//обернула в провайдер (стор)