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
    d: "M17.4516 0.286966C17.1508 0.289324 16.7966 0.300353 16.5833 0.318322C15.8453 0.380481 15.1228 0.495675 14.469 0.655562C14.2816 0.701365 14.1196 0.733337 14.1087 0.726593C14.0961 0.718798 14.0886 0.914426 14.0888 1.26349C14.089 1.56543 14.0959 1.8021 14.1042 1.78951C14.1314 1.74818 14.5601 1.51241 14.9783 1.30892C15.7931 0.912525 16.6432 0.620695 17.595 0.411111C17.8041 0.365053 17.9804 0.327921 17.9873 0.327921C17.9941 0.327921 18.0001 0.318706 18.0001 0.307443C18.0001 0.291146 17.7525 0.284608 17.4516 0.286966ZM7.96221 4.3716C7.96221 4.3716 7.99269 4.38503 7.47587 4.94689C6.5558 5.94712 5.70022 6.9672 5.07231 7.81247C4.93845 7.99267 4.82077 8.14277 4.81059 8.14651C4.76678 4.44351 4.78105 4.63155 4.77155 8.20922L4.51494 8.59125C4.05315 9.27855 3.66553 9.98057 3.5333 10.3696C3.48785 10.5033 3.48266 10.5356 3.50514 10.5571C3.52008 10.5714 3.65729 10.6296 3.80975 10.6864C4.31004 10.8727 4.7306 11.0972 4.7306 11.0972L6.14803 12.6618C6.14803 12.6618 6.73381 13.3912 6.82378 13.5507C6.89046 13.6688 6.91542 13.6932 6.94345 13.6652C6.95367 13.655 7.01213 13.3473 7.07336 12.9818C7.28368 11.7261 7.46798 10.9534 7.78495 9.99333C8.04578 9.20325 8.2721 8.64594 8.62133 7.93533C9.00125 7.16229 9.31049 6.63828 9.78663 5.95925C10.0215 5.62435 10.4054 5.16062 10.4054 5.16062L10.4298 4.40295C10.4298 4.40295 10.4284 4.38019 10.4278 4.37928C10.4269 4.37874 10.421 4.37791 10.4118 4.37736C10.4115 4.37734 10.4109 4.37737 10.4106 4.37736C10.4006 4.3768 10.3856 4.37601 10.3677 4.37544C10.3666 4.37542 10.3643 4.37548 10.3632 4.37544C10.3545 4.37517 10.3255 4.3748 10.3255 4.3748L10.2013 4.37224L7.96222 4.3716L7.96221 4.3716Z"
  }), _react["default"].createElement("path", {
    d: "M1.64043e-05 13.6995L0 12.9316L0.506391 12.9377C0.784907 12.9411 1.03372 12.9387 1.0593 12.9322L1.10582 12.9206V6.46028V0H3.03871H4.97159L6.27632 2.0897C6.99393 3.23903 7.5916 4.17593 7.60449 4.17169C7.61738 4.16745 7.67043 4.09559 7.72237 4.012C8.27951 3.11544 9.8771 0.535863 10.02 0.302044L10.2047 0H12.1466H14.0886V6.46067V12.9213L14.6261 12.9217C14.9218 12.9218 15.1753 12.9294 15.1895 12.9384C15.2097 12.9512 15.2142 13.1176 15.21 13.7009L15.2046 14.4469L12.015 14.4521L8.8253 14.4573L8.8307 13.7866L8.8361 13.1159L9.63473 13.1056L10.4334 13.0954L10.4385 8.74499C10.4414 6.35226 10.4367 4.38757 10.4281 4.37901C10.4089 4.35978 4.89975 4.33026 4.82511 4.349L4.77131 4.3625V6.28573V8.20896L4.51464 8.59097C4.05285 9.27826 3.66525 9.98057 3.53301 10.3696C3.48756 10.5033 3.48278 10.5356 3.50526 10.5571C3.5202 10.5714 3.65715 10.6296 3.80961 10.6864C4.30991 10.8727 4.56135 10.9849 4.73035 11.0974C4.75671 11.1149 4.76252 11.2582 4.77131 12.1066L4.78155 13.0954L5.56993 13.1056L6.35832 13.1159L6.36372 13.7768C6.36795 14.2946 6.36352 14.4398 6.34324 14.4475C6.32901 14.4528 4.89596 14.4595 3.1587 14.4623L3.48396e-05 14.4674L1.64043e-05 13.6995Z"
  }));
}


