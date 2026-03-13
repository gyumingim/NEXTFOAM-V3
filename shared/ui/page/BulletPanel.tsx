interface BulletPanelProps {
    title: string;
    items: string[];
    tags?: string[];
}

export const BulletPanel = ({ title, items, tags }: BulletPanelProps) => (
    <div className="bg-black">
        <div className="px-6 py-4 border-b border-white/25">
            <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{title}</span>
        </div>
        {tags && (
            <div className="px-6 py-5 flex flex-wrap gap-2 border-b border-white/15">
                {tags.map((tag) => (
                    <span key={tag} className="border border-white/30 text-white text-[12px] tracking-widest px-3 py-1.5">{tag}</span>
                ))}
            </div>
        )}
        <div className="flex flex-col">
            {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-3.5 border-b border-white/10 last:border-b-0">
                    <span className="w-1 h-1 bg-white/40 rounded-full shrink-0 mt-2" />
                    <span className="text-white text-[14px] leading-[1.7]">{item}</span>
                </div>
            ))}
        </div>
    </div>
);
