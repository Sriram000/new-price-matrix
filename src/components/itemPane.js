import React from 'react';
import AddButton from './addButton';
import PriceInput from './priceInput';
import Items from './items';
import ProductSelect from './productSelect';
import ShopSelect from './shopSelect';
import EditButton from './editButton';

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
			{ AddButton() }
			{ EditButton() }
		</div>
		<div>{ Items() }</div>
	</div>;

export default ItemPane;
