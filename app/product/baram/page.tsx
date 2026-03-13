"use client"
import { PageLayout } from "@/shared/ui/page";
import Image from "next/image";
import Link from "next/link";
import baramImg from "@/public/baram-1-1.webp";

export default function BaramPage() {
    return (
        <PageLayout>

            <h1 className="text-white text-[72px] font-[700] tracking-tighter leading-[1.0] mb-[24px]">
                No More Pay<br />
                License Fee<br />
                <span className="text-white/60">for CFD.</span>
            </h1>

            <p className="text-white/50 text-[13px] font-[400] tracking-[0.2em] uppercase mb-[56px]">
                BARAM® — Open Source CFD
            </p>

            <p className="text-white text-[1.25rem] leading-[1.9] mb-[20px]">
                우리는 스마트폰에서 필요한 앱을 그냥 설치해서 씁니다. <br/>
                코딩 할 때는 공개된 코드를 내려 받아 사용합니다.
            </p>
            <p className="text-white text-[1.25rem] leading-[1.9] mb-[20px]">
                그런데 왜 CFD(열유동해석)는 비싼 돈을 내고 사용할까요?
            </p>
            <p className="text-white/80 text-[1.25rem] leading-[1.9] mb-[56px]">
                BARAM®은 누구나 사용할 수 있고, 개발에 참여할 수 있습니다.
            </p>

            {/* 제품 이미지 */}
            <div className="relative w-full overflow-hidden mb-14 border border-white/15">
                <Image
                    src={baramImg}
                    alt="BARAM CFD Interface"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Step into BARAM 버튼 */}
            <div className="flex flex-col items-start gap-3 mb-24">
                <p className="text-white/50 text-[1rem] tracking-[0.1rem] uppercase">무료로 시작하세요</p>
                <Link
                    href="https://baramcfd.org"
                    target="_blank"
                    className="group relative inline-flex items-center gap-4 overflow-hidden px-10 py-[18px] text-[14px] font-semibold tracking-widest uppercase"
                    style={{ background: "#1427FF" }}
                >
                    <span className="relative z-10 text-[#ffffff] transition-colors duration-300">Step into BARAM</span>
                    <span className="relative z-10 text-[#ffffffcc] text-[18px] leading-none transition-all duration-300 group-hover:translate-x-1">→</span>
                    <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>
            </div>

        </PageLayout>
    );
}
