import React from 'react';
import context from '../core/context';

const shopInput = () =>
	<input
		value={ context.state.shopInput }
		onChange={ (evt) => context.actions.setShopInput(evt.target.value) }
	/>;

export default shopInput;
