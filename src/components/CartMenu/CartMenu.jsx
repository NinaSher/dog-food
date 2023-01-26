//корзина (выпадающее окно)
import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";
import { calcTotalPrice } from "../utils";
import "./cartMenu.css";


export const CartMenu = ({onClick}) => {
	const items = useSelector((state) => state.cart.itemsInCart);

	return (
		<div className="cart-menu">
			<div className="cart-menu__list">
				{items.length > 0
					? items.map((el) => (
						<CartItem
							key={el.pictures}
							pictures={el.pictures}
							name={el.name}
							discount={el.discount}
							price={el.price}
							id={el.id}
						/>
					))
					: "Корзина пуста"}
			</div>
			{items.length > 0 ? (
				<div className="cart-menu__arrange">
					<div className="cart-menu__total-price">
						<span>Итого:</span>
						<span>{calcTotalPrice(items)} руб.</span>
					</div>
					<button className="btn" type="primary" size="m" onClick={onClick}>
						Оформить заказ
					</button>
				</div>
			) : null}
		</div>
	);
};

