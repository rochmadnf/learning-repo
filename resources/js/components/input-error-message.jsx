import { cn } from '@/lib/utils';

export function InputErrorMessage({ className, message, ...props }) {
    return (
        <p {...props} className={cn('mt-1 text-sm text-destructive first-letter:uppercase', className)}>
            {message}
        </p>
    );
}
