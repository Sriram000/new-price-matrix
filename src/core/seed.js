import config from './config';
import { rndString } from '@laufire/utils/random';

const { refreshIDLength } = config;

const seed = {
	itemInput: '',
	priceInput: '',
	refreshID: rndString(refreshIDLength),
	items: [],
};

export default seed;
