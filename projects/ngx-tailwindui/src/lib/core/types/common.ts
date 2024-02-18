export type ClassName = string

export type FullOrNone = 'full' | 'none'

export type Variant = 'filled' | 'outlined' | 'text'

export type IconVariant = Exclude<Variant, 'text'> | 'standard'

export type Size = 'sm' | 'md' | 'lg' | FullOrNone