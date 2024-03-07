import { ButtonOptions } from "ngx-tailwindui";

export const AppButtonOptions: ButtonOptions = {
    variant: {
        filled: {
            theme: {
                bgColor: 'bg-rose-600'
            }
        },
        outlined: {
            border: 'border-4',
            theme: {
                dark: {
                    borderColor: 'dark:border-indigo-600'
                },
                light: {
                    borderColor: 'border-indigo-600'
                }
            }
        }
    }
}