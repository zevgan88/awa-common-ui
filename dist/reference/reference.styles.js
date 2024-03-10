"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividerStyled = exports.ReferenceRootStyled = void 0;
const styles_1 = require("@mui/material/styles");
exports.ReferenceRootStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    background: theme.palette.warning.light,
    padding: 32,
    [theme.breakpoints.up('md')]: {
        paddingRight: 62,
        paddingLeft: 62,
    },
}));
exports.DividerStyled = (0, styles_1.styled)('div')(({ theme }) => {
    return {
        height: 3,
        background: theme.palette.primary.main,
        marginTop: 13,
        marginBottom: 16,
    };
});
