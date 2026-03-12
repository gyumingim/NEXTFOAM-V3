import Link from 'next/link';

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

export const Header = () => {
    return (
        <header className="flex w-full bg-black text-white justify-between items-center py-[0.3vw] px-[1vw] fixed top-0 left-0 z-[10000] border-b border-white/10 backdrop-blur-md bg-black/80">
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
            </nav>
        </header>
    );
};
