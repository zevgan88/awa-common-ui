"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileMenuItem = exports.DesktopMenuItem = exports.NavigationRoot = void 0;
const styles_1 = require("@mui/material/styles");
const ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
exports.NavigationRoot = (0, styles_1.styled)('div')(({ theme }) => ({
    background: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 32,
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.16)',
    [theme.breakpoints.down('md')]: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        '& #awaLogo': {
            width: 48,
            height: 48,
        },
        '& #iconHamburger': {
            width: 30,
            height: 30,
        },
    },
    alignItems: 'center',
    '& svg': {
        display: 'flex',
    },
}));
exports.DesktopMenuItem = (0, styles_1.styled)('a', {
    shouldForwardProp: (props) => props !== 'active',
})(({ theme, active }) => ({
    color: active ? theme.palette.text.primary : theme.palette.primary.main,
    fontWeight: 900,
    fontSize: 16,
    marginRight: 6,
    marginLeft: 6,
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 18,
    paddingBottom: 18,
    textTransform: 'uppercase',
    position: 'relative',
    cursor: 'pointer',
    lineHeight: 1.47,
    textDecoration: 'none',
    // whiteSpace: 'nowrap',
    '&:after': {
        transition: '.2s ease-in-out',
        opacity: active ? 1 : 0,
        content: "''",
        position: 'absolute',
        left: 6,
        right: 6,
        bottom: 0,
        height: 3,
        background: theme.palette.primary.main,
    },
    '&:hover:after': {
        opacity: 1,
    },
}));
exports.MobileMenuItem = (0, styles_1.styled)(ListItemButton_1.default, {
    shouldForwardProp: (props) => props !== 'active',
})(({ theme, active }) => ({
    paddingLeft: 38,
    paddingRight: 38,
    paddingTop: 10,
    paddingBottom: 10,
    '& *': {
        fontWeight: '900!important',
        color: active ? 'black' : theme.palette.primary.main,
    },
}));
