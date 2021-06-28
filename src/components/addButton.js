import React from 'react';
import context from '../core/context';

const AddButton = () =>
	<button
		disabled={
			context.state.productInput === '' && context.state.price === ''
		}
		onClick={ () => context.actions.addFromInput() }
	> Add
	</button>;

export default AddButton;
