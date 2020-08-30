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
exports.A4uSerial = A4uSerial;

var _react = _interopRequireDefault(require("react"));

var _util = require("@adobe/react-spectrum-workflow/dist/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function A4uSerial(_ref) {
  var _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'M' : _ref$scale,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'LIGHT' : _ref$color,
      props = _objectWithoutProperties(_ref, ["scale", "color"]);

  return _react["default"].createElement("svg", _extends({
    viewBox: _util.viewBoxes[scale]
  }, props, props), _react["default"].createElement("path", {
    d: "M298.666667 128h426.666666v85.333333h85.333334v128h-128v256H341.333333V341.333333H213.333333V213.333333h85.333334V128m426.666666 256h85.333334v213.333333h-85.333334V384m-256 256h85.333334v298.666667h-85.333334v-298.666667M213.333333 384h85.333334v213.333333H213.333333V384z"
  }));
}


