import React from 'react';
import context from '../core/context';
import Item from './item';

const style = {
	border: '1px solid grey',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '10%',
};

const Items = () => {
	const noInput = context.state.items.length === 0;

	return noInput
		? null
		: <table style={ style }>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			{ context.state.items.map(Item) }
		</table>;
};

export default Items;
