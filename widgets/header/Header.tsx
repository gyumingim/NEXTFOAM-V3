"use client"

import Link from 'next/link';
import { useTheme } from '@/shared/providers/ThemeProvider';

const dropdownMenus: Record<string, { name: string; href: string }[]> = {
    PRODUCT: [
        { name: "Baram", href: "/product/baram" },
        { name: "Famus", href: "/product/famus" },
        { name: "공력 DB 프레임워크", href: "/product/aero-db" },
        { name: "BaramGIS", href: "/product/baramgis" },
    ],
    CONSULT: [
        { name: "서비스 소개", href: "/consult/intro" },
        { name: "컨설팅 포트폴리오", href: "/consult/portfolio" },
        { name: "프로젝트 수행실적", href: "/consult/projects" },
    ],
    EDUCATION: [
        { name: "교육 내용", href: "/education/overview" },
        { name: "교육 일정 및 신청", href: "/education/schedule" },
        { name: "비행체 공력 성능 평가 교육", href: "/education/aero" },
    ],
    COMMUNITY: [
        { name: "2025 12th OKUCC", href: "/community/okucc-2025" },
        { name: "OKUCC", href: "/community/okucc" },
    ],
};

const navItems = [
    { name: "PRODUCT", href: "/product" },
    { name: "CONSULT", href: "/consult" },
    { name: "EDUCATION", href: "/education" },
    { name: "DOCS", href: "/docs" },
    { name: "COMMUNITY", href: "/community" },
    { name: "CONTACT US", href: "/contact" },
];

const SunIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        /* bg-black/80 → 라이트모드에서 CSS 변수에 의해 bg-[#f0f0f0]/80 으로 자동 전환 */
        <header className="flex w-full bg-black/80 text-white justify-between items-center py-[0.3vw] px-[1vw] fixed top-0 left-0 z-[10000] border-b border-white/10 backdrop-blur-md transition-colors duration-300">
            {/* 로고 */}
            <Link href="/" className="text-[1.25vw] font-[500] tracking-tighter hover:opacity-70 transition-opacity">
                NEXTFOAM
            </Link>

            {/* 네비게이션 */}
            <nav className="flex items-center">
                {navItems.map((item) => {
                    const dropdown = dropdownMenus[item.name];

                    if (dropdown) {
                        return (
                            <div key={item.name} className="group relative ml-[1.75vw]">
                                {/* 라벨 */}
                                <div className="relative overflow-hidden px-[0.4vw] py-[0.2vw] cursor-pointer text-[.7vw] font-medium tracking-widest">
                                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                                        {item.name}
                                    </span>
                                    <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom" />
                                </div>

                                {/* 드롭다운 */}
                                <div className="absolute top-full left-0 pt-[0.6vw] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    <div className="bg-black border border-white/10 min-w-[12vw] flex flex-col pointer-events-none group-hover:pointer-events-auto">
                                        {dropdown.map((subItem, idx) => (
                                            <Link
                                                key={idx}
                                                href={subItem.href}
                                                className="group/item relative overflow-hidden px-[1vw] py-[0.6vw] text-[0.65vw] font-medium tracking-widest"
                                            >
                                                <span className="relative z-10 text-white/60 group-hover/item:text-black transition-colors duration-200">
                                                    {subItem.name}
                                                </span>
                                                <div className="absolute inset-0 bg-white scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative ml-[1.75vw] overflow-hidden px-[0.4vw] py-[0.2vw] text-[.7vw] font-medium tracking-widest"
                        >
                            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                                {item.name}
                            </span>
                            <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom" />
                        </Link>
                    );
                })}

                {/* 테마 토글 버튼 */}
                <button
                    onClick={toggleTheme}
                    aria-label={isDark ? "라이트모드로 전환" : "다크모드로 전환"}
                    className="ml-[1.75vw] flex items-center justify-center w-[2vw] h-[2vw] min-w-[28px] min-h-[28px] border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
            </nav>
        </header>
    );
};
