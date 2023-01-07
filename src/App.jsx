import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './style.css';

//import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Topnav from "./components/Topnav/topnav";



import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

import { Api } from "./Api";


const blocks = [];

const App = () => {
	const [user, setUser] = useState(localStorage.getItem('sm8'));
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [modalActive, setModalActive] = useState(false);
	const [api, setApi] = useState(new Api(token));
	const [goods, setGoods] = useState([]);
	const [visibleGoods, setVisibleGoods] = useState(goods);


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

	return (
		<>
			<div className="container">
				<Header
					user={user}
					setUser={setUser}
					goods={goods}
					searchGoods={setVisibleGoods}
					setModalActive={setModalActive}
				/>
				<main>
				
					<Topnav />
					{/*user ? <Catalog data={products} /> : <Home data={blocks} />*/
					}
					<Routes>
						<Route path="/" element={<Home data={blocks} />} />
						<Route path="/catalog" element={<Catalog data={visibleGoods} />} />
						<Route path="/profile" element={<Profile setUser={setUser} user={user} />} />
						<Route path="/catalog/:id" element={<Product/>}/>
					</Routes>
				</main>
				<Footer />
			</div>
			<Modal isActive={modalActive} setState={setModalActive}
				api={api} setToken={setToken} />
		</>
	)
}

export default App;

