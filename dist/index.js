

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@stitches/react');
var colors = require('@radix-ui/colors');
var core = require('@stitches/core');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var _a;
var styled = (_a = react.createStitches({
    theme: {
        colors: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, colors.gray), colors.mauve), colors.slate), colors.sage), colors.olive), colors.sand), colors.tomato), colors.red), colors.crimson), colors.pink), colors.plum), colors.purple), colors.violet), colors.indigo), colors.blue), colors.sky), colors.mint), colors.cyan), colors.teal), colors.green), colors.grass), colors.lime), colors.yellow), colors.amber), colors.orange), colors.brown), colors.bronze), colors.gold), colors.grayA), colors.mauveA), colors.slateA), colors.sageA), colors.oliveA), colors.sandA), colors.tomatoA), colors.redA), colors.crimsonA), colors.pinkA), colors.plumA), colors.purpleA), colors.violetA), colors.indigoA), colors.blueA), colors.skyA), colors.mintA), colors.cyanA), colors.tealA), colors.greenA), colors.grassA), colors.limeA), colors.yellowA), colors.amberA), colors.orangeA), colors.brownA), colors.bronzeA), colors.goldA), colors.whiteA), colors.blackA), { 
            // Semantic colors
            hiContrast: '$slate12', 
            // loContrast: '$slate1',
            loContrast: 'white', canvas: 'hsl(0 0% 93%)', panel: 'white', transparentPanel: 'hsl(0 0% 0% / 97%)', shadowLight: 'hsl(206 22% 7% / 35%)', shadowDark: 'hsl(206 22% 7% / 20%)' }),
        fonts: {
            untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        // space: {
        //   1: '4px',
        //   2: '8px',
        //   3: '16px',
        //   4: '20px',
        //   5: '24px',
        //   6: '32px',
        //   7: '48px',
        //   8: '64px',
        //   9: '80px',
        // },
        // sizes: {
        //   1: '4px',
        //   2: '8px',
        //   3: '16px',
        //   4: '20px',
        //   5: '24px',
        //   6: '32px',
        //   7: '48px',
        //   8: '64px',
        //   9: '80px',
        // },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
            4: '17px',
            5: '19px',
            6: '21px',
            7: '27px',
            8: '35px',
            9: '59px',
        },
        // fontSizes: {
        //   1: '11px',
        //   2: '12px',
        //   3: '15px',
        //   4: '17px',
        //   5: '20px',
        //   6: '22px',
        //   7: '28px',
        //   8: '36px',
        //   9: '60px',
        // },
        radii: {
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            round: '50%',
            pill: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    utils: {
        p: function (value) { return ({
            padding: value,
        }); },
        pt: function (value) { return ({
            paddingTop: value,
        }); },
        pr: function (value) { return ({
            paddingRight: value,
        }); },
        pb: function (value) { return ({
            paddingBottom: value,
        }); },
        pl: function (value) { return ({
            paddingLeft: value,
        }); },
        px: function (value) { return ({
            paddingLeft: value,
            paddingRight: value,
        }); },
        py: function (value) { return ({
            paddingTop: value,
            paddingBottom: value,
        }); },
        m: function (value) { return ({
            margin: value,
        }); },
        mt: function (value) { return ({
            marginTop: value,
        }); },
        mr: function (value) { return ({
            marginRight: value,
        }); },
        mb: function (value) { return ({
            marginBottom: value,
        }); },
        ml: function (value) { return ({
            marginLeft: value,
        }); },
        mx: function (value) { return ({
            marginLeft: value,
            marginRight: value,
        }); },
        my: function (value) { return ({
            marginTop: value,
            marginBottom: value,
        }); },
        ta: function (value) { return ({ textAlign: value }); },
        fd: function (value) { return ({ flexDirection: value }); },
        fw: function (value) { return ({ flexWrap: value }); },
        ai: function (value) { return ({ alignItems: value }); },
        ac: function (value) { return ({ alignContent: value }); },
        jc: function (value) { return ({ justifyContent: value }); },
        as: function (value) { return ({ alignSelf: value }); },
        fg: function (value) { return ({ flexGrow: value }); },
        fs: function (value) { return ({ flexShrink: value }); },
        fb: function (value) { return ({ flexBasis: value }); },
        bc: function (value) { return ({
            backgroundColor: value,
        }); },
        br: function (value) { return ({
            borderRadius: value,
        }); },
        btrr: function (value) { return ({
            borderTopRightRadius: value,
        }); },
        bbrr: function (value) { return ({
            borderBottomRightRadius: value,
        }); },
        bblr: function (value) { return ({
            borderBottomLeftRadius: value,
        }); },
        btlr: function (value) { return ({
            borderTopLeftRadius: value,
        }); },
        bs: function (value) { return ({ boxShadow: value }); },
        lh: function (value) { return ({ lineHeight: value }); },
        ox: function (value) { return ({ overflowX: value }); },
        oy: function (value) { return ({ overflowY: value }); },
        pe: function (value) { return ({ pointerEvents: value }); },
        us: function (value) { return ({
            WebkitUserSelect: value,
            userSelect: value,
        }); },
        userSelect: function (value) { return ({
            WebkitUserSelect: value,
            userSelect: value,
        }); },
        size: function (value) { return ({
            width: value,
            height: value,
        }); },
        appearance: function (value) { return ({
            WebkitAppearance: value,
            appearance: value,
        }); },
        backgroundClip: function (value) { return ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }); },
    },
}), _a.styled); _a.css; _a.theme; var createTheme = _a.createTheme; _a.getCssText; _a.globalCss; _a.keyframes; _a.config; _a.reset;
var darkTheme = createTheme('dark-theme', {
    colors: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, colors.grayDark), colors.mauveDark), colors.slateDark), colors.sageDark), colors.oliveDark), colors.sandDark), colors.tomatoDark), colors.redDark), colors.crimsonDark), colors.pinkDark), colors.plumDark), colors.purpleDark), colors.violetDark), colors.indigoDark), colors.blueDark), colors.skyDark), colors.mintDark), colors.cyanDark), colors.tealDark), colors.greenDark), colors.grassDark), colors.limeDark), colors.yellowDark), colors.amberDark), colors.orangeDark), colors.brownDark), colors.bronzeDark), colors.goldDark), colors.grayDarkA), colors.mauveDarkA), colors.slateDarkA), colors.sageDarkA), colors.oliveDarkA), colors.sandDarkA), colors.tomatoDarkA), colors.redDarkA), colors.crimsonDarkA), colors.pinkDarkA), colors.plumDarkA), colors.purpleDarkA), colors.violetDarkA), colors.indigoDarkA), colors.blueDarkA), colors.skyDarkA), colors.mintDarkA), colors.cyanDarkA), colors.tealDarkA), colors.greenDarkA), colors.grassDarkA), colors.limeDarkA), colors.yellowDarkA), colors.amberDarkA), colors.orangeDarkA), colors.brownDarkA), colors.bronzeDarkA), colors.goldDarkA), { 
        // Semantic colors
        hiContrast: '$slate12', loContrast: '$slate1', canvas: 'hsl(0 0% 15%)', panel: '$slate3', transparentPanel: 'hsl(0 100% 100% / 97%)', shadowLight: 'hsl(206 22% 7% / 35%)', shadowDark: 'hsl(206 22% 7% / 20%)' }),
});

