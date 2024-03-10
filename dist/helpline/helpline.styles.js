"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkStyled = exports.HelplineRootStyled = void 0;
const styles_1 = require("@mui/material/styles");
exports.HelplineRootStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    padding: 32,
    background: theme.palette.success.light,
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& path': {
        fill: theme.palette.primary.main,
    },
}));
exports.LinkStyled = (0, styles_1.styled)('a')(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
        marginTop: 0,
        marginBottom: 0,
    },
    '&:hover, &:focus': {
        textDecoration: 'underline',
    },
}));
