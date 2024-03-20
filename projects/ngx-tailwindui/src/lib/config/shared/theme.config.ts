import { BackgroundColor } from "../../common/types/backgrounds/background-color";
import { BorderColor } from "../../common/types/borders/border-color";
import { BorderOpacity } from "../../common/types/borders/border-opacity";
import { TextColor } from "../../common/types/typography/text-color";
import { ModifierConfig } from "./modifier.config";

export interface ThemeConfig {
    textColor?: TextColor,
    bgColor?: BackgroundColor,
    bgGradient?: BackgroundGradient,
    borderColor?: BorderColor,
    borderOpacity?: BorderOpacity,
    modifier?: ModifierConfig
}

export type BackgroundGradient = {
    direction: 'bg-gradient-to-r' | 'bg-gradient-to-l',
    from: string,
    to: string,
    modifier?: Record<string, object>
}