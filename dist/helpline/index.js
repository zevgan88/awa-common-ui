"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const helpline_styles_1 = require("./helpline.styles");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const iconPhone_1 = __importDefault(require("../iconPhone"));
const Helpline = ({ helplineText, phoneNumber, primaryButtonText, primaryButtonHref, primaryButtonClick, secondaryButtonText, secondaryButtonHref, secondaryButtonClick, orText, }) => {
    return (react_1.default.createElement(helpline_styles_1.HelplineRootStyled, null,
        react_1.default.createElement(Stack_1.default, { direction: { xs: 'column', lg: 'row' }, spacing: 2 },
            react_1.default.createElement(Typography_1.default, { variant: "body1", alignItems: "center", display: "flex", fontWeight: "bold", flexDirection: { xs: 'column', lg: 'row' } },
                helplineText,
                react_1.default.createElement(helpline_styles_1.LinkStyled, { href: `tel:${phoneNumber}` },
                    react_1.default.createElement(Box_1.default, { ml: 2, mr: 0.5, display: { xs: 'none', sm: 'inline-flex' }, component: "span" },
                        react_1.default.createElement(iconPhone_1.default, null)),
                    react_1.default.createElement(Typography_1.default, { variant: "h5", alignItems: "center", display: "flex", fontWeight: "bold", component: "span" }, phoneNumber)),
                react_1.default.createElement(Box_1.default, { ml: { xs: 0, sm: 2 }, component: "span" }, orText)),
            react_1.default.createElement(Stack_1.default, { direction: { xs: 'column', sm: 'row' }, spacing: 2 },
                react_1.default.createElement(Button_1.default, { variant: "contained", onClick: (e) => {
                        e.preventDefault();
                        primaryButtonClick(primaryButtonHref);
                    }, component: "a", href: primaryButtonHref, sx: (theme) => ({
                        [theme.breakpoints.only('sm')]: {
                            flex: 1,
                        },
                    }) }, primaryButtonText),
                react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: (e) => {
                        e.preventDefault();
                        secondaryButtonClick(secondaryButtonHref);
                    }, component: "a", href: secondaryButtonHref, sx: (theme) => ({
                        [theme.breakpoints.only('sm')]: {
                            flex: 1,
                        },
                    }) }, secondaryButtonText)))));
};
exports.default = Helpline;
