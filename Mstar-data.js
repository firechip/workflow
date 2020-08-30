/**
* @firechip/workflow (c) by Firechip
* 
* @firechip/workflow is licensed under a
* Creative Commons Attribution-NoDerivatives 4.0 International License.
*
* SVG icon design (creativecommons work on Inkscape) by King Kévin <kingkevin@cuvoodoo.info>
* 
* You should have received a copy of the license along with this
* work. If not, see <http://creativecommons.org/licenses/by-nd/4.0/>.
**/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A4uMstar = A4uMstar;

var _react = _interopRequireDefault(require("react"));

var _util = require("@adobe/react-spectrum-workflow/dist/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function A4uMstar(_ref) {
  var _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'M' : _ref$scale,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'LIGHT' : _ref$color,
      props = _objectWithoutProperties(_ref, ["scale", "color"]);

  return _react["default"].createElement("svg", _extends({
    viewBox: _util.viewBoxes[scale]
  }, props, props), _react["default"].createElement("path", {
    d: "M34.9033 0.573932C34.3015 0.578648 33.5932 0.600705 33.1665 0.636644C31.6906 0.760962 30.2457 0.991349 28.9379 1.31112C28.5633 1.40273 28.2392 1.46667 28.2174 1.45319C28.1921 1.4376 28.1773 1.82885 28.1777 2.52698C28.1781 3.13086 28.1918 3.6042 28.2084 3.57901C28.2627 3.49636 29.1202 3.02481 29.9567 2.61785C31.5861 1.82505 33.2864 1.24139 35.19 0.822222C35.6083 0.730105 35.9608 0.655842 35.9745 0.655842C35.9882 0.655842 36.0001 0.637412 36.0001 0.614887C36.0001 0.582292 35.505 0.569215 34.9033 0.573932ZM15.9244 8.7432C15.9244 8.7432 15.9854 8.77007 14.9517 9.89378C13.1116 11.8942 11.4004 13.9344 10.1446 15.6249C9.8769 15.9853 9.64155 16.2855 9.62117 16.293C9.53357 8.88703 9.56209 9.2631 9.5431 16.4184L9.02988 17.1825C8.1063 18.5571 7.33107 19.9611 7.0666 20.7392C6.97569 21.0067 6.96532 21.0711 7.01029 21.1142C7.04015 21.1428 7.31458 21.2592 7.61949 21.3727C8.62008 21.7454 9.46119 22.1944 9.46119 22.1944L12.2961 25.3236C12.2961 25.3236 13.4676 26.7825 13.6476 27.1013C13.7809 27.3376 13.8308 27.3865 13.8869 27.3304C13.9073 27.31 14.0243 26.6946 14.1467 25.9635C14.5674 23.4522 14.936 21.9069 15.5699 19.9867C16.0916 18.4065 16.5442 17.2919 17.2427 15.8707C18.0025 14.3246 18.621 13.2766 19.5733 11.9185C20.0429 11.2487 20.8109 10.3212 20.8109 10.3212L20.8595 8.80591C20.8595 8.80591 20.8567 8.76038 20.8557 8.75855C20.8539 8.75748 20.842 8.75582 20.8237 8.75472C20.8231 8.75469 20.8217 8.75475 20.8211 8.75472C20.8012 8.7536 20.7713 8.75202 20.7354 8.75088C20.7333 8.75084 20.7285 8.75096 20.7264 8.75088C20.7089 8.75034 20.6509 8.7496 20.6509 8.7496L20.4026 8.74448L15.9244 8.7432L15.9244 8.7432Z"
  }), _react["default"].createElement("path", {
    d: "M3.28086e-05 27.399L0 25.8632L1.01278 25.8755C1.56981 25.8823 2.06743 25.8773 2.11861 25.8645L2.21165 25.8411V12.9206V0H6.07741H9.94318L12.5526 4.17939C13.9879 6.47806 15.1832 8.35185 15.209 8.34337C15.2348 8.33489 15.3409 8.19117 15.4447 8.024C16.559 6.23088 19.7542 1.07173 20.04 0.604088L20.4093 0H24.2932H28.1772V12.9213V25.8427L29.2523 25.8433C29.8436 25.8436 30.3506 25.8587 30.3791 25.8768C30.4195 25.9024 30.4284 26.2352 30.42 27.4017L30.4092 28.8938L24.0299 28.9042L17.6506 28.9146L17.6614 27.5732L17.6722 26.2318L19.2695 26.2113L20.8667 26.1908L20.877 17.49C20.8827 12.7045 20.8734 8.77515 20.8562 8.75802C20.8178 8.71955 9.7995 8.66053 9.65022 8.69799L9.54262 8.725V12.5715V16.4179L9.02928 17.1819C8.1057 18.5565 7.3305 19.9611 7.06603 20.7392C6.97512 21.0066 6.96556 21.0712 7.01052 21.1143C7.04039 21.1429 7.31431 21.2592 7.61922 21.3728C8.61981 21.7454 9.12271 21.9699 9.46071 22.1947C9.51341 22.2298 9.52505 22.5164 9.54262 24.2132L9.56309 26.1908L11.1399 26.2113L12.7166 26.2318L12.7274 27.5536C12.7359 28.5892 12.727 28.8797 12.6865 28.8949C12.658 28.9056 9.79193 28.9189 6.3174 28.9246L6.96792e-05 28.9348L3.28086e-05 27.399Z"
  }));
}


