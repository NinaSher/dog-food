import { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const CartContext = createContext();

const initState = {
	items: [],
	showItems: false,
	showAlert: null
}

const CartContextProvider = (props) => {
	const [value, dispatch] = useReducer(CartReducer, initState);

	value.append = (item, quantity = 1) => { // добавить товар в корзину
		dispatch({ type: 'APPEND_ITEM', payload: { item: item, quantity: quantity } });
	}

	value.remove = (id) => { // удалить товар из корзины
		dispatch({ type: 'REMOVE_ITEM', payload: { id: id } });
	}

	value.toggleShow = () => { // показать/скрыть корзину
		dispatch({ type: 'TOGGLE_SHOW' });
	}

	value.hideAlert = () => { // скрыть сообщение о добавлении в корзину
		dispatch({ type: 'HIDE_ALERT' });
	}

	return (
		<CartContext.Provider value={value}>
			{props.children}
		</CartContext.Provider>
	);
}

export { CartContext, CartContextProvider }; Копировать
export default function CartReducer(state, { type, payload }) {
	switch (type) {
		case 'APPEND_ITEM': // добавить товар в корзину
			let newCart = null;
			// нужно проверить, нет ли уже такого товара в корзине
			const itemIndex = state.items.findIndex(value => value.id === payload.item.id);
			if (itemIndex < 0) { // такого товара еще нет
				const newItem = {
					...payload.item,
					quantity: payload.quantity
				};
				newCart = [...state.items, newItem];
			} else { // такой товар уже есть
				const newItem = {
					...state.items[itemIndex],
					quantity: state.items[itemIndex].quantity + payload.quantity
				};
				newCart = [...state.items]; // копия массива state.items
				newCart.splice(itemIndex, 1, newItem);
			}
			return {
				...state,
				items: newCart,
				showAlert: payload.item.name + ' добавлен в корзину'
			}
		case 'REMOVE_ITEM': // удалить товар из корзины
			return {
				...state,
				items: state.items.filter(item => item.id !== payload.id)
			};
		case 'TOGGLE_SHOW': // показать/скрыть корзину
			return {
				...state,
				showItems: !state.showItems
			};
		case 'HIDE_ALERT': // скрыть сообщение о добавлении в корзину
			return {
				...state,
				showAlert: null
			};
		default:
			return state;
	}
}