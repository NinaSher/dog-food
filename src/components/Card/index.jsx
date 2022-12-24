import React from "react";
import './index.css';


/*import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../..'
export function Card (){
	const [products, setProducts]=useState([])
	useEffect(() => {
		api.getCard()
		.then((data) => setProducts(data.products))
		.catch((error) => console.error(error.message))
	}, [setProducts])


return (
	products
	   ? (
		<div key={products} className={IndexCard.conteinerCard}>
			{products.map((el) => (
			   <div className={IndexCard.cardItem} key={el['_id']}>
				<FontAwesomeIcon className={IndexCard.icon} icon={regular('heart')} />
				<img src={el.pictures} alt="Фото" />
				<h3>{el.name}</h3>
				<p>
					{el.price}
					{' '}
					<FontAwesomeIcon className={IndexCard.rub} icon={solid('ruble-sign')} />
				</p>
				<p className={IndexCard.discount}>
					Sale
					{el.discount}
					%
				</p>
				<p>{el.wight}</p>
				<p>{el.tags}</p>
				<button type="button">В корзину</button>
			   </div>
			))}
		</div>
	)
	: null)};*/

export default ({ text, like}) => {
		return <div className="card">
			{text}
			<div class="add-to-cart">
      		<a href="" class="cart-button">В корзину</a></div>
			<span className="card__heart">
				{like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
			</span>
			</div>
		}

