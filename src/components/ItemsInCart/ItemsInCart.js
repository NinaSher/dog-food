//количество позиций в корзине
import React from 'react';
import './ItemsInCart';

export const ItemsInCart = ({
	quantity = 0
}) => {
	return quantity > 0 ? (
		<div className="items-in-cart">
			{quantity}
		</div>
	) : null
}