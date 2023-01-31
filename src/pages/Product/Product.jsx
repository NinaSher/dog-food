//страница товара

import React from "react";

import { useParams, Link, NavLink } from "react-router-dom";
import Review from "../../components/Review/Review";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice/reducer";
import "./product.css";



export const PRODUCTS_QUERY_KEY = ['PRODUCTS_QUERY_KEY'];

const getProducts = (id) => [...PRODUCTS_QUERY_KEY, id]

export function Product({api}) {
	const { id } = useParams()
	const dispatch = useDispatch()


	
	const { data, status, error } = useQuery({
		queryKey:  getProducts(id),
		queryFn: ({signal}) => api.getProductItem(id, signal),
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

	const addItemCartHandler = (price, discount, pictures, stock, name) => {
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



	return <>
		<h1>{data.name || "Страница товара"}</h1>
		<div className="product__container">
			<div className="product__item">
				<img src={data.pictures} alt="изображение" />
				<h4>Наименование товара</h4>
				<p>{data.name}</p>
				<h4>Описание товара</h4>
				<p>{data.description}</p>
				<h4>Стоимость</h4>
				<p>
					{data.price}
					{' '}
				</p>
				<h4>Рейтинг</h4>
				<p>{data.description}</p>
			</div>
			<div className="product__button">
				<button className="btn" type="button" onClick={addItemCartHandler}>в корзину</button>
				<button className="btn" type="button">в избраное</button>
				<NavLink to="review">
					Отзывы
					{' '}
					{`(${data.reviews.length})`}
					{/*{data.reviews && data.reviews.length > 0 && data.reviews.map((el, i) => <Review {...el} key={i} />)}*/}
				</NavLink>
				<Link to="/catalog">Каталог</Link>

				<button type="submit" className="btn btn-primary">Удалить товар</button>
			</div>
		</div>
	</>
}