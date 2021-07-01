import { keys } from '@laufire/utils/collection';
import React from 'react';
import config from '../core/config';
import context from '../core/context';

const filterKeys = keys(config.items.filters).concat(config.products);

const Option = (filterKey) => <option key={ filterKey } value={ filterKey }>
	{ filterKey }
</option>;

const ProductFilterSelect = () => {
	const { productFilter } = context.state;

	return <select
		value={ productFilter }
		onChange={ (evt) =>
			context.actions.setProductFilter(evt.target.value) }
	// eslint-disable-next-line react/jsx-closing-bracket-location
	>
		{ filterKeys.map(Option) }
	</select>;
};

export default ProductFilterSelect;
