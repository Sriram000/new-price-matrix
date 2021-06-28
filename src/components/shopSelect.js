import React from 'react';
import config from '../core/config';
import context from '../core/context';

const Option = (shop) =>
	<option
		key={ shop }
		value={ shop }
	>
		{ shop }</option>;

const ShopSelect = () =>
	<select
		value={ context.state.shop }
		onChange={ (evt) => context.actions.setShop(evt.target.value) }
	>
		{ config.shops.map(Option) }
	</select>;

export default ShopSelect;
