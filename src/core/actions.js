import PriceMatrixManager from '../services/priceMatrixManager';

const setItemInput = ({ data }) => ({
	itemInput: data,
});

const setPriceInput = ({ data }) => ({
	priceInput: data,
});

const setShopInput = ({ data }) => ({
	shopInput: data,
});

const addFromInput = ({ state }) => ({
	itemInput: '',
	priceInput: '',
	shopInput: '',
	items: PriceMatrixManager.add(
		state.items, state.itemInput, state.priceInput, state.shopInput
	),
});

const actions = {
	setItemInput,
	setPriceInput,
	setShopInput,
	addFromInput,
};

export default actions;
