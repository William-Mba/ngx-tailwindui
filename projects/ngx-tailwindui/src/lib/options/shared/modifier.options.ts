import { FocusOptions } from "./modifiers/focus.options";
import { HoverOptions } from "./modifiers/hover.options";

export interface ModifierOptions {
    hover?: HoverOptions,
    focus?: FocusOptions,
}
