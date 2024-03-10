"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const iconCheckboxFalse_1 = __importDefault(require("../iconCheckboxFalse"));
const iconCheckboxTrue_1 = __importDefault(require("../iconCheckboxTrue"));
const Checkbox = (props) => {
    return (react_1.default.createElement(Checkbox_1.default, Object.assign({}, props, { sx: { '& svg': { fill: 'white' } }, icon: react_1.default.createElement(iconCheckboxFalse_1.default, null), checkedIcon: react_1.default.createElement(iconCheckboxTrue_1.default, null) })));
};
exports.default = Checkbox;
