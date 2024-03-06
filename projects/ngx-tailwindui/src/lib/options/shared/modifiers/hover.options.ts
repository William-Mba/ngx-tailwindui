import { BackgroundColor } from "../../../shared/types/backgrounds/background-color";
import { BackgroundOpacity } from "../../../shared/types/backgrounds/background-opacity";
import { BorderColor } from "../../../shared/types/borders/border-color";
import { BorderOpacity } from "../../../shared/types/borders/border-opacity";

export interface HoverOptions {
    bgColor?: BackgroundColor,
    bgOpacity?: BackgroundOpacity,
    borderColor?: BorderColor,
    borderOpacity?: BorderOpacity
}