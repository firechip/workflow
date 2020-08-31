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
exports.A4uBluetooth = A4uBluetooth;

var _react = _interopRequireDefault(require("react"));

var _util = require("@adobe/react-spectrum-workflow/dist/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function A4uBluetooth(_ref) {
  var _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'M' : _ref$scale,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'LIGHT' : _ref$color,
      props = _objectWithoutProperties(_ref, ["scale", "color"]);

  return _react["default"].createElement("svg", _extends({
    viewBox: _util.viewBoxes[scale]
  }, props, props), _react["default"].createElement("path", {
    d: "M19.4671 21.1539L22.4396 24.1264L19.4465 27.1196L19.4671 21.1539ZM19.4465 8.87914L22.4396 11.8723L19.4671 14.8449L19.4465 8.87786V8.87914ZM16.8352 33.4684L26.1566 24.147L20.0096 18L26.1566 11.853L16.8352 2.53157V14.8063L11.7129 9.684L9.84476 11.5521L16.2733 18.0013L9.84476 24.4504L11.7129 26.3186L16.8352 21.1963V33.471V33.4684ZM31.2789 18C31.2789 32.2637 25.8545 36 18.0001 36C10.1456 36 4.72119 32.2637 4.72119 18C4.72119 3.73629 10.1456 0 18.0001 0C25.8545 0 31.2789 3.73629 31.2789 18V18Z"
  }));
}


