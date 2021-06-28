import React from 'react';
import context from '../core/context';

const PriceInput = () =>
	<input
		value={ context.state.price }
		onChange={ (evt) => context.actions.setPriceInput(evt.target.value) }
	/>;

export default PriceInput;
