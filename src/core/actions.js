import PriceMatrixManager from '../services/priceMatrixManager';

const setShopInput = ({ data }) => ({
	shopInput: data,
});

const setProductInput = ({ data }) => ({
	productInput: data,
});

const setPriceInput = ({ data }) => ({
	price: data,
});

const addFromInput = ({ state }) => ({
	price: '',
	items: PriceMatrixManager.add(state),
});

const setShop = ({ data }) => ({
	shop: data,
});

const setProduct = ({ data }) => ({
	product: data,
});

const actions = {
	setShopInput,
	setProductInput,
	setPriceInput,
	addFromInput,
	setShop,
	setProduct,
};

export default actions;
