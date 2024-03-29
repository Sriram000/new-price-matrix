import React from 'react';
import PriceInput from './priceInput';
import Items from './items';
import ProductSelect from './productSelect';
import ShopSelect from './shopSelect';
import ActionButton from './actionButton';
import ShopFilterSelect from './shopFilterSelect';
import ProductFilterSelect from './productFilterSelect';

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
			Shop { ShopSelect() }
			Product { ProductSelect() }
			Price { PriceInput() }
			{ ActionButton() }
			{ ShopFilterSelect() }
			{ ProductFilterSelect() }
		</div>
		<div>{ Items() }</div>
	</div>;

export default ItemPane;
