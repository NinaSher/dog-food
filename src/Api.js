


class Api {
	constructor(token) {
		this.path = "https://api.react-learning.ru";
		this.group = "sm8";
		this.token = token;
	}

	
	signUp(body){ //регистрация
		body.group = this.group;
		return fetch(`${this.path}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "appLication/json"
			},
			body: JSON.stringify(body)
		});
	}
	signIn(body){ //авторизация
		return fetch (`${this.path}/signin`,{
			method: "POST",
			headers: {
				"Content-Type": "appLication/json"
			},
			body: JSON.stringify(body)
		});
	}
	getProducts(){//получение продукта
		return fetch(`${this.path}/products`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		});
	}
	getProductsByIds(ids){
		return Promise.all (ids.map(id => fetch (`https://domain.ru/products/${id}`).then(res => res.json())))
	}
	}

export {Api};