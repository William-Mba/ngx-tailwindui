import { BoxShadow } from "./effects/box-shadow";
import { BoxShadowColor } from "./effects/box-shadow-color";
import { Opacity } from "./effects/opacity";

export const Effects = {
    'box-shadow': BoxShadow,
    'box-shadow-color': BoxShadowColor,
    opacity: Opacity
} as const