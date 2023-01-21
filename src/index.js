
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

import {	QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();


/*ReactDOM.render(
	<App/>,
	
	document.querySelector('#root')
)*/

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<BrowserRouter>
	<QueryClientProvider client={queryClient}>
	<App/>
	</QueryClientProvider>
	</BrowserRouter>
)

