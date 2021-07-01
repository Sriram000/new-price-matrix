import React from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/priceMatrixManager';
import Item from './item';

const style = {
	border: '1px solid grey',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '10%',
};

const Header = () =>
	<thead>
		<tr>
			<th>Shop</th>
			<th>Product</th>
			<th>Price</th>
		</tr>
	</thead>;

const Items = () => {
	const noInput = context.state.items.length === 0;
	const { getFilteredItems } = PriceMatrixManager;

	return noInput
		? null
		: <table style={ style }>
			{ Header() }
			<tbody>
				{ getFilteredItems(context.state).map(Item) }
			</tbody>
		</table>;
};

export default Items;
