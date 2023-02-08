import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice/reducer";
import "./style.css";
import { Link } from "react-router-dom";
import { addFavorite } from "../../store/favorites/reducer";



export const Card = ({ api, 
	id,
	pictures,
	name,
	discount,
	price,
	stock,
	likes, totalPrice,
}) => {

	const dispatch = useDispatch()



	const onClickAdd = (id, name) => {
		const item = {
			id,
			price,
			discount,
			pictures,
			name,
			stock,
		}
		dispatch(addItem(item));
		//navigate('/product/${el._id}');
	}

	const discountFunc = (price, discont) => Math.round((price - price * discont * 0.01) / 100) * 100

	const [like, setLike] = useState(likes && likes.includes(user._id));

	const update = ( id) => {
		console.log(id)
		const item = {
			id,
		}
		//event.preventDefault();
		setLike(!like);
		dispatch(addFavorite(item))
	}



	return <>
		<div className="card">
			<span className="card__heart" onClick={()=> update(id)}>
				{
					like
						? <i className="fa-solid fa-heart"></i>
						: <i className="fa-regular fa-heart"></i>
				}
			</span>
			<img src={pictures} alt="изображение" style={{ height: "100px" }} />
			<h3>{name}</h3>
			<div className='card__discount'>
				-
				{discount}
				%
			</div>
			<div className='card__tag'>
				NEW
			</div>
			<h5 className="card__price">
				{price}
				₽
			</h5>
			<h4 className='card-price__discount'>
				{discount ? discountFunc(price, discount) : price}
				{' '}
				₽
			</h4>

			<button className="btn" type="secondary" onClick={() => onClickAdd(id, name, totalPrice, pictures)}>В корзину </button>

			<Link to={`/catalog/${id}`} key={id}>Подробнее о товаре</Link>
		</div>
	</>
}

export default Card;

