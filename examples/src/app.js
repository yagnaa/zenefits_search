/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import Contributors from './components/Contributors';

ReactDOM.render(
	<div>
		<Contributors label="Contributors (Async)" />
	</div>,
	document.getElementById('example')
);
