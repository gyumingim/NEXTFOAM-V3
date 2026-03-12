"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Image from "next/image";

import img1 from "@/public/okucc_2025/okucc1.png";
import img2 from "@/public/okucc_2025/kakaotalk_20250923_172004431-2.jpg";
import img3 from "@/public/okucc_2025/kakaotalk_20250923_172004431_09.jpg";
import img4 from "@/public/okucc_2025/kakaotalk_20250923_172004431_17.jpg";
import img5 from "@/public/okucc_2025/kakaotalk_20250923_172004431_18.jpg";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

export default function Okucc2025Page() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <SectionLabel>Community · 2025</SectionLabel>
                <h1 className="text-white text-[56px] font-bold tracking-tighter leading-none mb-4">
                    제12회 OKUCC
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-10">
                    OpenFOAM Korea Users&apos; Community Conference — 2025 Gyeongju
                </p>

                {/* Hero Image */}
                <div className="relative w-full h-[420px] overflow-hidden mb-14">
                    <Image
                        src={img1}
                        alt="OKUCC 2025 경주"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Closing Message */}
                <div className="border-t border-white/20 pt-12 mb-14">
                    <p className="text-white text-[22px] font-medium tracking-tight leading-snug mb-8">
                        제12회 OKUCC가 성공적으로 마무리되었습니다!
                    </p>
                    <div className="flex flex-col gap-5">
                        <p className="text-white/80 text-[15px] leading-[1.9]">
                            올해 컨퍼런스에서는 국내외 OpenFOAM 사용자들이 한자리에 모여 연구 성과, 산업 적용 사례, 최신 기술 동향을 공유하며 활발한 토론과 교류의 장을 이루었습니다.
                        </p>
                        <p className="text-white/80 text-[15px] leading-[1.9]">
                            참석해 주신 모든 발표자, 참가자, 후원사 여러분께 깊이 감사드립니다.
                        </p>
                        <p className="text-white/80 text-[15px] leading-[1.9]">
                            함께 나눈 지식과 경험이 한국 OpenFOAM 커뮤니티의 성장과 발전에 큰 밑거름이 될 것으로 기대합니다.
                        </p>
                        <p className="text-white/80 text-[15px] leading-[1.9]">
                            내년에도 아름다운 도시에서 더 크게, 더 알차게 준비해서 열릴 예정이니 학생 · 연구원 · 엔지니어 여러분들의 많은 관심 부탁드립니다.
                        </p>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="border-t border-white/20 pt-12 mb-14">
                    <SectionLabel>Gallery</SectionLabel>

                    <div className="flex flex-col gap-px bg-white/10">
                        <div className="relative w-full h-80 bg-black overflow-hidden">
                            <Image src={img2} alt="OKUCC 2025 현장 1" fill className="object-cover" />
                        </div>
                        <div className="grid grid-cols-2 gap-px">
                            <div className="relative w-full h-60 bg-black overflow-hidden">
                                <Image src={img3} alt="OKUCC 2025 현장 2" fill className="object-cover" />
                            </div>
                            <div className="relative w-full h-60 bg-black overflow-hidden">
                                <Image src={img4} alt="OKUCC 2025 현장 3" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="relative w-full h-80 bg-black overflow-hidden">
                            <Image src={img5} alt="OKUCC 2025 현장 4" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Next Conference Notice */}
                <div className="border border-white/15 px-8 py-8">
                    <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-4">Next OKUCC</span>
                    <p className="text-white text-[16px] leading-[1.8]">
                        제13회 OKUCC는 2026년에 개최 예정입니다.<br />
                        <span className="text-white/60 text-[14px]">더 많은 분들의 관심과 참여를 기다립니다.</span>
                    </p>
                </div>

            </div>
        </div>
    );
}
