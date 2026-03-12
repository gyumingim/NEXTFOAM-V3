"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Link from "next/link";

export default function BaramPage() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-[40px] pt-[160px] pb-[160px]">

                <h1 className="text-white text-[72px] font-[700] tracking-tighter leading-[1.0] mb-[24px]">
                    No More Pay<br />
                    License Fee<br />
                    <span className="text-white/25">for CFD.</span>
                </h1>

                <p className="text-white/50 text-[13px] font-[400] tracking-[0.2em] uppercase mb-[56px]">
                    BARAM® — Open Source CFD
                </p>

                <p className="text-white text-[17px] leading-[1.9] mb-[20px]">
                    우리는 스마트폰에서 필요한 앱을 그냥 설치해서 씁니다.
                    AI로 무엇인가를 할 때 공개된 코드를 내려 받아 사용합니다.
                </p>
                <p className="text-white text-[17px] leading-[1.9] mb-[20px]">
                    그런데 왜 CFD(열유동해석)는<br />비싼 돈을 내고 사용할까요?
                </p>
                <p className="text-white/65 text-[15px] leading-[1.9] mb-[56px]">
                    BARAM®은 누구나 사용할 수 있고, 개발에 참여할 수 있습니다.
                </p>

                <Link
                    href="https://baramcfd.org"
                    target="_blank"
                    className="group relative inline-flex items-center gap-[12px] overflow-hidden border border-white px-[32px] py-[14px] text-[13px] font-medium tracking-widest mb-[96px]"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">Step into BARAM</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                <div className="border-t border-white/20 pt-[56px] grid grid-cols-3 gap-[1px] bg-white/10">
                    {[
                        { label: "LICENSE", value: "Free", sub: "영구 무료" },
                        { label: "BASE", value: "OpenFOAM", sub: "오픈소스 기반" },
                        { label: "USERS", value: "100+", sub: "기관 사용 중" },
                    ].map((item) => (
                        <div key={item.label} className="bg-black px-[28px] py-[36px] flex flex-col gap-[10px]">
                            <span className="text-white/50 text-[11px] tracking-[0.2em] uppercase">{item.label}</span>
                            <span className="text-white text-[48px] font-[700] tracking-tighter leading-none">{item.value}</span>
                            <span className="text-white/60 text-[13px]">{item.sub}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
