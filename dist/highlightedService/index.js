"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const HighlightedService = ({ title, description, pictureSrc, buttonText, buttonHref, buttonClick, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Grid_1.default, { container: true },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, sx: {
                    backgroundImage: `url(${pictureSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } }),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, md: 6, sx: (theme) => ({
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                }) },
                react_1.default.createElement(Box_1.default, { sx: {
                        p: { xs: 4, sm: 8 },
                    } },
                    react_1.default.createElement(Typography_1.default, { variant: "h4", color: "white" }, title),
                    react_1.default.createElement(Typography_1.default, { variant: "body1", sx: { my: 4 } }, description),
                    react_1.default.createElement(Box_1.default, { sx: {
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                        } },
                        react_1.default.createElement(Button_1.default, { onClick: (e) => {
                                e.preventDefault();
                                buttonClick(buttonHref);
                            }, variant: "outlined", component: "a", color: "info", href: buttonHref }, buttonText)))))));
};
exports.default = HighlightedService;
