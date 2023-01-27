//количество позиций в корзине
import React from 'react';
import './ItemsInCart';

export const ItemsInCart = ({
	count = 0
}) => {
	return count > 0 ? (
		<div className="items-in-cart">
			{count}
		</div>
	) : null
}