import React from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/priceMatrixManager';
import PriceMatrix from './priceMatrix';

const style = {
	border: '1px solid grey',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '10%',
};

const MinimumAndMaximum = () => {
	const { items } = context.state;
	const hasItems = PriceMatrixManager.isEmpty(items);

	return hasItems
		? null
		: <table style={ style }>
			<thead>
				<tr>
					<th colSpan="2">Maximum</th>
					<th colSpan="2">Minimum</th>
				</tr>
			</thead>
			{ PriceMatrix() }
		</table>;
};

export default MinimumAndMaximum;
