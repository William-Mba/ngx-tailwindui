export const RippleOptions = {
    host: {
        position: 'relative',
        overflow: 'overflow-hidden',
    },
    element: {
        position: 'absolute',
        scale: 'absolute',
        display: 'absolute',
        opacity: 'opacity-50',
        animation: 'animate-ping',
        shape: 'rounded-full',
        theme: {
            light: {
                bgColor: 'bg-black'
            },
            dark: {
                bgColor: 'dark:bg-white'
            }
        }
    }
} as const