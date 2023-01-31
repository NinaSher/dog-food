import React, { useContext } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { EmojiFrown } from "react-bootstrap-icons";


export default () => {
	const { favorites} = useContext();
	const paginate = usePagination(favorites, 3);
	return <>
		{favorites.length > 0
			? <>
				<h1>Каталог товаров</h1>
				
				<div className="cards">
					{setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
						<Card key={"card_" + i} {...el} />
					</Link>)}
				</div>
			</>
			: <div className="empty-block">
				<EmojiFrown />
				<p>Вы еще не добавили любимые товары</p>
				<Link to="/catalog" className="btn">В каталог</Link>
			</div>
		}
	</>
}