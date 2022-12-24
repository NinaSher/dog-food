//import React from "react";
//import {useParams, Link} from "react-router-dom";


import { useQuery } from "@tanstack/react-query";
export const  PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY';
function getProducts(values) {
	const { data } = useQuery(
	{ queryKey: PRODUCTS_QUERY_KEY, queryFn: getProducts(values.getProducts) },
	)
	return data
}

export default ({}) => {
	const {id} = useParams()
	return <>
		<h1>Страница товара</h1>
		<p>{id}</p>
		<Link to="/catelog">Назад</Link>
	</>
}