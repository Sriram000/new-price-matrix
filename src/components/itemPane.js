import React from 'react';
import AddButton from './addButton';
import PriceInput from './priceInput';
import Items from './items';
import ItemSelect from './itemSelect';
import ShopSelect from './shopSelect';

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
			Name { ItemSelect() }
			Price { PriceInput() }
			Shop { ShopSelect() }
			{ AddButton() }
		</div>
		<div>{ Items() }</div>
	</div>;

export default ItemPane;
