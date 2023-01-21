import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cartSlice/reducer";
import { ProductBuy } from "../ProductBuy/ProductBuy";
import "./index.css";




export const Card = ({ id, pictures, name, discount, price, tags, wight, stock, like
}) => {
	const dispatch = useDispatch()


	const addCartHandler = (event) => {

		dispatch(deleteItemFromCart(id));

		event.preventDefault();
		console.log(id)
	}

	const discountFunc = (p, discont) => Math.round((p - p * discont * 0.01) / 100) * 100


	return <>
		<div className="card">
			<span className="card__heart">
				{
					like
						? <i className="fa-solid fa-heart"></i>
						: <i className="fa-regular fa-heart"></i>
				}
			</span>
			<img src={pictures} alt={name} style={{ height: "100px" }} />
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
			<div className="card__buy">
				<ProductBuy onClickAdd={() => addCartHandler(id, name, pictures, price, discount, stock)} />
			</div>
		</div>
	</>
};
export default Card;







