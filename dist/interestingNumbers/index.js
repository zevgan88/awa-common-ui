"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const InterestingNumbers = ({ items, titleTypographyVariant, }) => {
    return (react_1.default.createElement(Stack_1.default, { direction: { xs: 'column', md: 'row' }, spacing: 4 }, items.map(({ title, description }) => {
        return (react_1.default.createElement(Box_1.default, { key: title, sx: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
            } },
            react_1.default.createElement(Typography_1.default, { variant: titleTypographyVariant || 'h1', component: "p", sx: { mb: 1 } }, title),
            react_1.default.createElement(Typography_1.default, { variant: "body1" }, description)));
    })));
};
exports.default = InterestingNumbers;
