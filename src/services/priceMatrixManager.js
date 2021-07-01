import { rndString } from '@laufire/utils/random';
import { contains } from '@laufire/utils/collection';
import config from '../core/config';

const { idLength } = config;
const { filters } = config.items;

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

const editItem = ({
	items, editing, shop, product, price,
}) =>
	items.map((item) => (item.id !== editing.id
		? item
		: {
			...item,
			shop,
			product,
			price,
		}
	));

const getFilteredItems = ({ items, shopFilter, productFilter }) =>
	items.filter((item) => contains(item, {
		...filters[shopFilter] || { shop: shopFilter },
		...filters[productFilter] || { product: productFilter },
	}));

const PriceMatrixManager = {
	add,
	getMinPriceItem,
	getMaxPriceItem,
	isEmpty,
	getPriceMatrix,
	editItem,
	getFilteredItems,
};

export default PriceMatrixManager;
