//страница заказа
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Api } from '../../Api'
import './cart.css'

import { OrderItem } from '../../components/OrderItem/OrderItem';
import { calcTotalPrice, enumerate } from "../../components/Utils"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleCheckAll, setCheckboxEl } from '../../store/cartSlice/reducer'
import { clearItems } from '../../store/cartSlice/reducer'
import { Tornado } from 'react-bootstrap-icons'


export const PRODUCT__CARD__KEY = ['PRODUCT__CARD__KEY']

const getOrderItemQueryKey = (cartItemsId) => PRODUCT__CARD__KEY.concat(cartItemsId)

export function Cart({ api }) {
	const [checkbox, setCheckbox] = useState(true)
	//const [chicket, setChicket] = useState(true)
	//const cart = useSelector((store) => store.cart)
	const items = useSelector((store) => store.cart.itemsInCart);
	//console.log()


	const { data } = useQuery({
		queryKey: getOrderItemQueryKey(items.map((el) => el.id)),
		queryFn: () => api.getProductsById(items.map((el) => el.id)),
	})
	console.log(data)

	if (items.length < 1) {
		return (
			<>
				<h1>Ваша корзина пуста!</h1>
				<Link to="/catalog">Вернуться в каталог</Link>
			</>)
	}

	const quantity = (id) => {
		const objId = items.find((obj) => obj.id === id)
		if (!objId) {
			return null
		} else {
			return objId.count
		}
	}
	const onClickClearCart = () => {
		dispatch(clearItems())
	}
	const { totalPrice } = useSelector((store) => store.cart)

	const dispatch = useDispatch() //при добавлении чекбокса начинается бесконечный цикл, из-за корзины в хедере и страницы корзины, идет наложение
	/*const allCheckboxes = () => {
		dispatch(toggleCheckAll())
		setChicket((prev) => !prev)
		setCheckbox((prev) => !prev)
		const revue = items.some((el) => el.checkbox === false)
		if (revue === true) {
			setCheckbox(false)
		}
	}*/

	/*const checkboxEl = (id) => {
		dispatch(setCheckboxEl(id))
		setChicket((prev) => !prev)
		const revue = items.some((el) => el.checkbox === false)
		if (revue === false) {
			setCheckbox(false)
		}
		if (revue === true) {
			setCheckbox(false)
		}
	}*/

	/*const checkedId = (id) => {
		const checkedElId = items.find((el) => el.id === id)
		if (checkedElId) {
		return checkedElId.checkbox
		}
		console.log(checkedElId.checkbox)
		return checkedElId.checkbox
	}*/

	return (
		<>
		<div className='cart-button__left'>
			<button className="btn" type="button">Оплатить</button>
		</div>
			<div className='cart-catalog'>
				<Link to="/catalog">Вернуться в каталог</Link>
			</div>
			<div className='cart-catalog'>
				<Link to="/profile">Личный кабинет</Link>
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
								<div className='cart-header__cost'>стоимость</div>
							</header>
							{data ? data.map((el) => (
								<div className='cart__body'> 
								<>
									<OrderItem 
										el={el}
										//checkboxEl={checkboxEl}
										quantity={quantity}
									/>
									</>
									</div>
							)) : null}
							
							<div className="order-item"></div>
							<footer className='cart-footer'>
								<span>Итого:</span>
								<div className='cart-footer__price'>
									{' '}
									{totalPrice}
									{/*<span>{ items.length} {enumerate( items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice( items)} руб.</span>*/}
								</div>
							</footer>
							<button className="btn" type="button" onClick={() => onClickClearCart()}>
								Очистить Корзину
							</button>
						</section>
					</div>
				</div>
			</section>
			</>
	)
};


