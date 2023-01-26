//страница заказа
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { Api } from '../../Api'
import './cart.css'

import {OrderItem} from '../../components/OrderItem/OrderItem';
import { calcTotalPrice, enumerate } from "../../components/utils"


export const PRODUCT__CARD__KEY = ['PRODUCT__CARD__KEY']

const getOrderItemQueryKey = (cartItemsId) => PRODUCT__CARD__KEY.concat(cartItemsId)

export function Cart() {
	const cartId = useSelector((store) => store.cart.items)
	const items = useSelector((state) => state.cart.itemsInCart);

const cart = useSelector((store)=> store.cart)
const {data: products} = useQuery({
	queryKey: cart,
	queryFn: () => Api.getProductsById(cart.map((product)=> product.id)),
})
console.log(products)
	if (items.length < 1) {
		return (
			<>
		<h1>Ваша корзина пуста!</h1>
		<Link to="/catalog">Вернуться в каталог</Link>
		</>)}


	return ( 
		<><div className='cart-button__left'>
		<button className="btn" type="button">Оплатить</button>
	</div>
	<div className='cart-catalog'>
	<Link to="/catalog">Вернуться в каталог</Link>
	</div>
		<section className="section-cart">
				<header className='section-cart__header'>
					<h1>Корзина товаров</h1>
				</header>
				<div className='section-cart__body'>
					<div className='container'>
						<section className='cart'>
							<header className='cart-header'>
								<div className='cart-header__title'>наименование</div>
								<div className='cart-header__count'>количество</div>
								<div className='cart-header__cost'>стоимость</div>

							</header>
							<section className='product'>
								
								{ items.map(product => <OrderItem  product={product}
								/>)}
							</section>
							<footer className='cart-footer'>
								<span>Итого:</span>
								<div className='cart-footer__price'>
									<span>{items.length} {enumerate(items.length,['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} руб.</span>
								</div>
							</footer>
						</section>
					</div>
				</div>
			</section>
			</>	
				)
				};

				{/*
					items?.map((el) => (
						<CartItem key={el['_id']}  
						pictures={el.pictures}
						name={el.name}
						quantity={el.quantity}
					/>
				))
				<span>{calcTotalPrice(items)} руб.</span>
					*/}