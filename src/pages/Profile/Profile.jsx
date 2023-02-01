import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NewProductForm } from "../NewProductForm/NewProductForm";
import "./profile.css"

export default ({ setUser, user }) => {
	const navigate = useNavigate();
	const logOut = (e) => {
		e.preventDefault();
		setUser('null');
		localStorage.removeItem("sm8");
		navigate("/");

	}

	return (
		<>
			<h1>Личный кабинет</h1>
			<p>Привет, {user}</p>
			<div className="profile">
				<img src={user.avatar} alt="Фото пользователя" />
				<div>
					<div className="profile__info">
						<p>Обо мне: {user.about}</p>
						<p>Почта: {user.email}</p>
					</div>
				</div>
			</div>
			<br />
			<Link to="edit">
				<button className="btn" type="button">Изменить профиль</button>
			</Link>
			<br />
			<Link className="btn" to="/catalog">Вернуться в каталог</Link>
			<br />
			{user && <Link to='/new'>Добавить новый товар</Link>}
			<br />
			<a href="#" onClick={logOut} style={{ color: "black" }}>Выйти</a>

		</>
	)
}