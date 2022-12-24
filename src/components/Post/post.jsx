import React from "react";
import "./post.css";
import food from "./img/food.png";

export default () => {
	return < div className="promo">
		Ваш пес будет счастлив!
		<img src={food} alt="Корм"/>
	</div>
}
