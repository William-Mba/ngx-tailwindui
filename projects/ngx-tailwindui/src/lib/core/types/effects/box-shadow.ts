import { Size } from "../common";

export type Shadow = `shadow-${Exclude<Size, 'full'>}`