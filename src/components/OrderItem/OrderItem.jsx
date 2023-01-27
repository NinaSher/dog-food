//элемент заказа
import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./orderItem.css";
import { deleteItemFromCart } from "../../store/cartSlice/reducer";

export const OrderItem = ({ product, quantity, checkboxEl }) => {
	const dispatch = useDispatch();
	const hendleDeleteClick = () => {
		dispatch(deleteItemFromCart(product.id))
	}
	console.log(product.id)
	return (
		<><input type='checkbox' checked={checkboxEl(product.id)} /><div className="order-item">
			<div className="order-item__title">
				<img src={product.pictures} alt="изображение" style={{ height: "100px" }} />
				<span>{product.name}</span>
				<div>{quantity(product.id)}</div>
			</div>
			<div className="orser-item__price">
				<span>{product.price}</span>
				<AiOutlineCloseCircle
					size={25}
					className="cart-item__delete-icon"
					onClick={hendleDeleteClick} />
			</div>
		</div></>
	)
}