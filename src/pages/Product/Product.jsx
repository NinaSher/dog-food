//страница товара

import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import Review from "../../components/Review/Review";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import "./product.css";


export const PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY';
function getProducts(values) {
	const { data } = useQuery(
		{ queryKey: PRODUCTS_QUERY_KEY, queryFn: getProducts(values.getProducts) },
	)
	return data
}

export default ({ 
	pictures, 
	name, 
	discount, 
	price, 
	description,
	wight, 
	stock, 
	likes,totalPrice,
}) => {
	const { id } = useParams()
	const [product, setProduct] = useState({});
	const [users, setUsers] = useState([]);

	const items = useSelector((state) => state.cart.itemsInCart);

	{/*let token = localStorage.getItem("sm8");
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
	})*/}

	const addItemCartHandler = () => {
	   dispatch(addItem(id))
	}

	return <>
		<h1>{product.name || "Страница товара"}</h1>
		<div className="product__container">
		<div className="product__item">
			<img src={pictures} alt="изображение"/>
			<h4>Наименование товара</h4>
			<p>{name}</p>
			<h4>Описание товара</h4>
			<p>{description}</p>
			<h4>Стоимость</h4>
			<p>
				{price}
				{' '}
			</p>
			<h4>Рейтинг</h4>
			<p>{description}</p>
		</div>
		<div className="product__button">
		<button className="btn" type="button" onClick={addItemCartHandler}>в корзину</button>
		<button className="btn" type="button">в избраное</button>
		<NavLink to="review">
			Отзывы
			{' '}
			{product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i} />)}
		</NavLink>
		<Link to="/catalog">Каталог</Link>
		</div>
		</div>
	</>
}