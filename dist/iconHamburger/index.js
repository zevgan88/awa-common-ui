"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.default = () => {
    return (react_1.default.createElement("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { display: 'flex' }, id: "iconHamburger" },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 3H40V7H0V3ZM0 18H40V22H0V18ZM0 33H40V37H0V33Z", fill: "#264CD6" })));
};
