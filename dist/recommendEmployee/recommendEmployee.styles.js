"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureStyled = exports.RecommendEmployeeRoot = void 0;
const styles_1 = require("@mui/material/styles");
exports.RecommendEmployeeRoot = (0, styles_1.styled)('div')(({ theme }) => ({
    border: 3,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
}));
exports.PictureStyled = (0, styles_1.styled)('img')(({ theme }) => ({
    borderRadius: '50%',
    width: 398,
    height: 398,
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
