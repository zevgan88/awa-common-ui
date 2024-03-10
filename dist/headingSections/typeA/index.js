"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const typeA_styles_1 = require("./typeA.styles");
const HeadingSectionTypeA = ({ children }) => {
    return (react_1.default.createElement(typeA_styles_1.RootStyled, null,
        react_1.default.createElement(typeA_styles_1.EllipseOneStyled, null),
        react_1.default.createElement(typeA_styles_1.EllipseTwoStyled, null),
        react_1.default.createElement(typeA_styles_1.EllipseThreeStyled, null),
        children));
};
exports.default = HeadingSectionTypeA;