var ButtonCSS = core.css({
    variants: {
        size: {
            small: {
                borderRadius: '$1',
                height: '$5',
                px: '$2',
                fontSize: '$1',
                lineHeight: '$sizes$5',
            },
            medium: {
                borderRadius: '$2',
                height: '$6',
                px: '$3',
                fontSize: '$3',
                lineHeight: '$sizes$6',
            },
            large: {
                borderRadius: '$2',
                height: '$7',
                px: '$4',
                fontSize: '$4',
                lineHeight: '$sizes$7',
            },
        },
        border: {
            "1": {
                borderRadius: '0.6rem',
            },
            "2": {
                borderRadius: '1.5rem',
            },
            "3": {
                borderRadius: '3rem',
            },
        },
        color: {
            dark: {
                backgroundColor: "".concat(colors.blackA.blackA12),
                color: 'white',
                '&:hover': {
                    backgroundColor: "".concat(colors.blackA.blackA11),
                },
            },
            violet: {
                border: 0,
                backgroundColor: 'blueviolet',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'darkviolet',
                },
            },
            gray: {
                backgroundColor: '$loContrast',
                boxShadow: 'inset 0 0 0 1px $colors$slate7',
                color: '$hiContrast',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate2',
                    boxShadow: 'inset 0 0 0 1px $colors$slate8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$slate4',
                    boxShadow: 'inset 0 0 0 1px $colors$slate8',
                },
            },
            blue: {
                backgroundColor: '$blue2',
                boxShadow: 'inset 0 0 0 1px $colors$blue7',
                color: '$blue11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$blue8',
                    },
                },
                '&:active': {
                    backgroundColor: '$blue3',
                    boxShadow: 'inset 0 0 0 1px $colors$blue8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$blue4',
                    boxShadow: 'inset 0 0 0 1px $colors$blue8',
                },
            },
            green: {
                backgroundColor: '$green2',
                boxShadow: 'inset 0 0 0 1px $colors$green7',
                color: '$green11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$green8',
                    },
                },
                '&:active': {
                    backgroundColor: '$green3',
                    boxShadow: 'inset 0 0 0 1px $colors$green8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$green4',
                    boxShadow: 'inset 0 0 0 1px $colors$green8',
                },
            },
            red: {
                backgroundColor: '$loContrast',
                boxShadow: 'inset 0 0 0 1px $colors$slate7',
                color: '$red11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$red3',
                    boxShadow: 'inset 0 0 0 1px $colors$red8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$red4',
                    boxShadow: 'inset 0 0 0 1px $colors$red8',
                },
            },
            transparentWhite: {
                backgroundColor: 'hsla(0,100%,100%,.2)',
                color: 'white',
                '@hover': {
                    '&:hover': {
                        backgroundColor: 'hsla(0,100%,100%,.25)',
                    },
                },
                '&:active': {
                    backgroundColor: 'hsla(0,100%,100%,.3)',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
                },
            },
            transparentBlack: {
                backgroundColor: 'hsla(0,0%,0%,.2)',
                color: 'black',
                '@hover': {
                    '&:hover': {
                        backgroundColor: 'hsla(0,0%,0%,.25)',
                    },
                },
                '&:active': {
                    backgroundColor: 'hsla(0,0%,0%,.3)',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
                },
            },
        },
        state: {
            active: {
                backgroundColor: '$slate4',
                boxShadow: 'inset 0 0 0 1px $colors$slate8',
                color: '$slate11',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slate5',
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate5',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
                },
            },
            waiting: {
                backgroundColor: '$slate4',
                boxShadow: 'inset 0 0 0 1px $colors$slate8',
                color: 'transparent',
                pointerEvents: 'none',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slate5',
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate5',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8',
                },
            },
        },
        ghost: {
            true: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
        },
    },
    compoundVariants: [
        {
            color: 'gray',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                color: '$hiContrast',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slateA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$slateA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$slateA4',
                    boxShadow: 'none',
                },
            },
        },
        {
            color: 'blue',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$blueA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$blueA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blueA8, 0 0 0 1px $colors$blueA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$blueA4',
                    boxShadow: 'none',
                },
            },
        },
        {
            color: 'green',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$greenA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$greenA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$greenA8, 0 0 0 1px $colors$greenA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$greenA4',
                    boxShadow: 'none',
                },
            },
        },
        {
            color: 'red',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$redA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$redA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$redA8, 0 0 0 1px $colors$redA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$redA4',
                    boxShadow: 'none',
                },
            },
        },
    ],
    defaultVariants: {
        size: 'medium',
        color: 'gray',
    },
});

var ButtonStyled = styled('button', ButtonCSS);
var ButtonNika = React.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__namespace.createElement(ButtonStyled, __assign({}, props, { ref: forwardedRef }),
        React__namespace.createElement("span", null, props.leftIcon),
        children,
        React__namespace.createElement("span", null, props.rightIcon)));
});
ButtonNika.displayName = 'Button';

function Button(props) {
    return React__namespace.createElement(ButtonNika, __assign({}, props), props.children);
}

exports.Button = Button;
exports.darkTheme = darkTheme;
//# sourceMappingURL=index.js.map
