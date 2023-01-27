import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import  Search from "../Search/Search";
import { CartBlock } from "../CartBlock/CartBlock";



export default ({user, setUser, goods, searchGoods, setModalActive}) => {

	
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
			
			<nav className="menu">
				{user && <Link to="/profile">{user}</Link>}
				{!user && <a href="#" onClick={logIn}>Войти</a>}
				{user && <a href="#" onClick={logOut}>Выйти</a>}
			</nav>
			<div className="wrapper header__cart-btn-wrapper">
				<CartBlock />
			</div>
		</header>
}