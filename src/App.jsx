import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route,Switch, BrowserRouter } from "react-router-dom";
import './style.css';
import store, { persistor } from "./store/store";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Index";
import Topnav from "./components/Topnav/Topnav";



import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile/Profile";
import {Product} from "./pages/Product/Product";
import {Cart} from "./pages/Cart/Cart";
import { NewProductForm } from "./pages/NewProductForm/NewProductForm";

import { Api } from "./Api";






const blocks = [];

const App = () => {
	const [user, setUser] = useState(localStorage.getItem('sm8',true));
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [modalActive, setModalActive] = useState(false);
	const [api, setApi] = useState(new Api(token));
	const [goods, setGoods] = useState([]);
	const [visibleGoods, setVisibleGoods] = useState(goods);
	const [fav, setFav] = useState([]);
	const [products, setProducts] = useState([]);
	

	useEffect(() => {
		//console.log("");
		//console.log(token);
		if (token) {
			//загрузить с сервера данные
			api.getProducts()
				.then(res => res.json())
				.then(data => {
					//console.log(data);
					setGoods(data.products);
				})
		}
	}, [])

	useEffect(() => {
		//console.log("Change token");
		setApi(new Api(token));
		setUser(localStorage.getItem("sm8"));
	}, [token]);

	useEffect(() => {
		if (!user) {
			localStorage.removeItem("token");
			setToken(null);
		}
	}, [user])

	useEffect(() => {
		if (token) {
			//загрузить с сервера данные
			api.getProducts()
				.then(res => res.json())
				.then(data => {
					setGoods(data.products);
				})
		}
	}, [api])

	useEffect(() => {
		setVisibleGoods(goods);
	}, [goods])

	useEffect(() => {
		const f = goods.filter(el => el.likes.includes(user._id))
		setFav(f);
		setProducts(goods);
  }, [goods])

	return (
		<Provider  store={store}>
			<div className="container">
				<Header
					user={user}
					setUser={setUser}
					goods={goods}
					searchGoods={setVisibleGoods}
					setModalActive={setModalActive}
					products={products}
				/>
				<main>

					<Topnav />
					{/*user ? <Catalog data={products} /> : <Home data={blocks} />*/
					}
					<Routes>
						<Route path="/" element={<Home data={blocks} />} />
						<Route path="/catalog" element={<Catalog data={visibleGoods} />} />
						<Route path="/profile" element={<Profile setUser={setUser} user={user} />} />
						<Route path="/catalog/:id" element={<Product api={api}/>} />
						<Route path="/order" element={<Cart api={api} />}/>
						<Route path="/new"element={<NewProductForm/>}/>
					</Routes>
				</main>
				<Footer />
			</div>
			<Modal isActive={modalActive} setState={setModalActive}
				api={api} setToken={setToken} />
		</Provider>
		
	)
}

export default App;

