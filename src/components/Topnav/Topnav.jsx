//категории
import React from "react";
import { useDispatch } from "react-redux";
//import {setSort} from "../../store";
//import { Sort as SortType, SortPropertyEnum } from '../redux/filter/types';
import "./style.css";



export default (index) => {
	const [activeIndex, setActivaIndex] = React.useState(0);

	const onClickTopnav = () => {
		setActivaIndex(index);
	}

	return <div className="topnav" id="myTopnav">
		<ul>
		<li onClick={onClickTopnav} className={activeIndex === 0 ? 'active' : ''}>Популярные</li>
		<li onClick={onClickTopnav} className={activeIndex === 1 ? 'active' : ''}>Новинки</li>
		<li onClick={onClickTopnav} className={activeIndex === 2 ? 'active' : ''}>Сначала дешёвые</li>
		<li onClick={onClickTopnav} className={activeIndex === 3 ? 'active' : ''}>Сначала дорогие</li> 
		<li onClick={onClickTopnav} className={activeIndex === 4 ? 'active' : ''}>По рейтингу</li>
		<li onClick={onClickTopnav} className={activeIndex === 5 ? 'active' : ''}>По скидке</li>
		
		</ul>
		
	</div>
}


/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">
			<i className="fa fa-bars"></i>
		</a>*/