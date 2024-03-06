import { RoundedBottom, RoundedLeft, RoundedRight, RoundedSize, RoundedTop } from "../../shared/types/borders/border-radius";

export interface ShapeOptions {
    sm: RoundedSize | {
        /**right */
        r?: RoundedRight,
        /**left */
        l?: RoundedLeft,
        /**top */
        t?: RoundedTop,
        /**bottom */
        b?: RoundedBottom,
    },
    md: RoundedSize | {
        /**right */
        r?: RoundedRight,
        /**left */
        l?: RoundedLeft,
        /**top */
        t?: RoundedTop,
        /**bottom */
        b?: RoundedBottom,
    },
    lg: RoundedSize | {
        /**right */
        r?: RoundedRight,
        /**left */
        l?: RoundedLeft,
        /**top */
        t?: RoundedTop,
        /**bottom */
        b?: RoundedBottom,
    },
    none: 'rounded-none',
    full: 'rounded-full'
}

export type Shape = 'sm' | 'md' | 'lg' | 'none' | 'full';