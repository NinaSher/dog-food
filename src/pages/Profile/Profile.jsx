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
			<Link className="btn" to="/catalog">Вернуться в каталог</Link>
			<br/>
			<h1>Личный кабинет</h1>
			<p>Привет, {user}</p>
			< div className="profile">
					<div className="profile__info">
					<img src={user.avatar} alt="Фото пользователя" />
						<p>Обо мне: {user.about}</p>
						<p>Почта: {user.email}</p>
						<Link to="edit">
							<button className="btn" type="button">Изменить профиль</button>
						</Link>
					</div>
				</div>
				<div className='profile__addproduct'>
					{user && <Link to='/new'>Добавить новый товар</Link>}
				</div>
		</>
	)
}