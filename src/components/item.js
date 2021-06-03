import React from 'react';

const Item = ({ id, name, price }) =>
	<tbody key={ id }>
		<tr>
			<td>{ name }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;

export default Item;
