import React from "react";
//import Card from "../components/Card";
import Post from "../components/Post/post";
import {Link} from "react-router-dom";



export default ({data}) => {
	return <>
	<Post data={data}/>
	<br></br>
	<Link to="/catalog">Перейти в каталог</Link>
	
			{/*data.map((el, i) => 
			<Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0} />)*/
			}
	</>
	
};