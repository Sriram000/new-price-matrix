import React from 'react';
import config from '../core/config';
import context from '../core/context';

const Option = (item) =>
	<option
		key={ item }
		value={ item }
	>
		{ item }</option>;

const ItemSelect = () =>
	<select
		value={ context.state.item }
		onChange={ (evt) => context.actions.setItem(evt.target.value) }
	>
		{ config.items.map(Option) }
	</select>;

export default ItemSelect;
