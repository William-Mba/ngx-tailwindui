export const ButtonOptions: IButtonOptions = {
    base: {
        gap: 'gap-2',
        display: 'inline-flex',
        textWrap: 'text-nowrap',
        hAlign: 'justify-center',
        vAlign: 'items-center',
        fontWeight: 'font-semibold',
        overflow: 'overflow-hidden',
    },
    variant: {
        filled: {
            theme: {
                textColor: 'text-white',
                bgColor: 'bg-indigo-600',
                modifier: {
                    hover: {
                        bgOpacity: 'hover:bg-opacity-85'
                    }
                }
            },
        },
        outlined: {
            border: 'border',
            theme: {
                light: {
                    textColor: 'text-black',
                    borderColor: 'border-black/[.20]',
                    modifier: {
                        hover: {
                            bgColor: 'hover:bg-black/[.03]'
                        }
                    }
                },
                dark: {
                    textColor: 'dark:text-white',
                    borderColor: 'dark:border-white/[.20]',
                    modifier: {
                        hover: {
                            bgColor: 'dark:hover:bg-white/[.03]'
                        }
                    }
                },
            }
        }
    },
    rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        none: 'rounded-none',
        full: 'rounded-full',
    },
    size: {
        sm: {
            padding: 'px-4 py-1.5',
            textSize: 'text-sm',
        },
        md: {
            padding: 'px-5 py-2.5',
            textSize: 'text-md',
        },
        lg: {
            padding: 'px-6 py-3',
            textSize: 'text-lg',
        },
    }
}

export interface IButtonOptions {
    base: BaseButtonOptions,
    variant: {
        filled: FilledButtonOptions,
        outlined: OutlinedButtonOptions,
    },
    rounded: RoundedOptions,
    size: SizeOptions
}

export interface BaseElementOptions {
    display?: string,
    hAlign?: string,
    vAlign?: string,
    fontWeight?: string,
}

export interface BaseButtonOptions extends BaseElementOptions {
    gap?: string,
    textWrap?: string,
    overflow?: string,
}

export interface FilledButtonOptions {
    theme: ThemeOptions,
}

export interface OutlinedButtonOptions {
    border: string,
    theme: {
        light: ThemeOptions,
        dark: ThemeOptions,
    }
}

export interface ThemeOptions {
    textColor?: string,
    bgColor?: string,
    borderColor?: string,
    modifier?: ModifierOptions
}

export interface ModifierOptions {
    hover?: HoverOptions,
}

export interface HoverOptions {
    bgColor?: string,
    bgOpacity?: string
}

export interface RoundedOptions {
    sm: string,
    md: string,
    lg: string,
    none: string,
    full: string,
}

export interface SizeOptions {
    sm: ScaleOptions,
    md: ScaleOptions,
    lg: ScaleOptions
}

export interface ScaleOptions {
    padding: string,
    textSize: string,
}