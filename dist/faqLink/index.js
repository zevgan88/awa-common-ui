"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const faqLink_styles_1 = require("./faqLink.styles");
const iconArrow_1 = __importDefault(require("../iconArrow"));
const FaqLink = ({ title, href, active, handleClick }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(faqLink_styles_1.LinkStyled, { variant: "h6", active: active, href: href, onClick: (e) => {
                e.preventDefault();
                handleClick(href);
            } },
            title,
            react_1.default.createElement(iconArrow_1.default, null))));
};
exports.default = FaqLink;
