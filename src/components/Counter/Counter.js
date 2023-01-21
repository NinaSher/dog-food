import React, { useState } from "react";

const Counter = () => {
	const [count, updateCnt] = useState(0);
	const countDec = (e) => {
		e.preventDefault();
		e.stopPropagation();
		updateCnt(count - 1);
	};
	const countInc = (e) => {
		e.preventDefault();
		e.stopPropagation();
		updateCnt(count + 1);
	};
	return <>
		<button onClick={countDec}>-</button>
		{count}
		<button onClick={countInc}>+</button>
	</>
}
export default Counter;