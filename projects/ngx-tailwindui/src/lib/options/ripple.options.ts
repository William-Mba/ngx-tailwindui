import { Animation } from "../shared/constants/behaviors/animation"
import { RoundedSize } from "../shared/types/borders/border-radius"
import { Opacity } from "../shared/types/effects/opacity"
import { From } from "../shared/types/generics"
import { Overflow } from "../shared/types/layout/overflow"
import { Position } from "../shared/types/layout/position"
import { ThemeOptions } from "./shared/theme.options"

export interface RippleOptions {
    host: {
        position: Position,
        overflow: Overflow,
    },
    element: {
        position: Position,
        opacity: Opacity,
        animation: Animation,
        rounded: RoundedSize,
        theme: {
            light: ThemeOptions,
            dark: ThemeOptions
        }
    }
}

export type Animation = From<typeof Animation>

export const RippleOptions: RippleOptions = {
    host: {
        position: 'relative',
        overflow: 'overflow-hidden',
    },
    element: {
        position: 'absolute',
        opacity: 'opacity-50',
        animation: 'animate-ping',
        rounded: 'rounded-full',
        theme: {
            light: {
                bgColor: 'bg-black'
            },
            dark: {
                bgColor: 'dark:bg-white'
            }
        }
    }
}