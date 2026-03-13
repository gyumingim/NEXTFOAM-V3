interface BodyTextProps {
    children: React.ReactNode;
    dim?: boolean;
    className?: string;
}

export const BodyText = ({ children, dim = false, className = "" }: BodyTextProps) => (
    <p className={`leading-[1.9] ${dim ? "text-white/70 text-[1.25rem]" : "text-white text-[1.25rem]"} ${className}`}>
        {children}
    </p>
);
