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
    d: "M8.78947 0H27.7368V3.78947H31.5263V9.47368H25.8421V20.8421H10.6842V9.47368H5V3.78947H8.78947V0ZM27.7368 11.3684H31.5263V20.8421H27.7368V11.3684ZM16.3684 22.7368H20.1579V36H16.3684V22.7368V22.7368ZM5 11.3684H8.78947V20.8421H5V11.3684Z"
  }));
}


