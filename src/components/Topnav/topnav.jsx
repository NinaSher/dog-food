import React from "react";
import "./style.css";

export default ({}) => {
	return <div className="topnav" id="myTopnav">
		<a href="#home" className="active">Популярные</a>
		<a href="#news">Новинки</a>
		<a href="#contact">Сначала дешёвые</a>
		<a href="#about">Сначала дорогие</a>
		<a href="#about">По рейтингу</a>
		<a href="#about">По скидке</a>
		<a href="javascript:void(0);" className="icon" onClick="myFunction()">
			<i className="fa fa-bars"></i>
		</a>
	</div>
}


