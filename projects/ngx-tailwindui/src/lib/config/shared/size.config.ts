import { ScaleConfig } from "./scale.config";

export interface SizeConfig {
    sm?: ScaleConfig,
    md?: ScaleConfig,
    lg?: ScaleConfig
}

/**Size type */
export type SizeType = 'sm' | 'md' | 'lg';