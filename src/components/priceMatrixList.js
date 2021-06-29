import React from 'react';

const PriceMatrixList = (priceMatrix) => {
	const { product, min, max } = priceMatrix;

	return 	<tr key={ product }>
		<td>{ product }</td>
		<td>{ max.shop }</td>
		<td>{ max.price }</td>
		<td>{ min.shop }</td>
		<td>{ min.price }</td>
	</tr>;
};

export default PriceMatrixList;
