import React from 'react';
import context from '../core/context';
import PriceMatrixList from './priceMatrixList';
import PriceMatrixManager from '../services/priceMatrixManager';

const style = {
	color: 'green',
};

const PriceMatrix = () => {
	const { items } = context.state;
	const priceMatrix = PriceMatrixManager.getPriceMatrix(items);

	return <tbody>
		<tr style={ style }>
			<th>Product</th>
			<th>Shop</th>
			<th>Price</th>
			<th>Shop</th>
			<th>Price</th>
		</tr>
		{ priceMatrix.map(PriceMatrixList) }
	</tbody>;
};

export default PriceMatrix;
