"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesStyled = exports.FooterStyled = void 0;
const styles_1 = require("@mui/material/styles");
exports.FooterStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    a: {
        color: theme.palette.primary.contrastText,
    },
    '& svg': {
        display: 'flex',
    },
}));
exports.CategoriesStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    width: '100%',
    a: {
        textDecoration: 'underline',
        '&:hover, &:focus': {
            textDecoration: 'none',
        },
    },
}));
