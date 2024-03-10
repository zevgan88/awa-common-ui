"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkStyled = void 0;
const styles_1 = require("@mui/material/styles");
const Link_1 = __importDefault(require("@mui/material/Link"));
exports.LinkStyled = (0, styles_1.styled)(Link_1.default, {
    shouldForwardProp: (props) => props !== 'active',
})(({ theme, active }) => ({
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    border: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: active ? 'transparent' : '#8298AB',
    position: 'relative',
    color: active ? '#8298AB' : theme.palette.primary.main,
    textDecoration: active ? 'none' : 'underline',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 20,
    '& svg': {
        height: 14,
        width: 10,
        minWidth: 10,
        transition: '.2s ease-in-out',
        transform: active ? 'rotate(90deg)' : 'none',
    },
    '& svg path': {
        fill: 'currentColor',
    },
}));
