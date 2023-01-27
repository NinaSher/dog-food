//страница товара

import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import Review from "../components/Review/Review";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem/CartItem";



export const PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY';
function getProducts(values) {
	const { data } = useQuery(
		{ queryKey: PRODUCTS_QUERY_KEY, queryFn: getProducts(values.getProducts) },
	)
	return data
}

export default ({ }) => {
	const { id } = useParams()
	const [product, setProduct] = useState({});
	const [users, setUsers] = useState([]);

	const items = useSelector((state) => state.cart.itemsInCart);

	let token = localStorage.getItem("sm8");
	{/*useEffect(() => {
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
		
		<button className="btn" type="button" onClick={addItemCartHandler}>в корзину</button>
		<button className="btn" type="button">в избраное</button>

		<NavLink to="review">
			Отзывы
			{' '}
			{product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i} />)}
		</NavLink>
		<Link to="/catalog">Каталог</Link>
	</>

}






{/*import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Review from "../components/Review/Review";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {Api} from '../Api'
import {NavLink} from "react-router-dom"

const PRODUCT_DETAIL=['PRODUCT_DETAIL']

export function Product(
	name,
	pictures,
	price,
	discount,
	wight,
	reviews,
) {
	const { id } = useParams()
	const dispatch = useDispatch()
	console.log(id)
	const getProductFunc = () => Api.getProductItem(id).then((res) => res.json())
	const { data} = useQuery({
	   queryKey: PRODUCT_DETAIL,
	   queryFn: getProductFunc,
	})


	




	const addItemCartHandler = () => {
	   dispatch(addItem(id))
	}
	const discountFunc = (p, discont) => Math.round((p - p * discont * 0.01) / 100) * 100
	//console.log(data)
	
	return (
	  <div className='product-detail'>
		 <div className='product-detail__title'>
			<img className='product-detail__img' src={pictures} alt="Image_item" />
		 </div>
		 <div className='product-detail__info'>
			<div className='product-detail__name'>
			  <h2>{name}</h2>
			  <h4 className='product-detail__price'>
				 {price}
				 {' '}
				 ₽
			  </h4>
			  <h3 className='product-detail__disount'>
				 {discount ? discountFunc(price, discount) : price}
				 {' '}
				 ₽
			  </h3>
			  <h4>
				 Вес
				 {' '}
				 {wight}
			  </h4>
			  <div className='product-detail__button'>
				 <button type="btn" onClick={addItemCartHandler}>в корзину</button>
				 <button type="btn">в избраное</button>
			  </div>
			</div>
			<div>
			  <NavLink to="review">
				 Отзывы
				 {' '}
				 {reviews && reviews.length > 0 && reviews.map((el, i) => <Review {...el} key={i} />)}
			  </NavLink>
			</div>
		 </div>
	  </div>
	)
 }

export default Product*/}

{/*<h1>{product.name || "Страница товара"}</h1>
		<p>{id}</p>
		<Link to="/catalog">Назад</Link>
		<h2>Отзывы</h2>
		<div className="reviews">
			{product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i} />)}
		</div>
	</>*/}