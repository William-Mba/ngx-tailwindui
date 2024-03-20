import { BorderWidth } from "../../common/types/borders/border-width";
import { OpacityOnDisabled } from "../../common/types/effects/opacity";
import { Gap } from "../../common/types/flex-n-grid/gap";
import { PointerEvents } from "../../common/types/interactivity/pointer-events";
import { UserSelect } from "../../common/types/interactivity/user-select";
import { Overflow } from "../../common/types/layout/overflow";
import { ElementConfig } from "../shared/element.config"
import { SizeConfig } from "../shared/size.config"
import { ThemeConfig } from "../shared/theme.config"
import { TextWrap } from "../../common/types/typography/text-wrap";

export type ButtonVariant = 'filled' | 'outlined' | 'text';

export interface BaseButtonConfig extends ElementConfig {
    gap?: Gap,
    textWrap?: TextWrap,
    overflow?: Overflow,
    userSelect?: UserSelect
}

export interface ButtonConfig {
    base?: BaseButtonConfig,
    variant?: {
        filled?: FilledButtonConfig,
        outlined?: OutlinedButtonConfig,
    },
    size?: SizeConfig,
    disabled?: {
        opacity?: OpacityOnDisabled,
        pointerEvents?: PointerEvents,
    }
}

export interface FilledButtonConfig {
    theme: ThemeConfig,
}

export interface OutlinedButtonConfig {
    border?: BorderWidth,
    theme?: {
        light?: ThemeConfig,
        dark?: ThemeConfig,
    }
}
export const ButtonConfig: ButtonConfig = {
    base: {
        gap: 'gap-2',
        display: 'inline-flex',
        textWrap: 'text-nowrap',
        hAlign: 'justify-center',
        vAlign: 'items-center',
        userSelect: 'select-none',
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
    size: {
        sm: {
            padding: {
                x: 'px-4',
                y: 'py-1.5'
            },
            textSize: 'text-sm',
            rounded: 'rounded-full'
        },
        md: {
            padding: {
                x: 'px-5',
                y: 'py-2.5'
            },
            textSize: 'text-base',
            rounded: 'rounded-full'
        },
        lg: {
            padding: {
                x: 'px-6',
                y: 'py-3'
            },
            textSize: 'text-lg',
            rounded: 'rounded-full'
        }
    },
    disabled: {
        opacity: 'opacity-20',
        pointerEvents: 'pointer-events-none'
    }
}