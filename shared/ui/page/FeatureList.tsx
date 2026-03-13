interface FeatureListProps {
    title: string;
    items: string[];
    className?: string;
}

export const FeatureList = ({ title, items, className = "mb-6" }: FeatureListProps) => (
    <div className={`border border-white/25 ${className}`}>
        <div className="px-6 py-4 border-b border-white/25">
            <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{title}</span>
        </div>
        {items.map((item, i) => (
            <div key={i} className="flex items-center gap-5 px-6 py-4 border-b border-white/15 last:border-b-0">
                <span className="text-white/40 text-[12px] font-mono w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white text-[15px]">{item}</span>
            </div>
        ))}
    </div>
);
