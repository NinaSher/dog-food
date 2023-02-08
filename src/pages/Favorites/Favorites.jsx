import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { EmojiFrown } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Card/Index";
import './favorites.css'


const ITEMS__QE__KEY = ['ITEMS__QE__KEY']

const getFevoriteQueryKey = (id) => ITEMS__QE__KEY.concat(id)

export default ({ api }) => {
	const { id } = useParams()
	const favoritesIds = useSelector((store) => store.favorites.items);
	console.log(favoritesIds)
	const dispatch= useDispatch();

	const { data } = useQuery({
	queryKey: getFevoriteQueryKey(favoritesIds.map((card)=> card.id)),
	queryFn: () => api.getProductsById(favoritesIds.map((card)=> card.id)),
	})
	console.log(data)
	

	const deleteFavoriteHandler = () => {
		dispatch(clearFavorites())
	 }

	return (
		<>
			<h1>Страница избранных товаров</h1>
			{data > 0
				? <>
					<div className="cards">
						{ data.map((el, i) => (
							<Card
								key={"card_" + i}
								id={el._id}
								name={el.name}
								like={(i + 1) % 2 === 0}
								price={el.price}
								discount={el.discount}
								pictures={el.pictures}
								weight={el.weight}
								tags={el.tags}
							/>
						))
						}
						   <button onClick={deleteFavoriteHandler} type="button">удалить</button>
					</div>
				</>
				: <div className="block">
					<EmojiFrown />
					<p>У вас еще нет избранных товаров</p>
					<Link to="/catalog" className="btn btn__profile" >В каталог</Link>
				</div>
			}

		</>
	)
}

