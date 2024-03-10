"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleStyled = exports.EllipseTwoStyled = exports.EllipseOneStyled = exports.RootStyled = void 0;
const styles_1 = require("@mui/material/styles");
exports.RootStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
}));
exports.EllipseOneStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    position: 'absolute',
    width: 763,
    height: 763,
    left: -238,
    top: -482,
    background: '#8DE7BE',
    filter: 'blur(50px)',
    borderRadius: '50%',
    zIndex: -1,
    [theme.breakpoints.down('xl')]: {
        left: -700,
    },
}));
exports.EllipseTwoStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    position: 'absolute',
    width: 1236,
    height: 1236,
    left: -366,
    top: 213,
    background: '#F9D3F9',
    filter: 'blur(299.803px)',
    zIndex: -1,
    [theme.breakpoints.down('xl')]: {
        left: 'calc(-1236px + 30vw)',
    },
}));
exports.TriangleStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    position: 'absolute',
    width: 640,
    height: 554,
    left: -4,
    top: -4,
    background: 'linear-gradient(to bottom left, transparent 50%,#264CD6 50% calc(50% + 4px), transparent calc(50% + 5px)) right/50% 100%, linear-gradient(to bottom right, transparent 50%,#264CD6 50% calc(50% + 4px), transparent calc(50% + 5px)) left/50% 100%, linear-gradient(#264CD6,#264CD6) bottom/calc(100% - 8px) 4px',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xl')]: {
        display: 'none',
    },
}));
