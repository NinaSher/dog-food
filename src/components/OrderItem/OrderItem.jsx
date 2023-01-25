//элемент заказа
{/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ItemsInCart} from "../ItemsInCart/ItemsInCart";
import "./orderItem.css";

import {
	addItem,
	minusItem,
	removeItem,

} from '../../store/cartSlice/reducer';


export const OrderItem = ({
	id,
	name,
	pictures,
	totalPrice,
}) => {

	const dispatch = useDispatch();
	const handleDeleteClick = () =>
	{
		dispatch(removeItem(data.id))
	}

	const onClickPlus = (id) => {
		dispatch(
			addItem({
				id,
			}),
		)
	}

	const onClickMinus = (id) => 
	{
		dispatch(minusItem(id))
	}

	const onClickRemove = (id) => 
	{
		dispatch(removeItem(id))
	}
	
	
	
	const countId = (id) => {
		const objId = cartId.find((obj) => obj.id === id)
		if (!objId) {
			return null
		} else {
			return objId.count
		}
	}
	

	


	const discountFunc = (price, discont) => Math.round((price - price * discont * 0.01) / 100) * 100

	return (
		<div className="order-item">
			<div className="order-item__title">
				<img src={pictures} alt="изибражение" />
				<h5>{name}</h5>
			</div>
			<div className="order-item__price">
				<span>{totalPrice} руб.</span>
			</div>
			<div className="order-item" margin>
				<h5>{name}</h5>
				<ItemsInCart/>
			</div>
		</div>
	)
}


export default OrderItem;


{/*<button className="btn" onClick={() => onClickMinus(minusItem(id))}>-</button>
				<ItemsInCart/>
				<button className="btn" onClick={() => onClickPlus(addItem(id))}>+</button>
				<button
					className="btn" type="button" 
onClick={() => dispatch(onClickRemove(id))}>Удалить</button>*/}