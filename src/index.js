
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';

import {	QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
	<BrowserRouter>
	<QueryClientProvider client={queryClient}>
	<App/>
	</QueryClientProvider>
	</BrowserRouter>
	</Provider>
)

//обернула в провайдер (стор)