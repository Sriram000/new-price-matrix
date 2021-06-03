import { React, useEffect } from 'react';
import './App.css';
import AddButton from './components/addButton';
import ItemInput from './components/itemInput';
import PriceInput from './components/priceInput';
import Items from './components/items';
import context from './core/context';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>PRICE-MATRIX</div>
			<div>
				Name { ItemInput() } Price { PriceInput() }{ AddButton() }
			</div>
			<div>{ Items() }</div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
