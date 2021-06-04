import React from 'react';
import context from '../core/context';
import priceMatrixManager from '../services/priceMatrixManager';

const style = {
	color: 'red',
};

const PriceMatrix = () => {
	const { items } = context.state;
	const maximumPriceItem = priceMatrixManager.getMaxPriceItem(items);
	const minimumPriceItem = priceMatrixManager.getMinPriceItem(items);

	return <tbody>
		<tr style={ style }>
			<th>Name</th>
			<th>Price</th>
			<th>Name</th>
			<th>Price</th>
		</tr>
		<tr>
			<td>{ maximumPriceItem.name }</td>
			<td>{ maximumPriceItem.price }</td>
			<td>{ minimumPriceItem.name }</td>
			<td>{ minimumPriceItem.price }</td>
		</tr>
	</tbody>;
};

export default PriceMatrix;
