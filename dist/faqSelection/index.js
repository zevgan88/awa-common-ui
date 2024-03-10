"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const iconArrow_1 = __importDefault(require("../iconArrow"));
const faqLink_1 = __importDefault(require("../faqLink"));
const FaqSelection = ({ title, buttonAllText, buttonAllClick, buttonAllHref, items, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Grid_1.default, { container: true, spacing: { xs: 0, md: 16 } },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, display: "flex", flexDirection: "column" },
                react_1.default.createElement(Typography_1.default, { variant: "h3", component: "h2" }, title),
                react_1.default.createElement(Link_1.default, { href: buttonAllHref, onClick: (e) => {
                        e.preventDefault();
                        buttonAllClick(buttonAllHref);
                    }, variant: "body1", fontWeight: "bold", sx: { mt: { xs: 4, md: 2 }, mb: 2 } },
                    buttonAllText,
                    " ",
                    react_1.default.createElement(iconArrow_1.default, null))),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6 }, items.map(({ href, title, handleClick }, i) => {
                return (react_1.default.createElement(faqLink_1.default, { key: href, title: title, href: href, active: false, handleClick: handleClick }));
            })))));
};
exports.default = FaqSelection;
