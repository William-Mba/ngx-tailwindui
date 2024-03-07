import { BackgroundColor } from "../../shared/types/backgrounds/background-color";
import { BorderColor } from "../../shared/types/borders/border-color";
import { BorderOpacity } from "../../shared/types/borders/border-opacity";
import { TextColor } from "../../shared/types/typography/text-color";
import { ModifierOptions } from "./modifier.options";

export interface ThemeOptions {
    textColor?: TextColor,
    bgColor?: BackgroundColor,
    borderColor?: BorderColor,
    borderOpacity?: BorderOpacity,
    modifier?: ModifierOptions
}