//страница заказа
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { CartItem } from '../../components/CartItem/CartItem'
//import OrderItem from '../../components/OrderItem/OrderItem'
import { Api } from '../../Api'
import './cart.css'


import { calcTotalPrice } from "../../components/utils"

export const PRODUCT__CARD__KEY = ['PRODUCT__CARD__KEY']

const getOrderItemQueryKey = (cartItemsId) => PRODUCT__CARD__KEY.concat(cartItemsId)

export function Cart() {
	const dispatch = useDispatch();
	const cartId = useSelector((store) => store.cart.items)
	const items = useSelector((state) => state.cart.itemsInCart);

	if (items.length < 1) {
		return <><h1>Ваша корзина пуста!</h1>
		<Link to="/catalog">Вернуться в каталог</Link></>
	}

	

	const {data}  = useQuery({
		queryKey: getOrderItemQueryKey(cartId?.map((card) => card.id)),
		queryFn: () => Api.getProductsById(cartId?.map((card) => card.id)),
	})

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
								{items?.map((el) => (
									<CartItem key={el['_id']}  
									pictures={el.pictures}
									name={el.name}
									quantity={el.quantity}
									/>
								))}
							</section>
							<footer className='cart-footer'>
								<span>Итого:</span>
								<div className='cart-footer__price'>
									<span>{calcTotalPrice(items)} руб.</span>
								</div>
							</footer>
						</section>
					</div>
				</div>
			</section>
			</>	
				)
				};

