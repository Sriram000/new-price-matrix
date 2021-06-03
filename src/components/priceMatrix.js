import React from 'react';
import context from '../core/context';
import priceMatrixManager from '../services/priceMatrixManager';

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '50%',
	background: 'bisque',
};

const PriceMatrix = () => {
	const { items } = context.state;
	const hasItems = priceMatrixManager.isEmpty(items);
	const maximumPriceItem = priceMatrixManager.getMaxPriceItem(items);
	const minimumPriceItem = priceMatrixManager.getMinPriceItem(items);

	return hasItems
		? null
		: <div style={ style }>
			Maximum { maximumPriceItem.name } { maximumPriceItem.price }
			Minimum { minimumPriceItem.name } { minimumPriceItem.price }
		</div>;
};

export default PriceMatrix;
