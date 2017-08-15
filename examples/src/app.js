/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import GithubUsers from './components/GithubUsers';

ReactDOM.render(
	<div>
		<GithubUsers label="Github users (Async with fetch.js)" />
	</div>,
	document.getElementById('example')
);
