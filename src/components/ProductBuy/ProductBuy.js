//кнопка покупки продукта
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./productBuy.css";
import { Button } from "../Button/Button";
// import { setItemInCart } from "../../store/cartSlice/cartSlice";



export const ProductBuy = ({ data }) => {
	// const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.itemsInCart);
	const isItemInCart = items.some((item) => item.id === product.id);


	// const handleClick = (e) => {
	// 	e.stopPropagation();
	// 	dispatch(setItemInCart(data));
	// };

	return (<>
		<div className="product-buy">
			<Button
				type={isItemInCart ? "secondary" : "primary"}
				onClick={() => handleClick}
			>
				{isItemInCart ? "Убрать из корзины" : "В Корзину"}
			</Button>
		</div>
	</>
	)
}


export default ProductBuy;

//<span className="product-buy__prise">{el.price} руб.</span>

/*e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteItemFromCart(product.id));
		} else {
			dispatch(setItemInCart(product));
		}
		
		
		
		*/