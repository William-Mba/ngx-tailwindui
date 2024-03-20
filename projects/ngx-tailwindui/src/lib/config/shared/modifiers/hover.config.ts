import { BackgroundColor } from "../../../common/types/backgrounds/background-color";
import { BackgroundOpacity } from "../../../common/types/backgrounds/background-opacity";
import { BorderColor } from "../../../common/types/borders/border-color";
import { BorderOpacity } from "../../../common/types/borders/border-opacity";

export interface HoverConfig {
    bgColor?: BackgroundColor,
    bgOpacity?: BackgroundOpacity,
    borderColor?: BorderColor,
    borderOpacity?: BorderOpacity
}