import { React } from 'react';
import './App.css';
import AddButton from './components/addButton';
import ItemInput from './components/itemInput';
import PriceInput from './components/priceInput';
import Items from './components/items';
import PriceMatrix from './components/priceMatrix';

const App = () =>

	<div className="App">
		<div>PRICE-MATRIX</div>
		<div>
			Name { ItemInput() } Price { PriceInput() }{ AddButton() }
		</div>
		<div>{ Items() }</div>
		<div>{ PriceMatrix() }</div>
	</div>;

export default App;
