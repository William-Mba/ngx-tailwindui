import { BackdropBlur } from "./filters/backdrop-blur";
import { Blur } from "./filters/blur";
import { DropShadow } from "./filters/drop-shadow";

export const Filters = {
    'backdrop-blur': BackdropBlur,
    blur: Blur,
    'drop-shadow': DropShadow,
} as const