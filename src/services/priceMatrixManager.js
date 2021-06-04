import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const getItem = (
	item, value, shopName
) => ({
	id: rndString(idLength),
	name: item,
	price: Number(value),
	shop: shopName,
});

const add = (
	items, item, value, shopName
) => items.concat(getItem(
	item, value, shopName
));

const getMinPriceItem = (items) =>
	items.reduce((min, current) =>
		(min.price < current.price ? min : current), {});

const getMaxPriceItem = (items) =>
	items.reduce((min, current) =>
		(min.price > current.price ? min : current), {});

const isEmpty = (items) => items.length === 0;

const PriceMatrixManager = {
	add,
	getMinPriceItem,
	getMaxPriceItem,
	isEmpty,
};

export default PriceMatrixManager;
