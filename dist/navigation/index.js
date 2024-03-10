"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navigation_styles_1 = require("./navigation.styles");
const iconAwaFull_1 = __importDefault(require("../iconAwaFull"));
const iconAwa_1 = __importDefault(require("../iconAwa"));
const useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
const styles_1 = require("@mui/material/styles");
const Button_1 = __importDefault(require("@mui/material/Button"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const SwipeableDrawer_1 = __importDefault(require("@mui/material/SwipeableDrawer"));
const iconClose_1 = __importDefault(require("../iconClose"));
const iconHamburger_1 = __importDefault(require("../iconHamburger"));
const Navigation = ({ items, logoClick, signUpText, signUpHref, signUpClick, hideSignUp, }) => {
    const theme = (0, styles_1.useTheme)();
    const smUp = (0, useMediaQuery_1.default)(theme.breakpoints.up('sm'));
    const lgUp = (0, useMediaQuery_1.default)(theme.breakpoints.up('lg'));
    const xsOnly = (0, useMediaQuery_1.default)(theme.breakpoints.only('xs'));
    const smOnly = (0, useMediaQuery_1.default)(theme.breakpoints.only('sm'));
    const mdOnly = (0, useMediaQuery_1.default)(theme.breakpoints.only('md'));
    const xxlUp = (0, useMediaQuery_1.default)('(min-width:1600px)');
    const xxxlUp = (0, useMediaQuery_1.default)('(min-width:1900px)');
    const [drawerOpen, setDrawerOpen] = react_1.default.useState(false);
    const matchesOnlyMobile = !smUp && !lgUp;
    const matchesOnlyTablet = smUp && !lgUp;
    const matchesOnlyDesktop = lgUp;
    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };
    return (react_1.default.createElement(navigation_styles_1.NavigationRoot, null,
        react_1.default.createElement("a", { href: "/", onClick: (e) => {
                e.preventDefault();
                logoClick('/');
            } },
            react_1.default.createElement("span", { style: { display: 'none' } }, "AWA"),
            !xxxlUp && (matchesOnlyMobile || lgUp) ? react_1.default.createElement(iconAwa_1.default, null) : react_1.default.createElement(iconAwaFull_1.default, null)),
        react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center" },
            matchesOnlyDesktop && (react_1.default.createElement(Box_1.default, { mx: 3.5, sx: { display: 'flex', alignItems: 'center', textAlign: 'center' } }, items.map(({ handleClick, title, href, isActiveCallback, hide }) => {
                if (hide) {
                    return null;
                }
                return (react_1.default.createElement(navigation_styles_1.DesktopMenuItem, { key: href, href: href, onClick: (e) => {
                        e.preventDefault();
                        handleClick(href);
                    }, active: Boolean(isActiveCallback(href)) }, title));
            }))),
            !hideSignUp && (smOnly || mdOnly || lgUp) && (react_1.default.createElement(Button_1.default, { variant: "contained", onClick: (e) => {
                    e.preventDefault();
                    signUpClick(signUpHref);
                }, href: signUpHref, component: "a", sx: { whiteSpace: 'nowrap' } }, signUpText)),
            (matchesOnlyMobile || matchesOnlyTablet) && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Box_1.default, { onClick: toggleDrawer, ml: { xs: 2, md: 4 }, sx: { cursor: 'pointer' } },
                    react_1.default.createElement(iconHamburger_1.default, null)),
                react_1.default.createElement(SwipeableDrawer_1.default, { anchor: "right", open: drawerOpen, onClose: toggleDrawer, onOpen: toggleDrawer },
                    react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "flex-end", flexDirection: "column" },
                        react_1.default.createElement(Box_1.default, { onClick: toggleDrawer, sx: { cursor: 'pointer', px: 4, py: 2 } },
                            react_1.default.createElement(iconClose_1.default, null)),
                        react_1.default.createElement(List_1.default, null,
                            items.map(({ handleClick, title, href, isActiveCallback, hide }) => {
                                if (hide)
                                    return null;
                                return (react_1.default.createElement(ListItem_1.default, { disablePadding: true, key: href },
                                    react_1.default.createElement(navigation_styles_1.MobileMenuItem, { component: "a", href: href, active: isActiveCallback(href), onClick: (e) => {
                                            e.preventDefault();
                                            handleClick(href);
                                            toggleDrawer();
                                        } },
                                        react_1.default.createElement(ListItemText_1.default, { primary: title }))));
                            }),
                            !hideSignUp && xsOnly && !hideSignUp && (react_1.default.createElement(ListItem_1.default, { disablePadding: true },
                                react_1.default.createElement(navigation_styles_1.MobileMenuItem, { component: "a", href: signUpHref, onClick: (e) => {
                                        e.preventDefault();
                                        signUpClick(signUpHref);
                                        toggleDrawer();
                                    } },
                                    react_1.default.createElement(ListItemText_1.default, { primary: signUpText }))))))))))));
};
exports.default = Navigation;
