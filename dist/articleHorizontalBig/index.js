"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const iconArrow_1 = __importDefault(require("../iconArrow"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const articleHorizontalBig_styles_1 = require("./articleHorizontalBig.styles");
const ArticleHorizontalBig = ({ direction, pictureUrl, pictureAlt, buttonEntireArticleText, title, href, clickAction, perex, date, }) => {
    const onClick = (e) => {
        e.preventDefault();
        clickAction(href);
    };
    return (react_1.default.createElement(Grid_1.default, { container: true, spacing: { xs: 2, md: 4 } },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, sx: { order: { md: direction === 'rtl' ? 2 : 1 } } },
            react_1.default.createElement(articleHorizontalBig_styles_1.PictureLinkStyled, { href: href, onClick: onClick },
                react_1.default.createElement(articleHorizontalBig_styles_1.PictureStyled, { src: pictureUrl, alt: pictureAlt }))),
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, sx: { order: { md: direction === 'rtl' ? 1 : 2 } } },
            react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "#8298AB" }, date),
            react_1.default.createElement(Link_1.default, { href: href, onClick: onClick, variant: "h3", my: 2 }, title),
            react_1.default.createElement(Typography_1.default, { component: "p", mb: 2, variant: "body1" }, perex),
            react_1.default.createElement(Link_1.default, { href: href, onClick: onClick, variant: "body1", fontWeight: "bold" },
                buttonEntireArticleText,
                " ",
                react_1.default.createElement(iconArrow_1.default, null)))));
};
exports.default = ArticleHorizontalBig;
