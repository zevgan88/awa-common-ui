"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const footer_styles_1 = require("./footer.styles");
const iconFacebook_1 = __importDefault(require("../iconFacebook"));
const iconLinkedIn_1 = __importDefault(require("../iconLinkedIn"));
const iconInstagram_1 = __importDefault(require("../iconInstagram"));
const iconTrigama_1 = __importDefault(require("../iconTrigama"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Footer = ({ socialSitesTitle, facebookUrl, instagramUrl, linkedInUrl, copyrightText, createdByText, menuCategories, trigamaLogoUrl, }) => {
    return (react_1.default.createElement(footer_styles_1.FooterStyled, null,
        react_1.default.createElement(Box_1.default, { sx: { px: { xs: 0, sm: 4, md: 0 }, py: { xs: 4, sm: 8, md: 8 } } },
            react_1.default.createElement(Grid_1.default, { container: true, spacing: { xs: 4, md: 5.25 } },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, lg: 8, sx: {
                        order: { xs: 2, sm: 1 },
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        width: '100%',
                    } },
                    react_1.default.createElement(footer_styles_1.CategoriesStyled, null,
                        react_1.default.createElement(Stack_1.default, { direction: { xs: 'column', sm: 'row' }, spacing: 4, sx: { justifyContent: 'space-between' } }, menuCategories.map(({ title, items, hide }) => {
                            if (hide) {
                                return null;
                            }
                            return (react_1.default.createElement("div", { key: title, style: { width: '100%' } },
                                react_1.default.createElement(Typography_1.default, { component: "h2", color: "white", variant: "h6", textAlign: { xs: 'center', md: 'left' } }, title),
                                items.map(({ title, href, handleClick, hide }) => {
                                    if (hide) {
                                        return null;
                                    }
                                    return (react_1.default.createElement(Box_1.default, { key: title, display: "flex", mt: 2, sx: {
                                            justifyContent: {
                                                xs: 'center',
                                                sm: 'flex-start',
                                            },
                                        } },
                                        react_1.default.createElement(Link_1.default, { variant: "body2", href: href, onClick: (e) => {
                                                e.preventDefault();
                                                handleClick(href);
                                            }, fontWeight: "bold" }, title)));
                                })));
                        })))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, lg: 4, sx: { order: { xs: 1, sm: 2 } } },
                    react_1.default.createElement(Box_1.default, { display: { xs: 'none', md: 'block' } },
                        react_1.default.createElement(Typography_1.default, { component: "h2", color: "white", variant: "h6", textAlign: "right", mb: 4 }, socialSitesTitle)),
                    react_1.default.createElement(Stack_1.default, { direction: "row", justifyContent: { xs: 'center', md: 'flex-end' }, spacing: 4 },
                        react_1.default.createElement("a", { href: facebookUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "Facebook"),
                            react_1.default.createElement(iconFacebook_1.default, { width: 48, height: 48 })),
                        react_1.default.createElement("a", { href: linkedInUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "LinkedIn"),
                            react_1.default.createElement(iconLinkedIn_1.default, { width: 48, height: 48 })),
                        react_1.default.createElement("a", { href: instagramUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "Instagram"),
                            react_1.default.createElement(iconInstagram_1.default, { width: 48, height: 48 })))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, sx: {
                        order: 3,
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' },
                    } },
                    react_1.default.createElement(Typography_1.default, { variant: "body2" }, copyrightText)),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, sx: { order: 4 } },
                    react_1.default.createElement(Stack_1.default, { direction: "row", justifyContent: { xs: 'center', sm: 'flex-end' }, alignItems: "center", spacing: 2 },
                        react_1.default.createElement(Typography_1.default, { variant: "body2", sx: { '& a': { fontWeight: 700 } } }, createdByText),
                        react_1.default.createElement(Box_1.default, { display: { xs: 'none', md: 'block' }, component: "a", href: trigamaLogoUrl, target: "_blank" },
                            react_1.default.createElement("span", { style: { display: 'none' } }, "Trigama"),
                            react_1.default.createElement(iconTrigama_1.default, null))))))));
};
exports.default = Footer;
