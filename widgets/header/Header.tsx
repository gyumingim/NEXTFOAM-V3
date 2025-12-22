import Link from 'next/link';

export const Header = () => {
    // 메뉴 데이터 배열화 (관리하기 편하게)
    const navItems = [
        { name: "ABOUT", href: "/about" },
        { name: "PRODUCT", href: "/product" },
        { name: "CONSULT", href: "/consult" },
        { name: "EDUCATION", href: "/education" },
        { name: "DOCS", href: "/docs" },
        { name: "COMMUNITY", href: "/community" },
        { name: "CONTACT US", href: "/contact" },
    ];

    return (
        <header className="flex w-full bg-black text-white justify-between items-center py-[0.3vw] px-[1vw] fixed top-0 left-0 z-[10000] border-b border-white/10 backdrop-blur-md bg-black/80">
            {/* 로고: 클릭 시 메인으로 이동 */}
            <Link href="/" className="text-[1.25vw] font-[500] tracking-tighter hover:opacity-70 transition-opacity">
                NEXTFOAM
            </Link>

            {/* 네비게이션 */}
            <nav className="flex items-center">
                {navItems.map((item) => (
                    <Link 
                        key={item.name}
                        href={item.href}
                        className="ml-[1.75vw] text-[.7vw] font-medium tracking-widest relative group overflow-hidden px-[0.4vw] py-[0.2vw]"
                    >
                        {/* 호버 시 배경 차오르는 엔지니어링 스타일 효과 */}
                        <span className="relative z-10 mix-blend-difference group-hover:text-black transition-colors duration-300">
                            {item.name}
                        </span>
                        <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom" />
                    </Link>
                ))}
            </nav>
        </header>
    );
};