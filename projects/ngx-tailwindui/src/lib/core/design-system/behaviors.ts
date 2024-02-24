import { Animation } from "./behaviors/animation";
import { TransitionDelay } from "./behaviors/transition-delay";
import { TransitionDuration } from "./behaviors/transition-duration";
import { TransitionProperty } from "./behaviors/transition-property";
import { TransitionTimingFunction } from "./behaviors/transition-timing-function";

export const Behaviors = {
    animation: Animation,
    'transition-delay': TransitionDelay,
    'transition-duration': TransitionDuration,
    'transition-property': TransitionProperty,
    'transition-timing-function': TransitionTimingFunction
} as const