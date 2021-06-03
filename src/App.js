import { React } from 'react';
import './App.css';
import ItemPane from './components/itemPane';
import PriceMatrix from './components/priceMatrix';

const App = () =>

	<div className="App">
		{ ItemPane() }
		{ PriceMatrix() }
	</div>;

export default App;
