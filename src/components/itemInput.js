import React from 'react';
import context from '../core/context';

const ItemInput = () =>
	<input
		value={ context.state.itemInput }
		onChange={ (evt) => context.actions.setItemInput(evt.target.value) }
	/>;

export default ItemInput;
