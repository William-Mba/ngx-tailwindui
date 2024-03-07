import { RoundedBottom, RoundedLeft, RoundedRight, RoundedSize, RoundedTop } from "../../shared/types/borders/border-radius";

export interface RoundedOptions {
    /**left */
    l?: RoundedLeft,
    /**top */
    t?: RoundedTop,
    /**right */
    r?: RoundedRight,
    /**bottom */
    b?: RoundedBottom
}