import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    fullHeight?: boolean;
    id?: string;
}

export const Section = ({
    children,
    className = '',
    fullHeight = false,
    id
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`relative bg-black ${fullHeight ? 'min-h-screen' : 'py-20 md:py-32'} ${className}`}
        >
            {children}
        </section>
    );
};
