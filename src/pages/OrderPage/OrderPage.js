//страница заказа
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AppIndicator } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/OrderItem/OrderItem';
import { calcTotalPrice, enumerate } from '../../components/utils';
import './orderPage.css';
import { Api } from '../../Api';

export const OrderPage = () => {
	const items = useSelector((state) => state.cart.itemsInCart);

	if (items.length < 1) {
		return <h1>Ваша корзина пуста!</h1>
	}

	const order = useSelector(store => store.order)
	const { data: products } = useQuery({ queryKey: ['order'], queryFn: () => Api.getProductsById(order.map(product => product.id)) })


	return (
		<><div className="order-page">

		</div><div className="order-page__right">
				<div className="order-page__total-price">
					<span>{items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} руб.</span>
				</div>
			</div></>
	)
}