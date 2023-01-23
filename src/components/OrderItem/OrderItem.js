//элемент заказа
import React from "react";
import { useDispatch } from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "./orderItem.css";
import { deleteItemFromCart } from "../../store/cartSlice/reducer";
import {Card} from "../Card/index";

export const OrderItem = ({data}) => {
	const dispatch = useDispatch();
	const handleDeleteClick = () => {
		dispatch(deleteItemFromCart(data.id))
	}
	return (
		<div className="order-item">
			<div className="order-item__title">
			<Card pictures={pictures}/>
			</div>
			<div className="order-item__price">
               <span>{ totalPrice } руб.</span>
            	<AiOutlineCloseCircle
                  size={25}
                  className="cart-item__delete-icon"
                  onClick={handleDeleteClick}
               />
            </div>
         </div>
   		)
}
