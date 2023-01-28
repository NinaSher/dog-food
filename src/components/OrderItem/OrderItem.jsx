//элемент заказа
import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./orderItem.css";
import { addItem, deleteItemFromCart } from "../../store/cartSlice/reducer";

export const OrderItem = ({ el, quantity }) => {
	const dispatch = useDispatch();
	const hendleDeleteClick = () => {
		dispatch(deleteItemFromCart(el['_id']))
	}
	console.log(el['_id'])


	return (

		<>{/*<input type='checkbox' checked={checkboxEl(product.id)} />*/}
			<div className="order-item">
				<div className="order-item__title">
					<img src={el.pictures} alt="изображение" style={{ height: "100px" }} />
					<div className="ordet-item__name">{el.name}</div>
					<div className="order-item__quantity">{quantity(el.id)}</div>
				</div>
				<div className="orser-item__price">{el.price}</div>
				{quantity(el['_id']) === 1 ? (
					<button
					size={"s"}
						className='btn'
						type="button"
						disabled
					>
						-
					</button>
				) : (
					<button
					size={"s"}
						className='btn'
						type="button"
						onClick={() => {
							onClickMinus(el['_id'])
						}}
					>
						-
					</button>
				)}
				<div>
					{quantity(el['_id'])}
				</div>
				{quantity(el['_id']) === el.stock ? (
					<button
					size={"s"}
						className='btn'
						type="button"
						disabled
					>
						+
					</button>
				) : (
					<button
					size={"s"}
						className="btn"
						type="button"
						onClick={() => {
							addItem(el['_id'])
						}}
					>
						+
					</button>

				)}
				
				<div className="order-item__delete">
					<AiOutlineCloseCircle
						size={25}
						className="cart-item__delete-icon"
						onClick={hendleDeleteClick} />
				</div>
			</div>
		</>)
}