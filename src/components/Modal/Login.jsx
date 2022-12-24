import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
export const  SIGNIN_QUERY_KEY = 'SIGNIN_QUERY_KEY';
function signIn(values) {
	const { data } = useQuery(
	{ queryKey: SIGNIN_QUERY_KEY, queryFn: getSignIn(values.email, values.password) },
	)
	return data
}

export default ({change, api, close, setToken}) => {
	const [inp1, setInp1] = useState("");
	const [inp2, setInp2] = useState("");
	

	const sendForm = (e) => {
		e.preventDefault();
		const body = {
			email: inp1,
			password: inp2,
		}
		api.signIn(body)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			localStorage.setItem("sm8", data.data.name);
			localStorage.setItem("token", data.token);
			setToken(data.token);
			setInp1("");
			setInp2("");
			close(false);
		})
	}

	return <form onSubmit={sendForm}>
		<input
			type="email"
			placeholder="Введите ваш email"
			value={inp1}
			required
			onChange={(e) => { setInp1(e.target.value) }}
		/>
		<input
			type="password"
			placeholder="Пароль"
			value={inp2}
			onChange={(e) => {setInp2(e.target.value) }}
		/>
		
		<button className="btn" type="submit">Войти</button>
		<button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>Зарегистрироваться</button>
	</form>
}
