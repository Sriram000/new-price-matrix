import PriceMatrixManager from '../services/priceMatrixManager';

const setItemInput = ({ data }) => ({
	itemInput: data,
});

const setPriceInput = ({ data }) => ({
	priceInput: data,
});

const addFromInput = ({ state }) => ({
	itemInput: '',
	priceInput: '',
	items: PriceMatrixManager.add(
		state.items, state.itemInput, state.priceInput
	),
});

const actions = {
	setItemInput,
	setPriceInput,
	addFromInput,
};

export default actions;
