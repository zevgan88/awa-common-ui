"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangugageStyled = exports.HelplineTextStyled = exports.PhoneNumberStyled = exports.HeaderBarRootStyled = void 0;
const styles_1 = require("@mui/material/styles");
exports.HeaderBarRootStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    a: {
        color: theme.palette.primary.contrastText,
        '&:hover, &:focus': {
            textDecoration: 'none',
        },
    },
    '& svg': {
        display: 'flex',
    },
}));
exports.PhoneNumberStyled = (0, styles_1.styled)('a')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
}));
exports.HelplineTextStyled = (0, styles_1.styled)('span')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));
exports.LangugageStyled = (0, styles_1.styled)('a', {
    shouldForwardProp: (props) => props !== 'isActive',
})(({ theme, isActive }) => ({
    opacity: isActive ? 0.8 : 1,
    cursor: isActive ? ' default' : 'pointer',
    textDecoration: isActive ? 'none' : 'underline',
    fontSize: 12,
    fontWeight: 700,
}));
