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

const setEditing = ({ data }) => ({
	editing: data,
	shop: data.shop,
	product: data.product,
	price: data.price,
});

const editItem = ({ state }) => ({
	editing: null,
	items: PriceMatrixManager.editItem(state),
});

const setShopFilter = ({ data }) => ({
	shopFilter: data,
});

const setProductFilter = ({ data }) => ({
	productFilter: data,
});

const actions = {
	setShopInput,
	setProductInput,
	setPriceInput,
	addFromInput,
	setShop,
	setProduct,
	setEditing,
	editItem,
	setShopFilter,
	setProductFilter,
};

export default actions;
