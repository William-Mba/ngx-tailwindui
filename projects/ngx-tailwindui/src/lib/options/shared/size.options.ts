import { ScaleOptions } from "./scale.options";

export interface SizeOptions {
    sm?: ScaleOptions,
    md?: ScaleOptions,
    lg?: ScaleOptions
}

export type Size = 'sm' | 'md' | 'lg';