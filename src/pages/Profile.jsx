import React from "react";
import { useNavigate } from "react-router-dom";


export default ({setUser, user}) => {
	const navigate = useNavigate();
	const logOut = (e) => {
		e.preventDefault();
		setUser(null);
		localStorage.removeItem("sm8");
		navigate("/");
	}
	return<>
	<h1>Личный кабинет</h1>
	<img src={user.avatar} alt="avatar" />
	<p>Привет, {user}</p>
	<a href="" onClick={logOut} style={{color:"black"}}>Выйти</a>
	</>
}