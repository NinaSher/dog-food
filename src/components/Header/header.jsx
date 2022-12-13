import React, { useState } from "react";
import Search from "../Search/search";
import './header.css';


export default ({ user, setUser, products, setModalActive }) => {


	const logIn = (e) => {
		e.preventDefault();
		setModalActive(prev => !prev);
	}
	const logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem("sm8");
		setUser('');
	}
	return <header>
		<a className="logo" href="">FoodDog</a>
		<Search data={products} />
		<nav className="menu">
			{user && <a href="">{user}</a>}
			{!user && <a href="" onClick={logIn}>Войти</a>}
			{user && <a href="" onClick={logOut}>Выйти</a>}
		</nav>
	</header>
}