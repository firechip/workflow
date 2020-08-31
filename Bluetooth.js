/**
* @firechip/workflow (c) by Firechip
* 
* @firechip/workflow is licensed under a
* Creative Commons Attribution-NoDerivatives 4.0 International License.
* 
* You should have received a copy of the license along with this
* work. If not, see <http://creativecommons.org/licenses/by-nd/4.0/>.
**/
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = Bluetooth;

var _Bluetooth = require("./Bluetooth-data");

var _icon = require("@react-spectrum/icon");

var _react = _interopRequireDefault(require("react"));

function Bluetooth(props) {
  return /*#__PURE__*/_react.default.createElement(_icon.Icon, props, /*#__PURE__*/_react.default.createElement(_Bluetooth.A4uBluetooth, null));
}