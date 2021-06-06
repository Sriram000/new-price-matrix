import React from 'react';

const Item = ({ id, product, price, shop }) =>
	<tbody key={ id }>
		<tr>
			<td>{ product }</td>
			<td>{ price }</td>
			<td>{ shop }</td>
		</tr>
	</tbody>;

export default Item;
