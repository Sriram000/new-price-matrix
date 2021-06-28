import React from 'react';

const Item = ({ id, product, price, shop }) =>
	<tbody key={ id }>
		<tr>
			<td>{ shop }</td>
			<td>{ product }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;

export default Item;
