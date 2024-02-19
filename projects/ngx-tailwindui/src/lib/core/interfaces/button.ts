import { ClassName, Variant } from "../../core/types/common";
import { BorderRadius } from "../../core/types/borders/border-radius";
import { FontSize } from "../../core/types/typography/font-size";
import { Shadow } from "../../core/types/effects/box-shadow";
import { BgColor } from "../../core/types/backgrounds/background-color";
import { TextColor } from "../../core/types/typography/text-color";
import { FontWeight } from "../../core/types/typography/font-weight";
import { OutlineColor } from "../types/borders/outline-color";

export interface FilledButton extends OutlinedButton {
    shadow: Shadow,
    bgColor: BgColor,
}

export interface OutlinedButton extends TextButton {
    outlineColor: OutlineColor
    borderRadius: BorderRadius,
}

export interface TextButton {
    variant: Variant,
    className?: ClassName,
    fontSize: FontSize,
    textColor: TextColor,
    fontWeight: FontWeight,
    padding: string
}

export interface Button extends FilledButton, OutlinedButton, TextButton {}