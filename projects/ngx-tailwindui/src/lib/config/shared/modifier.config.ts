import { FocusConfig } from "./modifiers/focus.config";
import { HoverConfig } from "./modifiers/hover.config";

export interface ModifierConfig {
    hover?: HoverConfig,
    focus?: FocusConfig,
}
