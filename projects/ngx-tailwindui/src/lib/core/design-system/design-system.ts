import { Backgrounds } from "./backgrounds"
import { Behaviors } from "./behaviors"
import { Borders } from "./borders"
import { ColorPalette } from "./colors-palette"
import { Effects } from "./effects"
import { Filters } from "./filters"
import { Layout } from "./layout"
import { Sizing } from "./sizing"
import { Tables } from "./tables"
import { Transforms } from "./transforms"
import { Typography } from "./typography"
import { Spacing } from "./spacing"
import { FlexnGrid } from "./flex-and-grid"
import { Interactivity } from "./interactivity"

export abstract class DesignSystem {
    static readonly backgrounds = Backgrounds
    static readonly behaviors = Behaviors
    static readonly borders = Borders
    static readonly colors = ColorPalette
    static readonly effects = Effects
    static readonly filters = Filters
    static readonly 'flex-n-grid' = FlexnGrid
    static readonly interactivity = Interactivity
    static readonly layout = Layout
    static readonly sizing = Sizing
    static readonly spacing = Spacing
    static readonly tables = Tables
    static readonly transforms = Transforms
    static readonly typography = Typography
}