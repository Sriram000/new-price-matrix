import React from 'react';
import config from '../core/config';
import context from '../core/context';

const Option = (product) =>
	<option
		key={ product }
		value={ product }
	>
		{ product }</option>;

const ProductSelect = () =>
	<select
		value={ context.state.product }
		onChange={ (evt) => context.actions.setProduct(evt.target.value) }
	>
		{ config.products.map(Option) }
	</select>;

export default ProductSelect;
