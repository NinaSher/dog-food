import React from "react";
import { Link } from "react-router-dom";
import {PlusCircle, Heart} from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import './header.css';
import  Search from "../Search/Search";
import { CartBlock } from "../CartBlock/CartBlock";



export default ({user, setUser, goods, searchGoods, setModalActive, PATH, favorites}) => {

	
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
			<Link className="logo" to={PATH}>FoodDog</Link>
			<Search data={goods} searchGoods={searchGoods} />
			
			<nav className="menu">
				{user && <Link to='/favorites' className="badge-link"><Badge bg="light" text="dark">{favorites.lengtch}</Badge><Heart/></Link>}
				{user && <Link to='/new'><PlusCircle/></Link>}
				{user && <Link to="/profile">{user}</Link>}
				{!user && <a href="#" onClick={logIn}>Войти</a>}
				{user && <a href="#" onClick={logOut}>Выйти</a>}
			</nav>
			<div className="wrapper header__cart-btn-wrapper">
				<CartBlock />
			</div>
		</header>
}