import React from 'react';
import context from '../core/context';

const Item = (item) => {
	const { id, product, price, shop } = item;

	return <tbody key={ id }>
		<tr onClick={ () => context.actions.setEditing(item) }>
			<td>{ shop }</td>
			<td>{ product }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;
};

export default Item;
