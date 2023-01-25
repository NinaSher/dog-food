//страница товара
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Review from "../components/Review/Review";
import { currentProduct } from '../store/productSlise/reducer'

import { useSelector } from "react-redux";





export default ({ }) => {
	const { id } = useParams();
	const [setProduct] = useState({});
	const [users, setUsers] = useState([]);



	const products = useSelector(state => state.product.currentProduct);
	if (!products) return null

	let token = localStorage.getItem("sm8");
	useEffect(() => {
		if (token) {
			fetch(`https://api.react-learning.ru/products/${id}`, {
				headers: {
					authorization: `Bearer ${token}`
				}
			})
				.then(res => res.json())
				.then(data => {
					setProduct(data);
				})
		}
	})


	return <>

		<h1>{products.name || "Страница товара"}</h1>
		<p>{id}</p>

		<p>{description}</p>
		<button onClick={() => addItemCartHandler(id, pictures, price, discount, stock)} className={stylesIndex.card_button} type="button">в корзину</button>
		<Link to="/catalog">Назад</Link>
		<h2>Отзывы</h2>
		<div className="reviews">
			{products.reviews && products.reviews.length > 0 && products.reviews.map((el, i) => <Review {...el} key={i} />)}
		</div>

	</>
}