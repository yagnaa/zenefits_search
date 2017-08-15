require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint react/prop-types: 0 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _componentsContributors = require('./components/Contributors');

var _componentsContributors2 = _interopRequireDefault(_componentsContributors);

_reactDom2['default'].render(_react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(_componentsContributors2['default'], { label: 'Contributors (Async)' })
), document.getElementById('example'));

},{"./components/Contributors":2,"react":undefined,"react-dom":undefined,"react-select":undefined}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var CONTRIBUTORS = require('../data/contributors');
var MAX_CONTRIBUTORS = 6;
var ASYNC_DELAY = 500;

var Contributors = (0, _createReactClass2['default'])({
	displayName: 'Contributors',
	propTypes: {
		label: _propTypes2['default'].string
	},
	getInitialState: function getInitialState() {
		return {
			multi: false,
			value: [CONTRIBUTORS[0]]
		};
	},
	onChange: function onChange(value) {
		window.open('http://www.google.com', '_blank');
		this.setState({
			value: value
		});
	},
	switchToMulti: function switchToMulti() {
		this.setState({
			multi: true,
			value: [this.state.value]
		});
	},
	switchToSingle: function switchToSingle() {
		this.setState({
			multi: false,
			value: this.state.value[0]
		});
	},

	getContributors: function getContributors(input, callback) {
		console.log(input);
		input = input.toLowerCase();
		if (input.length > 3) {
			setTimeout(function () {

				var that = this;
				var url = 'http://localhost:8888/suggest?prefix=' + input;
				var request = new Request(url, {
					method: 'GET',
					mode: 'cors',
					redirect: 'follow',
					headers: new Headers({
						'Access-Control-Allow-Origin': '*'
					}) });

				fetch(url).then(function (response) {
					return response.json();
				}).then(function (data2) {
					var data3 = {
						options: data2.entities,
						complete: false
					};
					console.log(data3);
					// 	console.log(data);
					callback(null, data3);
					//that.setState({ person: data.person });
				});
			}, ASYNC_DELAY);
		}
	},

	gotoContributor: function gotoContributor(value, event) {
		window.open('https://github.com/' + value.github);
	},

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'].Async, { multi: false, value: this.state.value, onValueClick: this.gotoContributor, onChange: this.onChange, valueKey: 'github', labelKey: 'name', loadOptions: this.getContributors }),
			_react2['default'].createElement(
				'div',
				{ className: 'hint' },
				'This example implements custom label and value properties, async options and opens the github profiles in a new window when values are clicked'
			)
		);
	}
});

