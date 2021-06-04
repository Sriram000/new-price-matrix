import React from 'react';
import MinimumAndMaximum from './MinimumAndMaximum';

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '50%',
	background: 'bisque',
};

const PriceMatrixPane = () =>
	<div style={ style }>{ MinimumAndMaximum() } </div>;

export default PriceMatrixPane;
