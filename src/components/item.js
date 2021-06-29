import React from 'react';
import context from '../core/context';

const Item = (item) => {
	const { id, product, price, shop } = item;

	return <tr key={ id } onClick={ () => context.actions.setEditing(item) }>
		<td>{ shop }</td>
		<td>{ product }</td>
		<td>{ price }</td>
	</tr>;
};

export default Item;
