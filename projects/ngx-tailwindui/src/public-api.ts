//------------------------------------------------------------------\\
//               Public API Surface of ngx-tailwindui               \\
//------------------------------------------------------------------\\

//----------------------------- MODULES/*

export * from './lib/core/core.module';
export * from './lib/elements/elements.module';
export * from './lib/components/components.module';
export * from './lib/ngx-tailwindui.module';

//----------------------------- CORE/*

//----------------------------- core/shared
export * from './lib/core/shared/array-helper.shared'

//----------------------------- core/types
export * from './lib/core/types/colors-palette'
export * from './lib/core/types/common'

//----------------------------- core/types/backgrounds
export * from './lib/core/types/backgrounds/background-color'

//----------------------------- core/types/borders
export * from './lib/core/types/borders/border-color'
export * from './lib/core/types/borders/border-radius'

//----------------------------- core/types/effects
export * from './lib/core/types/effects/box-shadow'


//----------------------------- core/types/layout
export * from './lib/core/types/layout/aspect-ratio'
export * from './lib/core/types/layout/box-sizing'
export * from './lib/core/types/layout/columns'
export * from './lib/core/types/layout/display'
export * from './lib/core/types/layout/float'
export * from './lib/core/types/layout/layout'
export * from './lib/core/types/layout/object-fit'
export * from './lib/core/types/layout/object-position'
export * from './lib/core/types/layout/position'

//----------------------------- core/types/sizing

//----------------------------- core/types/spacing
export * from './lib/core/types/spacing/margin'
export * from './lib/core/types/spacing/padding'

//----------------------------- core/types/typography
export * from './lib/core/types/typography/font-family'
export * from './lib/core/types/typography/font-size'
export * from './lib/core/types/typography/font-style'
export * from './lib/core/types/typography/font-weight'
export * from './lib/core/types/typography/letter-spacing'
export * from './lib/core/types/typography/line-clamp'
export * from './lib/core/types/typography/text-color'

//----------------------------- ELEMENTS/*
export * from './lib/elements/button/button.component'

//----------------------------- COMPONENTS/*
export * from './lib/components/segmented-button/segmented-button.component'