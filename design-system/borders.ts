import { BorderColor } from "./borders/border-color";
import { BorderOpacity } from "./borders/border-opacity";
import { BorderRadius } from "./borders/border-radius";
import { BorderStyle } from "./borders/border-style";
import { BorderWidth } from "./borders/border-width";
import { OutlineColor } from "./borders/outline-color";
import { OutlineStyle } from "./borders/outline-style";
import { OutlineWidth } from "./borders/outline-width";
import { RingColor } from "./borders/ring-color";
import { RingWidth } from "./borders/ring-width";

export const Borders = {
    'border-color': BorderColor,
    'border-opacity': BorderOpacity,
    'border-radius': BorderRadius,
    'border-style': BorderStyle,
    'border-width': BorderWidth,
    'outline-color': OutlineColor,
    'outline-style': OutlineStyle,
    'outline-width': OutlineWidth,
    'ring-color': RingColor,
    'ring-width': RingWidth,
} as const