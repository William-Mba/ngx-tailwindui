import { Animation } from "../../common/constants/behaviors/animation"
import { RoundedSize } from "../../common/types/borders/border-radius"
import { Opacity } from "../../common/types/effects/opacity"
import { From } from "../../common/types/generics"
import { Overflow } from "../../common/types/layout/overflow"
import { Position } from "../../common/types/layout/position"
import { ThemeConfig } from "../shared/theme.config"

export interface RippleConfig {
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
            light: ThemeConfig,
            dark: ThemeConfig
        }
    }
}

export type Animation = From<typeof Animation>

export const RippleConfig: RippleConfig = {
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