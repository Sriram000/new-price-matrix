import { keys } from '@laufire/utils/collection';
import React from 'react';
import config from '../core/config';
import context from '../core/context';

const filterKeys = keys(config.items.filters).concat(config.shops);

const Option = (filterKey) => <option key={ filterKey } value={ filterKey }>
	{ filterKey }
</option>;

const ShopFilterSelect = () => {
	const { shopFilter } = context.state;

	return <select
		value={ shopFilter }
		onChange={ (evt) =>
			context.actions.setShopFilter(evt.target.value) }
	// eslint-disable-next-line react/jsx-closing-bracket-location
	>
		{ filterKeys.map(Option) }
	</select>;
};

export default ShopFilterSelect;
