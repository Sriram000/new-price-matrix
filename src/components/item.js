import React from 'react';

const Item = ({ id, name, price, shop }) =>
	<tbody key={ id }>
		<tr>
			<td>{ name }</td>
			<td>{ price }</td>
			<td>{ shop }</td>
		</tr>
	</tbody>;

export default Item;
