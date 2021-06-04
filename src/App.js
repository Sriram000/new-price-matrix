import { React } from 'react';
import './App.css';
import ItemPane from './components/itemPane';
import PriceMatrixPane from './components/priceMatrixPane';

const App = () =>

	<div className="App">
		{ ItemPane() }
		{ PriceMatrixPane() }
	</div>;

export default App;
