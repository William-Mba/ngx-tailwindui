import { BorderWidth } from "../shared/types/borders/border-width";
import { Gap } from "../shared/types/flex-n-grid/gap";
import { Overflow } from "../shared/types/layout/overflow";
import { TextWrap } from "../shared/types/typography/text-wrap";
import { ElementOptions } from "./shared/element.options"
import { ShapeOptions } from "./shared/shape.options"
import { SizeOptions } from "./shared/size.options"
import { ThemeOptions } from "./shared/theme.options"

export type ButtonVariant = 'filled' | 'outlined' | 'text';

export interface BaseButtonOptions extends ElementOptions {
    gap?: Gap,
    textWrap?: TextWrap,
    overflow?: Overflow,
}

export interface ButtonOptions {
    base: BaseButtonOptions,
    variant: {
        filled: FilledButtonOptions,
        outlined: OutlinedButtonOptions,
    },
    rounded: ShapeOptions,
    size: SizeOptions
}

export interface FilledButtonOptions {
    theme: ThemeOptions,
}

export interface OutlinedButtonOptions {
    border: BorderWidth,
    theme: {
        light: ThemeOptions,
        dark: ThemeOptions,
    }
}

export const ButtonOptions: ButtonOptions = {
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
                    borderColor: 'border-black',
                    borderOpacity: 'border-opacity-15',
                    modifier: {
                        hover: {
                            bgColor: 'hover:bg-black',
                            bgOpacity: 'hover:bg-opacity-5',
                            borderOpacity: 'hover:border-opacity-25'
                        },
                        focus: {
                            borderOpacity: 'focus:border-opacity-30'
                        }
                    }
                },
                dark: {
                    textColor: 'dark:text-white',
                    borderColor: 'dark:border-white',
                    borderOpacity: 'dark:border-opacity-15',
                    modifier: {
                        hover: {
                            bgColor: 'dark:hover:bg-white',
                            bgOpacity: 'dark:hover:bg-opacity-5',
                        },
                        focus: {
                            borderOpacity: 'dark:focus:border-opacity-30'
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
            padding: {
                x: 'px-4',
                y: 'py-1.5'
            },
            textSize: 'text-sm',
        },
        md: {
            padding: {
                x: 'px-5',
                y: 'py-2.5'
            },
            textSize: 'text-base',
        },
        lg: {
            padding: {
                x: 'px-6',
                y: 'py-3'
            },
            textSize: 'text-lg',
        }
    }
}