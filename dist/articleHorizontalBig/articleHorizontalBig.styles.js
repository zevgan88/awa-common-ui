"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureStyled = exports.PictureLinkStyled = void 0;
const styles_1 = require("@mui/material/styles");
exports.PictureLinkStyled = (0, styles_1.styled)('a')(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    width: '100%',
    '&:after': {
        content: '""',
        paddingTop: '57%',
    },
}));
exports.PictureStyled = (0, styles_1.styled)('img')(({ theme }) => ({
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}));
