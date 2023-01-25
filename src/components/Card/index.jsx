import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addItem } from "../../store/cartSlice/reducer";
import "./index.css";



export const Card = ({ 
	id, 
	pictures, 
	name, 
	discount, 
	price, 
	tags, 
	wight, 
	stock, 
	like
}) => {
	
	const navigate = useNavigate()
	const dispatch = useDispatch()

   const onClickAdd = (id, name) => {
   const item = {
      id,
      price,
      discount,
      pictures,
      name,
      stock,
   }

   dispatch(addItem(item));
	navigate(`/catalog/${el._id}`);
	
	}

	const discountFunc = (price, discont) => Math.round((price - price * discont * 0.01) / 100) * 100


	return <>
		<div className="card">
			<span className="card__heart">
				{
					like
						? <i className="fa-solid fa-heart"></i>
						: <i className="fa-regular fa-heart"></i>
				}
			</span>
			<img src={pictures} alt="изображение" style={{ height: "100px" }} />
			<h3>{name}</h3>
			<div className='card__discount'>
				-
				{discount}
				%
			</div>
			<div className='card__tag'>
				NEW
			</div>
			<h5 className="card__price">
				{price}
				₽
			</h5>
			<h4 className='card-price__discount'>
				{discount ? discountFunc(price, discount) : price}
				{' '}
				₽
			</h4>
			
				<button className="btn" type="secondary" onClick={() => onClickAdd(id, name)}>В корзину </button>
			
		</div>
	</>
};
export default Card;
