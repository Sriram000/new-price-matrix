import React from 'react';
import context from '../core/context';

const ProductInput = () =>
	<input
		value={ context.state.productInput }
		onChange={ (evt) => context.actions.setProductInput(evt.target.value) }
	/>;

export default ProductInput;
