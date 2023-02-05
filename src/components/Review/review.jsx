import React, {useEffect, useContext} from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import Context from "../../Context";
//import "./review.css";

export default ({ author, rating, created_at, text}) => {
	const {api, user, PATH, setGoods} = useContext(Context);
	const setRating = (n) => {
		let stars = [];
		for (let i = 0; i < n; i++) {
			stars.push(<StarFill key={i} />);
		}
		for (let i = stars.length; i < 5; i++) {
			stars.push(<Star key={i} />);
		}
		return stars;
	}



	return <>
		<h3>{author || ""}</h3>
		<div>{setRating(rating)}</div>
		<p className="review__text">{text ? text : ""}</p>
		<div>{new Date(created_at).toLocaleString()}</div>

		{author===user._id && <button className="btn-del-review" onClick={deleteReview}>Удалить отзыв</button>}
	</>
}
