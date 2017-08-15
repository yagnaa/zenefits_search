import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CONTRIBUTORS = require('../data/contributors');
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 500;

const Contributors = createClass({
	displayName: 'Contributors',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			multi: false,
			value: [CONTRIBUTORS[0]],
		};
	},
	onChange (value) {
		window.open('http://www.google.com', '_blank');
		this.setState({
			value: value,
		});
	},
	switchToMulti () {
		this.setState({
			multi: true,
			value: [this.state.value],
		});
	},
	switchToSingle () {
		this.setState({
			multi: false,
			value: this.state.value[0],
		});
	},

	getContributors (input, callback) {
		console.log(input);
		input = input.toLowerCase();
		if(input.length >3)
		{
		    setTimeout(function() {

			var that = this;
			var url = 'http://localhost:8888/suggest?prefix=' + input;
			var request = new Request(url, {
				method: 'GET',
				mode: 'cors', 
				redirect: 'follow',
				headers: new Headers({
					'Access-Control-Allow-Origin': '*'
				})});

			  fetch(url)
			  .then(function(response) {
			    return response.json();
			  })
			  .then(function(data2) {
			  	var data3 = {
				options: data2.entities,
				complete: false,
			    };
			  	console.log(data3);
			 // 	console.log(data);
			  	callback(null, data3);
			    //that.setState({ person: data.person });
			  })


			}, ASYNC_DELAY);
		}
	},

	gotoContributor (value, event) {
		window.open('https://github.com/' + value.github);
	},

	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select.Async multi={false} value={this.state.value} onValueClick={this.gotoContributor} onChange={this.onChange} valueKey="github" labelKey="name" loadOptions={this.getContributors} />
				<div className="hint">This example implements custom label and value properties, async options and opens the github profiles in a new window when values are clicked</div>
			</div>
		);
	}
});

module.exports = Contributors;
