import { Color } from "./color.enum";

export enum BorderRadius {
    rounded = 'rounded',
    md = 'rounded-md',
    sm = 'rounded-sm',
    lg = 'rounded-lg',
    full = 'rounded-full'
}

export enum Border {
    border = 'border',
    transparent = `border-${Color.transparent}`,
}