interface PageHeroProps {
    title: string;
    subtitle: string;
    className?: string;
}

export const PageHero = ({ title, subtitle, className = "mb-14" }: PageHeroProps) => (
    <div className={className}>
        <h1 className="text-white text-[5rem] font-[700] tracking-tighter leading-none mb-4">{title}</h1>
        <p className="text-white/65 text-[1rem] tracking-[0.1em] uppercase">{subtitle}</p>
    </div>
);
