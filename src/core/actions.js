import PriceMatrixManager from '../services/priceMatrixManager';

const setShopInput = ({ data }) => ({
	shopInput: data,
});

const setProductInput = ({ data }) => ({
	productInput: data,
});

const setPriceInput = ({ data }) => ({
	priceInput: data,
});

const addFromInput = ({ state }) => ({
	shopInput: '',
	productInput: '',
	priceInput: '',
	items: PriceMatrixManager.add(
		state.items, state.productInput, state.priceInput, state.shopInput
	),
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
