import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { EmojiFrown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Card } from "../Product/Product";

const ITEMS__QE__KEY = ['ITEMS__QE__KEY']

const FavoriteList =(api)=>{
	const productIds=useSelector((store) => store.favorite)


const {data} = useQuery({
	queryKey: [ITEMS__QE__KEY].concat(productIds),
	queryFn: () => api.getProductsById(productIds),
})

if (!data.length) {
	return (
		<>
		<div className="favorites__item">
			<EmojiFrown/>
			<p>Список избранного пуст</p>
		</div>
		<div className="favorites__button">
			<Link style={{ color: 'inherit', textDecoration: 'none' }} to="/"><button type="button">Каталог</button></Link>
		</div>
		</>
	)
}

return (
	<div className="container">
		{data.map((product)=> product.data.available
		&& <Card key={product.data._id} product={product.data}/>)}
	</div>
)
}

export default FavoriteList