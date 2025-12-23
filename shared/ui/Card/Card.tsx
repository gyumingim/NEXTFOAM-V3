import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

interface CardProps {
    image?: StaticImageData | string;
    title: string;
    description?: string;
    category?: string;
    date?: string;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export const Card = ({
    image,
    title,
    description,
    category,
    date,
    className,
    children,
    onClick
}: CardProps) => {
    return (
        <div
            className={cn(
                'group relative overflow-hidden bg-neutral-900/50 border border-neutral-800 hover:border-white/50 transition-all duration-500 cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            {image && (
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="p-6">
                {(category || date) && (
                    <div className="flex items-center justify-between mb-3 text-xs tracking-wider text-neutral-500 uppercase">
                        {category && <span>{category}</span>}
                        {date && <span>{date}</span>}
                    </div>
                )}

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                    {title}
                </h3>

                {description && (
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                        {description}
                    </p>
                )}

                {children}
            </div>
        </div>
    );
};
