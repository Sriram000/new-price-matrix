import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const getItem = (
	product, price, shop
) => ({
	id: rndString(idLength),
	product: product,
	price: Number(price),
	shop: shop,
});

const add = ({ items, product, price, shop }) => items.concat(getItem(
	product, price, shop
));

const getMinPriceItem = (items) =>
	items.reduce((min, current) =>
		(min.price < current.price ? min : current), {});

const getMaxPriceItem = (items) =>
	items.reduce((min, current) =>
		(min.price > current.price ? min : current), {});

const isEmpty = (items) => items.length === 0;

const getPriceMatrix = (items) => [...new Set(items.map((item) =>
	item.product))].map((product) => {
	const productItems = items.filter((item) => item.product === product);

	return {
		product: product,
		min: getMinPriceItem(productItems),
		max: getMaxPriceItem(productItems),
	};
});

const PriceMatrixManager = {
	add,
	getMinPriceItem,
	getMaxPriceItem,
	isEmpty,
	getPriceMatrix,
};

export default PriceMatrixManager;