module.exports = Contributors;

},{"../data/contributors":3,"create-react-class":undefined,"prop-types":undefined,"react":undefined,"react-select":undefined}],3:[function(require,module,exports){
'use strict';

module.exports = [{ github: 'jedwatson', name: 'Jed Watson' }, { github: 'bruderstein', name: 'Dave Brotherstone' }, { github: 'jossmac', name: 'Joss Mackison' }, { github: 'jniechcial', name: 'Jakub Niechciał' }, { github: 'craigdallimore', name: 'Craig Dallimore' }, { github: 'julen', name: 'Julen Ruiz Aizpuru' }, { github: 'dcousens', name: 'Daniel Cousens' }, { github: 'jgautsch', name: 'Jon Gautsch' }, { github: 'dmitry-smirnov', name: 'Dmitry Smirnov' }];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS95YWduYXNyaS96ZW5lZml0cy93ZWJwYWdlL2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvaG9tZS95YWduYXNyaS96ZW5lZml0cy93ZWJwYWdlL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0NvbnRyaWJ1dG9ycy5qcyIsIi9ob21lL3lhZ25hc3JpL3plbmVmaXRzL3dlYnBhZ2UvZXhhbXBsZXMvc3JjL2RhdGEvY29udHJpYnV0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FCQ0VrQixPQUFPOzs7O3dCQUNKLFdBQVc7Ozs7MkJBQ2IsY0FBYzs7OztzQ0FFUiwyQkFBMkI7Ozs7QUFFcEQsc0JBQVMsTUFBTSxDQUNkOzs7Q0FDQyx3RUFBYyxLQUFLLEVBQUMsc0JBQXNCLEdBQUc7Q0FDeEMsRUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7O3FCQ2JnQixPQUFPOzs7O2dDQUNELG9CQUFvQjs7Ozt5QkFDdEIsWUFBWTs7OzsyQkFDZixjQUFjOzs7O0FBRWpDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JELElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQzs7QUFFeEIsSUFBTSxZQUFZLEdBQUcsbUNBQVk7QUFDaEMsWUFBVyxFQUFFLGNBQWM7QUFDM0IsVUFBUyxFQUFFO0FBQ1YsT0FBSyxFQUFFLHVCQUFVLE1BQU07RUFDdkI7QUFDRCxnQkFBZSxFQUFDLDJCQUFHO0FBQ2xCLFNBQU87QUFDTixRQUFLLEVBQUUsS0FBSztBQUNaLFFBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN4QixDQUFDO0VBQ0Y7QUFDRCxTQUFRLEVBQUMsa0JBQUMsS0FBSyxFQUFFO0FBQ2hCLFFBQU0sQ0FBQyxJ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TSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzNDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsRUFDcEQsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsRUFDNUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxFQUNqRCxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFDckQsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxFQUMvQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQzlDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzNDLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUNwRCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcblxuaW1wb3J0IENvbnRyaWJ1dG9ycyBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJpYnV0b3JzJztcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8ZGl2PlxuXHRcdDxDb250cmlidXRvcnMgbGFiZWw9XCJDb250cmlidXRvcnMgKEFzeW5jKVwiIC8+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmNvbnN0IENPTlRSSUJVVE9SUyA9IHJlcXVpcmUoJy4uL2RhdGEvY29udHJpYnV0b3JzJyk7XG5jb25zdCBNQVhfQ09OVFJJQlVUT1JTID0gNjtcbmNvbnN0IEFTWU5DX0RFTEFZID0gNTAwO1xuXG5jb25zdCBDb250cmlidXRvcnMgPSBjcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnQ29udHJpYnV0b3JzJyxcblx0cHJvcFR5cGVzOiB7XG5cdFx0bGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG11bHRpOiBmYWxzZSxcblx0XHRcdHZhbHVlOiBbQ09OVFJJQlVUT1JTWzBdXSxcblx0XHR9O1xuXHR9LFxuXHRvbkNoYW5nZSAodmFsdWUpIHtcblx0XHR3aW5kb3cub3BlbignaHR0cDovL3d3dy5nb29nbGUuY29tJywgJ19ibGFuaycpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH0pO1xuXHR9LFxuXHRzd2l0Y2hUb011bHRpICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdFx0dmFsdWU6IFt0aGlzLnN0YXRlLnZhbHVlXSxcblx0XHR9KTtcblx0fSxcblx0c3dpdGNoVG9TaW5nbGUgKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bXVsdGk6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbMF0sXG5cdFx0fSk7XG5cdH0sXG5cblx0Z2V0Q29udHJpYnV0b3JzIChpbnB1dCwgY2FsbGJhY2spIHtcblx0XHRjb25zb2xlLmxvZyhpbnB1dCk7XG5cdFx0aW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmKGlucHV0Lmxlbmd0aCA+Mylcblx0XHR7XG5cdFx0ICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4ODg4L3N1Z2dlc3Q/cHJlZml4PScgKyBpbnB1dDtcblx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdG1vZGU6ICdjb3JzJywgXG5cdFx0XHRcdHJlZGlyZWN0OiAnZm9sbG93Jyxcblx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xuXHRcdFx0XHRcdCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcblx0XHRcdFx0fSl9KTtcblxuXHRcdFx0ICBmZXRjaCh1cmwpXG5cdFx0XHQgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHQgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdCAgfSlcblx0XHRcdCAgLnRoZW4oZnVuY3Rpb24oZGF0YTIpIHtcblx0XHRcdCAgXHR2YXIgZGF0YTMgPSB7XG5cdFx0XHRcdG9wdGlvbnM6IGRhdGEyLmVudGl0aWVzLFxuXHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHQgICAgfTtcblx0XHRcdCAgXHRjb25zb2xlLmxvZyhkYXRhMyk7XG5cdFx0XHQgLy8gXHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdCAgXHRjYWxsYmFjayhudWxsLCBkYXRhMyk7XG5cdFx0XHQgICAgLy90aGF0LnNldFN0YXRlKHsgcGVyc29uOiBkYXRhLnBlcnNvbiB9KTtcblx0XHRcdCAgfSlcblxuXG5cdFx0XHR9LCBBU1lOQ19ERUxBWSk7XG5cdFx0fVxuXHR9LFxuXG5cdGdvdG9Db250cmlidXRvciAodmFsdWUsIGV2ZW50KSB7XG5cdFx0d2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdmFsdWUuZ2l0aHViKTtcblx0fSxcblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPnt0aGlzLnByb3BzLmxhYmVsfTwvaDM+XG5cdFx0XHRcdDxTZWxlY3QuQXN5bmMgbXVsdGk9e2ZhbHNlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25WYWx1ZUNsaWNrPXt0aGlzLmdvdG9Db250cmlidXRvcn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlS2V5PVwiZ2l0aHViXCIgbGFiZWxLZXk9XCJuYW1lXCIgbG9hZE9wdGlvbnM9e3RoaXMuZ2V0Q29udHJpYnV0b3JzfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpbnRcIj5UaGlzIGV4YW1wbGUgaW1wbGVtZW50cyBjdXN0b20gbGFiZWwgYW5kIHZhbHVlIHByb3BlcnRpZXMsIGFzeW5jIG9wdGlvbnMgYW5kIG9wZW5zIHRoZSBnaXRodWIgcHJvZmlsZXMgaW4gYSBuZXcgd2luZG93IHdoZW4gdmFsdWVzIGFyZSBjbGlja2VkPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250cmlidXRvcnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0eyBnaXRodWI6ICdqZWR3YXRzb24nLCBuYW1lOiAnSmVkIFdhdHNvbicgfSxcblx0eyBnaXRodWI6ICdicnVkZXJzdGVpbicsIG5hbWU6ICdEYXZlIEJyb3RoZXJzdG9uZScgfSxcblx0eyBnaXRodWI6ICdqb3NzbWFjJywgbmFtZTogJ0pvc3MgTWFja2lzb24nIH0sXG5cdHsgZ2l0aHViOiAnam5pZWNoY2lhbCcsIG5hbWU6ICdKYWt1YiBOaWVjaGNpYcWCJyB9LFxuXHR7IGdpdGh1YjogJ2NyYWlnZGFsbGltb3JlJywgbmFtZTogJ0NyYWlnIERhbGxpbW9yZScgfSxcblx0eyBnaXRodWI6ICdqdWxlbicsIG5hbWU6ICdKdWxlbiBSdWl6IEFpenB1cnUnIH0sXG5cdHsgZ2l0aHViOiAnZGNvdXNlbnMnLCBuYW1lOiAnRGFuaWVsIENvdXNlbnMnIH0sXG5cdHsgZ2l0aHViOiAnamdhdXRzY2gnLCBuYW1lOiAnSm9uIEdhdXRzY2gnIH0sXG5cdHsgZ2l0aHViOiAnZG1pdHJ5LXNtaXJub3YnLCBuYW1lOiAnRG1pdHJ5IFNtaXJub3YnIH0sXG5dO1xuIl19
