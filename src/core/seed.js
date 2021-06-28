import config from './config';

const { products, shops } = config;

const seed = {
	shopInput: '',
	productInput: '',
	priceInput: '',
	items: [],
	product: products[0],
	shop: shops[0],
};

export default seed;
