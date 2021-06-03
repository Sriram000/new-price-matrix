import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const getItem = (item, value) => ({
	id: rndString(idLength),
	name: item,
	price: Number(value),
});

const add = (
	items, item, value
) => items.concat(getItem(item, value));

const priceMatrixManager = {
	add,
};

export default priceMatrixManager;
