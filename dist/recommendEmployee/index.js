"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const recommendEmployee_styles_1 = require("./recommendEmployee.styles");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const RecommendEmployee = ({ title, description, buttonClick, buttonText, pictureSrc, pictureAlt, buttonHref, }) => {
    return (react_1.default.createElement(recommendEmployee_styles_1.RecommendEmployeeRoot, null,
        react_1.default.createElement(Grid_1.default, { container: true, spacing: 8.25 },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, lg: 7 },
                react_1.default.createElement(Box_1.default, { sx: {
                        py: { xs: 3, sm: 5.75, lg: 9.625 },
                        px: { xs: 4, sm: 7.75, lg: 14.75 },
                    } },
                    react_1.default.createElement(Typography_1.default, { variant: "h2", component: "h3" }, title),
                    react_1.default.createElement(Typography_1.default, { sx: { my: 2 } }, description),
                    react_1.default.createElement(Button_1.default, { variant: "contained", onClick: (e) => {
                            e.preventDefault();
                            buttonClick(buttonHref);
                        }, component: "a", href: buttonHref }, buttonText))),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, lg: 5, justifyContent: "flex-Start", alignItems: "center", display: { xs: 'none', lg: 'flex' } },
                react_1.default.createElement(recommendEmployee_styles_1.PictureStyled, { src: pictureSrc, alt: pictureAlt || '', loading: "lazy" })))));
};
exports.default = RecommendEmployee;
