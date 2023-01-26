//элемент заказа
import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./orderItem.css";
import {deleteItemFromCart} from "../../store/cartSlice/reducer";

export const OrderItem = ({product}) => {
	const dispatch = useDispatch();
	const hendleDeleteClick = () => {
		dispatch(deleteItemFromCart(product.id))
	}
	return (
		<div className="order-item">
			<div className="order-item__title">
				<span>{product.name}</span>
			</div>
			<div className="orser-item__price">
				<span>{product.price}</span>
				<AiOutlineCloseCircle
				size={25}
				className="cart-item__delete-icon"
				onClick={hendleDeleteClick}
				/>
			</div>
		</div>
	)
}