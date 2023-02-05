
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
	getUserById(userId) {
		return fetch(`${this.path}/v2/sm8/users/${userId}`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		})
	}
	getProducts() {//получение продукта
		return fetch(`${this.path}/products`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		});
	}
	async getProductItem(id) {
		const response = await fetch(`${this.path}/products/${id}`, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
			},
		}).catch((error) => error)
		return response.json()
	}
	getProductsById(ids) { // корзина
		return Promise.all(ids.map((id) => fetch(`${this.path}/products/${id}`, {
			headers: {
				authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json())))
	}

	async addProductRequest(body) {
		console.log(body)
		const response = await fetch(`${this.path}/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${this.token} `,
			},
			body: JSON.stringify(body),
		})
		console.log(response.json())
		return response.json()
	}


	delProduct(id) {
		return fetch(`${this.path}/products/${id}`, {
			method: "DELETE",
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		})
	}
	setLike(id, isLike) {
		try {
			const res = fetch(`${this.path}/products/likes/${id}`, {
				method: isLike ? "DELETE" : "PUT",
				headers: {
					"authorization": `Bearer ${this.token}`,
				},
			})
			if (res.status !== 200) {
				const answer = res.json()
				console.log(answer.err.statusCode, answer.message)
				return answer
			}
			return res.json()
		} catch (Error) {
			throw new Error(Error)
		}

	}
	addReview(productId, body) {
		return fetch(`${this.path}/products/review/${productId}`, {
			method: "POST",
			headers: {
				"authorization": `Bearer ${this.token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
	}

	deleteReview(productId, reviewId) {
		return fetch(`${this.path}/products/review/${productId}/${reviewId}`, {
			method: "DELETE",
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		})
	}

	getReviews() {
		return fetch(`${this.path}/products/review/`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		})
	}

	getProductReview(productId) {
		return fetch(`${this.path}/products/review/${productId}`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		})
	}

}



export { Api };
