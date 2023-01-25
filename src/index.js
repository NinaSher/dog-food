
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</Provider>
	</React.StrictMode>
)

//обернула в провайдер (стор)