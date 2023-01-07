import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search";
import { Basket } from "react-bootstrap-icons";
import './header.css';



export default ({ user, setUser, goods, searchGoods, setModalActive }) => {


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
		<Link className="logo" to="/">FoodDog</Link>
		<Search data={goods} searchGoods={searchGoods} />
		<Basket/>
		<nav className="menu">
			{user && <Link to="/profile">{user}</Link>}
			{!user && <a href="" onClick={logIn}>Войти</a>}
			{user && <a href="" onClick={logOut}>Выйти</a>}
		</nav>
	</header>
}