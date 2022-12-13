import React, { useContext, useState, } from "react";
import './index.css';




	export default ({ text, like }) => {return <div className="card">
		{text}
			<div class="add-to-cart">
      		<a href="" class="cart-button">В корзину</a></div>
			<span className="card__heart">
				{like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
			</span></div>}

