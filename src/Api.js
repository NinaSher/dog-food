
class Api {
	constructor(token) {
		this.path = "https://api.react-learning.ru";
		this.group = "sm8";
		this.token = token;
	}


	signUp(body) { //регистрация
		body.group = this.group;
		return fetch(`${this.path}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "appLication/json"
			},
			body: JSON.stringify(body)
		});
	}
	signIn(body) { //авторизация
		return fetch(`${this.path}/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "appLication/json"
			},
			body: JSON.stringify(body)
		});
	}
	getProducts() {//получение продукта
		return fetch(`${this.path}/products`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		});
	}

	getProductItem = (id) => fetch(
		`${this.baseUrl}/products/${id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		},
	)
	async getCardItem(search) { // вывод карточек
		const response = await fetch(`${this.baseUrl}/products/?${new URLSearchParams(search).toString()}`, {
			headers: {
				authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
				'Content-Type': 'application/json',
			},
		})
		return response.json()
	}

	getProductsByIds(ids) {
		return Promise.all(ids.map(id => fetch(`https://domain.ru/products/${id}`).then(res => res.json())))
	}
	//getProductByIDs = (ids) => {
	//const token = getUserTokenFromLS()
	//return axios.all(ids.map((id) => axios.get(`${this.baseUrl}/products/${id}`, { headers: { ...this.headers, authorization: `Bearer ${token}` } })))
	//}
}
{/*setLike(id, isLike) {
	return fetch(`${this.path}/products/likes/${id}`, {
		method: isLike ? "DELETE" : "PUT",
		headers: {
			"authorization": `Bearer ${this.token}`
		}
	})
}*/}



export { Api };


