interface KeyValueRow {
    label: string;
    value: string;
}

interface KeyValueTableProps {
    title: string;
    rows: KeyValueRow[];
    labelWidth?: string;
    className?: string;
}

export const KeyValueTable = ({ title, rows, labelWidth = "120px", className = "mb-14" }: KeyValueTableProps) => (
    <div className={`border border-white/25 ${className}`}>
        <div className="px-6 py-4 border-b border-white/25">
            <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{title}</span>
        </div>
        {rows.map((row, i) => (
            <div key={i} className={`grid border-b border-white/15 last:border-b-0`} style={{ gridTemplateColumns: `${labelWidth} 1fr` }}>
                <div className="px-6 py-4 border-r border-white/15 flex items-center">
                    <span className="text-white/50 text-[12px] tracking-[0.1em] uppercase">{row.label}</span>
                </div>
                <div className="px-6 py-4 flex items-center">
                    <span className="text-white text-[14px] leading-[1.6]">{row.value}</span>
                </div>
            </div>
        ))}
    </div>
);
