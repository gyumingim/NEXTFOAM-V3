import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = ({ children, className = '', size = 'xl' }: ContainerProps) => {
    const sizeClasses = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        xl: 'max-w-[1400px]',
        full: 'max-w-full'
    }[size];

    return (
        <div className={`mx-auto px-6 md:px-12 ${sizeClasses} ${className}`}>
            {children}
        </div>
    );
};
