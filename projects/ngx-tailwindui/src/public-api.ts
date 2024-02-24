/*------------------------------------------------------------------
*               Public API Surface of ngx-tailwindui               
--------------------------------------------------------------------*/

//----------------------------- MODULES/*

export * from './lib/core/core.module';
export * from './lib/elements/elements.module';
export * from './lib/components/components.module';
export * from './lib/ngx-tailwindui.module';

//----------------------------- CORE/*

export * from './lib/core/design-system/design-system'

export * from './lib/core/shared/directives/icon/icon.directive'

export * from './lib/core/types/colors-palette'
export * from './lib/core/types/common'
export * from './lib/core/types/backgrounds/background-color'
export * from './lib/core/types/borders/border-color'
export * from './lib/core/types/borders/border-radius'
export * from './lib/core/types/effects/box-shadow'
export * from './lib/core/types/layout/aspect-ratio'
export * from './lib/core/types/layout/box-sizing'
export * from './lib/core/types/layout/columns'
export * from './lib/core/types/layout/display'
export * from './lib/core/types/layout/float'
export * from './lib/core/types/layout/layout'
export * from './lib/core/types/layout/object-fit'
export * from './lib/core/types/layout/object-position'
export * from './lib/core/types/layout/position'
export * from './lib/core/types/spacing/margin'
export * from './lib/core/types/spacing/padding'
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