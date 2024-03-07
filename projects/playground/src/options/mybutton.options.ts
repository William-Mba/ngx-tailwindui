import { ButtonOptions } from "ngx-tailwindui";

export const MyButtonOptions: ButtonOptions = {
    variant: {
        filled: {
            theme: {
                bgColor: 'bg-pink-600'
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