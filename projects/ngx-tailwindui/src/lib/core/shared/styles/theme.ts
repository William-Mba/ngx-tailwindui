import { Injectable } from "@angular/core"
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

@Injectable({
    providedIn: 'root'
})
export class Theme {
    backgrounds = Backgrounds
    behaviors = Behaviors
    borders = Borders
    colors = ColorPalette
    effects = Effects
    filters = Filters
    'flex-n-grid' = FlexnGrid
    layout = Layout
    sizing = Sizing
    spacing = Spacing
    tables = Tables
    transforms = Transforms
    typography = Typography

    dark(className: string): string {
        return ` dark:${className} `
    }

    hover(className: string): string {
        return ` hover:${className} `
    }

    focus(className: string): string {
        return ` focus:${className} `
    }
}