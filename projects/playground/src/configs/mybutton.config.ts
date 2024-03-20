import { ButtonConfig } from "ngx-tailwindui";

export const MyButtonConfig: ButtonConfig = {
    variant: {
        filled: {
            theme: {
                bgColor: 'bg-pink-800',
                bgGradient: {
                    direction: 'bg-gradient-to-r',
                    from: 'from-green-600',
                    to: 'to-indigo-800',
                    modifier: {
                        hover: {
                            from: 'hover:from-pink-500',
                            to: 'hover:to-yellow-500'
                        }
                    }
                }
            }
        },
        outlined: {
            border: 'border-4',
            theme: {
                dark: {
                    borderColor: 'dark:border-pink-600'
                },
                light: {
                    borderColor: 'border-pink-600'
                }
            }
        }
    }
}