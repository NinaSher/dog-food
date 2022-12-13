import React from "react";
import "./style.css";

export default ({Topnav}) => {
	return <div class="topnav" id="myTopnav">
	<a href="#home" class="active">Популярные</a>
	<a href="#news">Новинки</a>
	<a href="#contact">Сначала дешёвые</a>
	<a href="#about">Сначала дорогие</a>
	<a href="#about">По рейтингу</a>
	<a href="#about">По скидке</a>
	<a href="javascript:void(0);" class="icon" onclick="myFunction()">
		<i class="fa fa-bars"></i>
	</a>
</div>
}


