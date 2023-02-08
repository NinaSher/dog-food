//страница товара

import React from "react";

import { useParams, Link, NavLink } from "react-router-dom";
import Review from "../../components/Review/Review";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice/reducer";
import {  addFavorite} from "../../store/favorites/reducer";
import "./product.css";



export const PRODUCTS_QUERY_KEY = ['PRODUCTS_QUERY_KEY'];

const getProducts = (id) => [...PRODUCTS_QUERY_KEY, id]

export function Product({ api }) {
	const { id } = useParams()
	const dispatch = useDispatch()



	const { data, status, error} = useQuery({
		queryKey: getProducts(id),
		queryFn: ({ signal }) => api.getProductItem(id, signal),
	})

	if (status === 'loading') {
		return <span>Loading...</span>
	}

	if (status === 'error') {
		return (
			<span>
				Error:
				{error.message}
			</span>
		)
	}

	const addItemCartHandler = (price, discount, pictures, stock, name,) => {
		const item = {
			id,
			price,
			discount,
			pictures,
			name,
			stock,
		
		}
		dispatch(addItem(item))
	}

	console.log(data)

	const changeFavoriteHandler = (event) => {
		event.preventDefault()
		dispatch(addFavorite(id))
	}

	return <>
		<Link to="/catalog">Вернуться в каталог</Link>
		<div className="product__container">
		<h1>{data.name || "Страница товара"}</h1>
		<div className="product__info">
				<img className="img" src={data.pictures} alt="изображение" />
				<div className="product__item">
				<h2>{data.name}</h2>
		
				<p>{data.description}</p>
				<p>
					{data.price}
					{' '}₽
				</p>
				<p>{data.discount}₽</p>
			</div>

			
		</div>
		<hr/>
		<div className="product__button">
				<button className="btn" type="button" onClick={() => addItemCartHandler(data.price, data.discount, data.pictures, data.stock, data.name)}>В корзину</button>
				<button className="btn" type="button" onClick={changeFavoriteHandler}>В избраное</button>
			</div>
		</div>
		<br/>

		<NavLink to="review">
					<h5>Отзывы</h5>
					{' '}
					{`(${data.reviews.length})`}
					{/*data.reviews && data.reviews.length > 0 && data.reviews.map((el, i) => <Review {...el} key={i} />)*/}
				</NavLink>
	</>
}