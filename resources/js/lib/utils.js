import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function limitChars(str, limit = 20) {
    return str.length > limit ? str.slice(0, limit) + "..." : str;
}

export function kebabCase(value) {
    return value.toLowerCase().replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}