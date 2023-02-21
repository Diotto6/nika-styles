var $8zHUo$reactdomclient = require("react-dom/client");
var $8zHUo$radixuicolors = require("@radix-ui/colors");
var $8zHUo$stitchescore = require("@stitches/core");
var $8zHUo$stitchesreact = require("@stitches/react");
var $8zHUo$react = require("react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





const $2ee8fe7a8862a40c$var$button = (0, $8zHUo$stitchescore.css)({
    variants: {
        size: {
            small: {
                fontSize: "13px",
                height: "25px",
                paddingRight: "10px",
                paddingLeft: "10px"
            },
            large: {
                fontSize: "15px",
                height: "35px",
                paddingLeft: "15px",
                paddingRight: "15px"
            }
        },
        border: {
            a1: {
                borderRadius: "16px"
            },
            a2: {
                borderRadius: "6px"
            }
        },
        color: {
            dark: {
                backgroundColor: `${(0, $8zHUo$radixuicolors.blackA).blackA12}`,
                color: "white",
                "&:hover": {
                    backgroundColor: `${(0, $8zHUo$radixuicolors.blackA).blackA11}`
                }
            },
            violet: {
                backgroundColor: "blueviolet",
                color: "white",
                "&:hover": {
                    backgroundColor: "darkviolet"
                }
            },
            gray: {
                backgroundColor: "gainsboro",
                "&:hover": {
                    backgroundColor: "lightgray"
                }
            }
        }
    },
    defaultVariants: {
        color: "dark",
        border: "a2",
        size: "large"
    }
});
const $2ee8fe7a8862a40c$var$ButtonCSS = (0, $8zHUo$stitchesreact.styled)("button", $2ee8fe7a8862a40c$var$button);
function $2ee8fe7a8862a40c$var$Button({ children: children , leftIcon: leftIcon , rightIcon: rightIcon , ...props }, ref) {
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8zHUo$react))).createElement($2ee8fe7a8862a40c$var$ButtonCSS, {
        ref: ref,
        ...props
    }, children, "'ola'");
}
var $2ee8fe7a8862a40c$export$2e2bcd8739ae039 = $2ee8fe7a8862a40c$var$Button;
$2ee8fe7a8862a40c$var$Button.displayName = "Button";


const $fd046e7a82b9f872$var$button = document.createElement("button");
const $fd046e7a82b9f872$var$container = document.getElementById("app");
const $fd046e7a82b9f872$var$root = (0, $8zHUo$reactdomclient.createRoot)($fd046e7a82b9f872$var$container);
$fd046e7a82b9f872$var$root.render((0, $2ee8fe7a8862a40c$export$2e2bcd8739ae039)("ola", $fd046e7a82b9f872$var$button));


//# sourceMappingURL=main.js.map
