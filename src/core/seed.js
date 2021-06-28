import config from './config';

const { products, shops } = config;

const seed = {
	items: [],
	product: products[0],
	shop: shops[0],
	price: '',
};

export default seed;
