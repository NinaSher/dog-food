import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
			<Link to="edit">
					<button className="btn" type="button">Изменить профиль</button>
			</Link>
			<Link className="btn" to="/catalog">Вернуться в каталог</Link>
		<a href="#" onClick={logOut} style={{ color: "black" }}>Выйти</a>
		</>
	}