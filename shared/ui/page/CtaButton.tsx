import Link from "next/link";

interface CtaButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    variant?: "default" | "blue";
}

export const CtaButton = ({ href, children, className = "mb-20", target, variant = "default" }: CtaButtonProps) => {
    if (variant === "blue") {
        return (
            <Link
                href={href}
                target={target}
                className={`group relative inline-flex items-center gap-3 overflow-hidden px-8 py-3.5 text-[13px] font-semibold tracking-widest ${className}`}
                style={{ background: "#1427FF" }}
            >
                <span className="relative z-10 text-[#ffffff] transition-colors duration-300">{children}</span>
                <span className="relative z-10 text-[#ffffffcc] transition-colors duration-300 text-[16px] leading-none">→</span>
            </Link>
        );
    }

    return (
        <Link
            href={href}
            target={target}
            className={`group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest ${className}`}
        >
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">{children}</span>
            <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
        </Link>
    );
};
