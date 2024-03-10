"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reference_styles_1 = require("./reference.styles");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Reference = ({ name, position, quote }) => {
    return (react_1.default.createElement(reference_styles_1.ReferenceRootStyled, null,
        react_1.default.createElement(Grid_1.default, { container: true },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Typography_1.default, { variant: "h6", component: "h3", sx: { lineHeight: 1.2 } }, name),
                react_1.default.createElement(Typography_1.default, { variant: "body2", fontWeight: "bold" }, position))),
        react_1.default.createElement(reference_styles_1.DividerStyled, null),
        react_1.default.createElement(Typography_1.default, { variant: "subtitle1", component: "p", fontWeight: "normal" }, quote)));
};
exports.default = Reference;
