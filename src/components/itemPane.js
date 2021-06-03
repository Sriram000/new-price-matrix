import React from 'react';
import AddButton from './addButton';
import ItemInput from './itemInput';
import PriceInput from './priceInput';
import Items from './items';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	minHeight: '100%',
	width: '50%',
	background: 'beige',
};

const ItemPane = () =>

	<div style={ style }>
		<div>
			Name { ItemInput() } Price { PriceInput() }{ AddButton() }
		</div>
		<div>{ Items() }</div>
	</div>;

export default ItemPane;
