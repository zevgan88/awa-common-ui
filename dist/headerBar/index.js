"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const headerBar_styles_1 = require("./headerBar.styles");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const iconFacebook_1 = __importDefault(require("../iconFacebook"));
const iconLinkedIn_1 = __importDefault(require("../iconLinkedIn"));
const iconInstagram_1 = __importDefault(require("../iconInstagram"));
const iconPhone_1 = __importDefault(require("../iconPhone"));
const HeaderBar = ({ languages, helplineText, phoneNumber, facebookUrl, instagramUrl, linkedInUrl, }) => {
    return (react_1.default.createElement(headerBar_styles_1.HeaderBarRootStyled, null,
        react_1.default.createElement(Grid_1.default, { container: true },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, sx: {
                    order: { md: 2 },
                    pt: { xs: 1.5, md: 2 },
                    px: 4,
                    pb: { xs: 0, md: 2 },
                }, alignItems: "center", display: "flex", justifyContent: { xs: 'center', md: 'flex-end' } },
                react_1.default.createElement(Stack_1.default, { direction: "row", alignItems: "center", justifyContent: { xs: 'center', md: 'flex-end' }, spacing: 4 }, languages.map(({ name, href, shortCode, active }) => {
                    return (react_1.default.createElement(headerBar_styles_1.LangugageStyled, { href: href, key: shortCode, isActive: Boolean(active) },
                        react_1.default.createElement(Box_1.default, { sx: { display: { sm: 'none', md: 'flex', lg: 'none' } } }, shortCode),
                        react_1.default.createElement(Box_1.default, { sx: {
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                    md: 'none',
                                    lg: 'flex',
                                },
                            } }, name)));
                }))),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, sx: {
                    display: 'flex',
                    order: { md: 1 },
                    py: { xs: 1.5, sm: 2 },
                    px: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                } },
                react_1.default.createElement(Stack_1.default, { direction: "row", justifyContent: "center", alignItems: "center", spacing: 4 },
                    react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", sx: { whiteSpace: 'nowrap' } },
                        react_1.default.createElement(headerBar_styles_1.HelplineTextStyled, null, helplineText),
                        react_1.default.createElement(headerBar_styles_1.PhoneNumberStyled, { href: `tel:${phoneNumber.replace(/ /g, '')}` },
                            react_1.default.createElement(Box_1.default, { mx: 1, display: "inline-flex", component: "span" },
                                react_1.default.createElement(iconPhone_1.default, null)),
                            phoneNumber)),
                    react_1.default.createElement(Stack_1.default, { direction: "row", justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: "center", sx: { display: { xs: 'none', sm: 'flex' } }, spacing: 2 },
                        react_1.default.createElement("a", { href: facebookUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "Facebook"),
                            react_1.default.createElement(iconFacebook_1.default, { width: 30, height: 30 })),
                        react_1.default.createElement("a", { href: linkedInUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "LinkedIn"),
                            react_1.default.createElement(iconLinkedIn_1.default, { width: 30, height: 30 })),
                        react_1.default.createElement("a", { href: instagramUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "Instagram"),
                            react_1.default.createElement(iconInstagram_1.default, { width: 30, height: 30 }))))))));
};
exports.default = HeaderBar;
