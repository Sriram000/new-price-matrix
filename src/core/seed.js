import config from './config';
import { keys } from '@laufire/utils/collection';

const { products, shops } = config;

const seed = {
	items: [],
	product: products[0],
	shop: shops[0],
	price: '',
	editing: null,
	shopFilter: keys(config.items.filters)[0],
	productFilter: keys(config.items.filters)[0],
};

export default seed;
