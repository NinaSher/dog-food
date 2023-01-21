//корзина (выпадающее окно)
import React from "react";
import {Button} from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import { calcTotalPrice } from "../utils";
import "./cartMenu.css";


export const CartMenu = (items, onClick) => {
	return (
		<div className="cart-menu">
			<div className="cart-menu__products-list">
				{
					items.lenght > 0 ? items.map(product =>
						<CartItem
							key={el.pictures}
							price={el.prise}
							title={el.description}
							id={product.id} />)
						: "Корзина пуста :("
				}
			</div>
			{
				items.lenght > 0 ?
					<div className="cart-menu__arrange">
						<div className="cart-menu__total-price">
							<span>Итого:</span>
							<span>{calcTotalPrice(items)}</span>
						</div>
						<Button type="primary" size="m" onClick={onClick}>
							Оформить заказ
						</Button>
					</div>
					: null}
		</div>
	)
}