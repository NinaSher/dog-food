import React from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import { isEditable } from "@testing-library/user-event/dist/utils";


export default ({data}) => {
	

	return <>
	{data.length > 0
	? <>
	<div className="cards">
		{data.map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
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
		</Link>)}
	</div>
		</>
			: <div className="empty-block">
			<EmojiFrown/>
			<p style={{width:250}}>Простите, по вашему запросу товаров не найдено</p>
			<Link to="/" className="btn" >На главную</Link>
	</div>
}
	</>
}
