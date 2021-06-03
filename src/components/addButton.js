import React from 'react';
import context from '../core/context';

const AddButton = () =>
	<button
		disabled={
			context.state.itemInput === '' && context.state.priceInput === ''
		}
		onClick={ () => context.actions.addFromInput() }
	> Add
	</button>;

export default AddButton;
