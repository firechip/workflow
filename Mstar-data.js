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
    d: "M852.23 14.0149C837.537 14.13 820.242 14.6686 809.824 15.5461C773.786 18.5816 738.506 24.2069 706.574 32.0149C697.426 34.2516 689.513 35.8129 688.98 35.4836C688.364 35.1029 688.001 44.6562 688.011 61.7024C688.021 76.4473 688.357 88.0049 688.761 87.3899C690.087 85.3717 711.025 73.8579 731.449 63.9211C771.235 44.5634 812.752 30.3122 859.23 20.0774C869.444 17.8281 878.052 16.0149 878.386 16.0149C878.72 16.0149 879.011 15.5649 879.011 15.0149C879.011 14.219 866.923 13.8997 852.23 14.0149ZM388.824 213.484C388.824 213.484 390.312 214.14 365.074 241.577C320.143 290.423 278.362 340.237 247.699 381.515C241.162 390.315 235.415 397.645 234.917 397.827C232.778 216.996 233.475 226.178 233.011 400.89L220.48 419.546C197.929 453.11 179 487.392 172.542 506.39C170.323 512.92 170.07 514.495 171.167 515.546C171.897 516.245 178.597 519.086 186.042 521.859C210.474 530.957 231.011 541.921 231.011 541.921L300.23 618.327C300.23 618.327 328.836 653.948 333.23 661.734C336.486 667.503 337.705 668.696 339.074 667.327C339.573 666.828 342.427 651.803 345.417 633.952C355.689 572.633 364.688 534.901 380.167 488.015C392.905 449.432 403.957 422.217 421.011 387.515C439.564 349.764 454.665 324.175 477.917 291.015C489.385 274.66 508.136 252.015 508.136 252.015L509.324 215.015C509.324 215.015 509.256 213.903 509.23 213.859C509.187 213.832 508.897 213.792 508.448 213.765C508.434 213.764 508.4 213.766 508.386 213.765C507.9 213.738 507.169 213.699 506.293 213.671C506.242 213.67 506.126 213.673 506.074 213.671C505.646 213.658 504.23 213.64 504.23 213.64L498.168 213.515L388.824 213.484L388.824 213.484Z"
  }), _react["default"].createElement("path", {
    d: "M0.000801086 669L0 631.5L24.7291 631.801C38.3301 631.967 50.4805 631.846 51.73 631.532L54.0018 630.962V315.481V0H148.392H242.782L306.498 102.048C341.541 158.175 370.728 203.927 371.357 203.72C371.987 203.513 374.577 200.004 377.114 195.922C404.321 152.139 482.338 26.1683 489.317 14.75L498.333 0H593.168H688.002V315.5V631L714.252 631.015C728.689 631.023 741.07 631.391 741.765 631.832C742.752 632.459 742.97 640.585 742.765 669.067L742.502 705.5L586.738 705.753L430.974 706.006L431.238 673.253L431.502 640.5L470.502 640L509.502 639.5L509.754 427.052C509.893 310.206 509.664 214.263 509.246 213.844C508.307 212.905 239.274 211.464 235.629 212.379L233.002 213.038V306.957V400.876L220.468 419.531C197.917 453.094 178.989 487.39 172.531 506.388C170.311 512.918 170.078 514.495 171.176 515.547C171.905 516.245 178.593 519.086 186.038 521.858C210.47 530.956 222.749 536.437 231.002 541.928C232.289 542.784 232.573 549.782 233.002 591.213L233.502 639.5L272.002 640L310.502 640.5L310.766 672.776C310.972 698.063 310.756 705.155 309.766 705.526C309.07 705.787 239.089 706.113 154.252 706.25L0.00170135 706.5L0.000801086 669Z"
  }));
}


