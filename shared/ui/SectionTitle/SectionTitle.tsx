interface SectionTitleProps {
    label?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

export const SectionTitle = ({
    label,
    title,
    subtitle,
    align = 'left'
}: SectionTitleProps) => {
    const alignClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }[align];

    return (
        <div className={`mb-16 ${alignClass}`}>
            {label && (
                <div className="mb-4 text-sm tracking-widest text-neutral-500 uppercase">
                    {label}
                </div>
            )}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
