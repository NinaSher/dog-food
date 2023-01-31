import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {NewProductForm} from "../NewProductForm/NewProductForm";
import "./profile.css"

export default ({ setUser, user }) => {
	const navigate = useNavigate();
	const logOut = (e) => {
		e.preventDefault();
		setUser('null');
		localStorage.removeItem("sm8");
		navigate("/");
	
	}
	
	return <>
	<h1>Личный кабинет</h1>
		<p>Привет, {user}</p>
		<img src={user.avatar} alt="avatar" />
		<br/>
			<Link to="edit">
				<button className="btn" type="button">Изменить профиль</button>
			</Link>
			<br/>
			<Link className="btn" to="/catalog">Вернуться в каталог</Link>
			<br/>
			<a href="#" onClick={logOut} style={{ color: "black" }}>Выйти</a>
			<br/>
			{user && <Link to='/new'>Добавить новый товар</Link>}
		</>
	}