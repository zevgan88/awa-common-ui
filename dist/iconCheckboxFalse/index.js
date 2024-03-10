"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
exports.default = () => {
    return (react_1.default.createElement(SvgIcon_1.default, { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("rect", { x: "1.5", y: "1.5", width: "21", height: "21", stroke: "#264CD6", strokeWidth: "3" })));
};
