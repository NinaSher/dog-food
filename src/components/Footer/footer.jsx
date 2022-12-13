import React from "react";
import './footer.css';

export default () => {
	const year = new Date().getFullYear();
	return <footer>
		<div className="footer__container">
			<div className="footer__links"><a className="logo" href="https://i.pinimg.com/originals/5f/7a/d9/5f7ad9c4b5fc7c4be267059e81c829af.jpg">FoodDog</a>
			<span className="footer__copy">&copy;{year}
		</span></div>
			<div className="footer__links">
				<a href="#">Каталог</a>
				<a href="#">Акции</a>
				<a href="#">Новости</a>
				<a href="#">Отзывы</a>
			</div>
			<div className="footer__links">
				<a href="#">Оплата и доставка</a>
				<a href="#">Часто спрашивают</a>
				<a href="#">Обратная связь</a>
				<a href="#">Кантакты</a>
			</div>
			<div className="footer__groop">
				<h3>Мы на связи</h3>
				<div class="footer__links">
					<a href="tel:8999000000">8 (999) 00-00-00</a>
					<a href="#">FoodDog@gmail.com</a>
					<div className="icon"><i className="fa-brands fa-instagram"></i> <i class="fa-brands fa-telegram"></i> <i class="fa-brands fa-viber"></i> <i class="fa-brands fa-vk"></i></div>
				</div>
			</div>
		</div>
		

	</footer>
}