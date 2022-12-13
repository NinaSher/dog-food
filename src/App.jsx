import React, { useState, useEffect } from "react";
import './style.css';

//import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Topnav from "./components/Topnav/topnav";


import Home from "./pages/Home";
import Catalog from "./pages/Catalog.jsx";

import { Api } from "./Api";


const blocks = [];

const App = () => {
	const [user, setUser] = useState(localStorage.getItem('sm8'));
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [modalActive, setModalActive] = useState(false);
	const [api, setApi] = useState(new Api(token));
	const [products, setProducts] = useState([]);


	useEffect(() => {
		console.log("");
		console.log(token);
		if (token) {
			//загрузить с сервера данные
			api.getProducts()
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setProducts(data.products);
				})
		}
	}, [])

	useEffect(() => {
		console.log("Change token");
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
					setProducts(data.products);
				})
		}
	}, [api])

	return (
		<>
			<div className="container">
				<Header user={user} setUser={setUser} products={products} setModalActive={setModalActive} />
				<main>
					<Topnav />
					{user ? <Catalog data={products} /> : <Home data={blocks} />}
				</main>
				<Footer />
			</div>
			<Modal isActive={modalActive} setState={setModalActive}
				api={api} setToken={setToken} />
		</>
	)
}

export default App;