//корзина (header)
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../CartMenu/CartMenu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from "../ItemsInCart/ItemsInCart";
import { useHistory } from "react";

import "./cartBlock.css";



export const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart);
	//const history = useHistory();
	const totalPrice = calcTotalPrice(items);


	const handleGoToOrderClick = useCallback(() => {
		setIsCartMenuVisible(false);
		//history.push('/orderItem');
	}, []);


	return (
		<div className="catr-block">
			<ItemsInCart quantity={(items.length)} />
			<BiCartAlt size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
			{totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} руб.</span> : null}
			{isCartMenuVisible && <CartMenu items={items} onClick={handleGoToOrderClick} />}
		</div>
	)
}
