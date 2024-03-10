"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const InputLabel_1 = require("@mui/material/InputLabel");
const OutlinedInput_1 = require("@mui/material/OutlinedInput");
const palette = {
    primary: {
        main: '#264CD6',
    },
    secondary: {
        main: '#8DE7BE',
    },
    error: {
        main: '#DC396A',
        light: '#FCE9FC',
    },
    success: {
        main: '#5AB48B',
        light: '#BCFADE',
    },
    warning: {
        main: '#FFDA7D',
        light: '#FFEFCA',
    },
    text: {
        primary: '#000000',
    },
    info: {
        main: '#ffffff',
        dark: '#ffffff',
    },
};
let theme = (0, styles_1.createTheme)({
    typography: {
        fontFamily: '"Inter"',
        // fontFamily: ['Space Grotesk'].join(','),
    },
});
// A custom theme for this app
theme = (0, styles_1.createTheme)(theme, {
    typography: Object.assign({}, theme.typography),
    palette,
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    textDecorationColor: palette.primary.main,
                    '&:hover, &:focus': {
                        textDecoration: 'none',
                    },
                    '& svg': {
                        marginLeft: 8,
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    [theme.breakpoints.up('lg')]: {
                        maxWidth: 1360,
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    fontSize: 12,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 16,
                    },
                    [`&:not(.${InputLabel_1.inputLabelClasses.shrink})`]: {
                        color: '#8298AB',
                        top: -4,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: theme.palette.background.paper,
                    fontSize: 12,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 16,
                    },
                    [`&:hover .${OutlinedInput_1.outlinedInputClasses.notchedOutline}`]: {
                        borderColor: '#95BAFF',
                    },
                    [`&.Mui-focused .${OutlinedInput_1.outlinedInputClasses.notchedOutline}`]: {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 3,
                    },
                },
                notchedOutline: {
                    borderWidth: 3,
                    borderColor: '#DDe9FF',
                    borderStyle: 'solid',
                },
                input: {
                    paddingTop: 12,
                    paddingBottom: 12,
                    '&::placeholder': {
                        color: '#8298AB',
                        opacity: 1,
                    },
                },
                inputMultiline: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    '&::placeholder': {
                        color: '#8298AB',
                        opacity: 1,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 100,
                    boxShadow: 'none',
                    fontSize: 16,
                    fontWeight: 700,
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 24,
                    paddingRight: 24,
                    lineHeight: 1.47,
                    textTransform: 'none',
                    textAlign: 'center',
                },
                outlined: {
                    borderWidth: 3,
                    borderColor: theme.palette.primary.main,
                    '&:hover, &:focus': {
                        borderWidth: 3,
                    },
                },
                outlinedInfo: {
                    borderColor: '#ffffff',
                },
                sizeMedium: {
                    paddingTop: 13.5,
                    paddingBottom: 13.5,
                    paddingLeft: 32,
                    paddingRight: 32,
                },
                outlinedSizeMedium: {
                    paddingTop: 10.5,
                    paddingBottom: 10.5,
                    paddingLeft: 29,
                    paddingRight: 29,
                },
                containedInfo: {
                    color: palette.primary.main,
                },
            },
        },
    },
});
const isTablet = theme.breakpoints.up('sm');
const isDesktop = theme.breakpoints.up('lg');
const commonHeadingStyles = {
    fontFamily: '"Space Grotesk", "Rubik"',
    fontWeight: 700,
    color: theme.palette.primary.main,
    letterSpacing: '-0.03em',
};
theme.typography = Object.assign(Object.assign({}, theme.typography), { h1: Object.assign(Object.assign({}, commonHeadingStyles), { fontSize: 36, letterSpacing: '-0.03em', lineHeight: 1.05, [isTablet]: {
            fontSize: 46,
        }, [isDesktop]: {
            fontSize: 64,
            '& span': {
                backgroundColor: 'white',
                textDecoration: 'underline',
            },
        } }), h2: Object.assign(Object.assign({}, commonHeadingStyles), { letterSpacing: '-0.03em', lineHeight: 1, fontSize: 30, [isTablet]: {
            fontSize: 40,
        }, [isDesktop]: {
            fontSize: 43,
        } }), h3: Object.assign(Object.assign({}, commonHeadingStyles), { fontSize: 26, [isTablet]: {
            fontSize: 32,
        }, [isDesktop]: {
            fontSize: 36,
        }, lineHeight: 1.1 }), h4: Object.assign(Object.assign({}, commonHeadingStyles), { fontSize: 24, [isTablet]: { fontSize: 32 }, lineHeight: 1 }), h5: Object.assign(Object.assign({}, commonHeadingStyles), { fontSize: 20, [isTablet]: { fontSize: 24 }, lineHeight: 1.2 }), h6: Object.assign(Object.assign({}, commonHeadingStyles), { fontSize: 16, [isTablet]: { fontSize: 20 }, lineHeight: 1.2 }), subtitle1: {
        fontSize: 20,
        lineHeight: 1.4,
    }, subtitle2: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.4,
    }, body1: Object.assign(Object.assign({}, theme.typography.body1), { lineHeight: 1.4, fontSize: 16 }), body2: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1.4,
    } });
exports.default = theme;
