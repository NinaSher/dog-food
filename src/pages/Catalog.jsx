import React from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";

export default ({data}) => {
	return <>
	<div className="cards">
		{data.map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
		<Card 
		key={"card_"+i} 
		text={el.name} 
		like={(i+1) % 2 === 0}
		price={el.price}
		pictures={el.pictures}
		weight={el.weight}/>
		</Link>)}
	</div>
			</>
}