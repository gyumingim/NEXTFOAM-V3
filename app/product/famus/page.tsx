"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Image from "next/image";
import Link from "next/link";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-[12px] mb-[32px]">
        <div className="w-[24px] h-[1px] bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

export default function FamusPage() {
    const features = [
        "압축성 simulation solver",
        "CAD clean up",
        "자동 질점계 생성",
        "6 DoF 이동물체 해석",
        "평형/비평형 플라즈마 해석",
    ];

    const numerics = [
        { label: "solver", value: "Meshless CFD solver" },
        { label: "기법", value: "Geometric Conservation Least Squares Method" },
        { label: "수치기법", value: "AUSMPW+, LU-SGS, Dual time stepping" },
        { label: "전처리", value: "CAD clean up, 표면격자" },
    ];

    const cadFormats = ["IGES", "STL", "STEP"];

    const motionFeatures = [
        "6DoF 운동 해석",
        "외력 작용 물체 / 추진 물체 해석",
        "강제 운동(Prescribed motion) 입력",
        "이동물체 궤적 및 자세각 출력",
    ];

    const validations = [
        { title: "EGLIN 외장 분리 문제", desc: "분리체 다물체 해석", img: "/famus/famus1.jpg" },
        { title: "Sparrow III 미사일", desc: "초음속 유동", img: "/famus/famus2.jpg" },
        { title: "ONERA M6 날개", desc: "천음속 유동 해석", img: "/famus/famus3.jpg" },
    ];

    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-[40px] pt-[160px] pb-[160px]">

                {/* Hero */}
                <h1 className="text-white text-[72px] font-[700] tracking-tighter leading-[1.0] mb-[16px]">FAMUS</h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-[56px]">
                    Fully Automated Multi-physics Simulator
                </p>

                <p className="text-white text-[17px] leading-[1.9] mb-[20px]">
                    FAMUS는 무격자 계산 기법을 사용하여 공간 격자 생성이 필요 없는 압축성 CFD 해석 프로그램입니다.
                    국방과학연구소의 압축성 무격자 기술을 이전 받아 넥스트폼과 서울대 극초음속연구실에서 공동 개발하였습니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-[20px]">
                    공간상에 분포된 질점만을 사용하여 유한체적법과 유사한 방법으로 계산하기 때문에
                    입자를 라그랑지안 기법으로 계산하거나 Lattice Boltzmann Method를 사용하는 기존 프로그램과는 완전히 다릅니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-[20px]">
                    기존 무격자 기법의 한계인 비보존성을 FVM 수준으로 개선한 GC-LSM 기법으로 정확성을 확보하였습니다.
                    AUSMPW+, 3차 공간 정확도의 MLP3 사용을 통해 충격파에서 수치적 불안정성을 극복하고
                    초음속 영역에서도 고차 정확도의 유동 해석이 가능합니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-[48px]">
                    압축성 유동 뿐 아니라 플라즈마 현상을 해석할 수 있는 다물리 해석 프로그램입니다.
                    NASA Glenn Research Center의 CEA를 활용하여 2000종 이상의 기체에 대해 평형 상태 물성치 테이블을 구현합니다.
                </p>

                <div className="flex flex-col gap-[8px] mb-[64px]">
                    <div className="relative w-full h-[380px] overflow-hidden">
                        <Image src="/famus/famus4.webp" alt="FAMUS simulation" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="relative w-full h-[200px] overflow-hidden">
                        <Image src="/famus/famus5.jpg" alt="FAMUS simulation result" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-[12px] overflow-hidden border border-white px-[32px] py-[14px] text-[13px] font-medium tracking-widest mb-[80px]"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">for more information, contact us</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                {/* 기능 + 수치해석 */}
                <div className="border-t border-white/20 pt-[56px] mb-[64px]">
                    <div className="grid grid-cols-2 gap-[48px]">
                        <div>
                            <SectionLabel>FAMUS의 기능</SectionLabel>
                            <div className="flex flex-col">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-[16px] py-[14px] border-b border-white/10">
                                        <span className="text-white/30 text-[11px] tracking-widest w-[24px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="text-white text-[15px]">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <SectionLabel>수치해석 기법</SectionLabel>
                            <div className="flex flex-col gap-[24px]">
                                {numerics.map((n, i) => (
                                    <div key={i}>
                                        <span className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-[4px]">{n.label}</span>
                                        <span className="text-white text-[15px]">{n.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 지원 포맷 + 이동물체 */}
                <div className="border-t border-white/20 pt-[56px] mb-[64px]">
                    <div className="grid grid-cols-2 gap-[48px]">
                        <div>
                            <SectionLabel>지원 포맷</SectionLabel>
                            <div className="flex gap-[10px] mb-[20px]">
                                {cadFormats.map((f) => (
                                    <span key={f} className="border border-white/30 text-white text-[13px] tracking-widest px-[14px] py-[6px]">{f}</span>
                                ))}
                            </div>
                            <p className="text-white/70 text-[15px] leading-[1.9]">
                                Netgen을 이용한 표면 형상 구현<br />
                                NASTRAN 포맷 import<br />
                                3차원 질점 자동 생성
                            </p>
                        </div>
                        <div>
                            <SectionLabel>이동물체 해석</SectionLabel>
                            <div className="flex flex-col">
                                {motionFeatures.map((f, i) => (
                                    <div key={i} className="flex items-center gap-[12px] py-[12px] border-b border-white/10">
                                        <span className="w-[4px] h-[4px] bg-white/40 rounded-full shrink-0" />
                                        <span className="text-white text-[15px]">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Validation Cases */}
                <div className="border-t border-white/20 pt-[56px]">
                    <SectionLabel>Validation Cases</SectionLabel>
                    <div className="grid grid-cols-3 gap-[1px] bg-white/15">
                        {validations.map((v) => (
                            <div key={v.title} className="bg-black flex flex-col">
                                <div className="relative w-full h-[180px] overflow-hidden">
                                    <Image src={v.img} alt={v.title} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="px-[20px] py-[20px] flex flex-col gap-[6px]">
                                    <span className="text-white text-[14px] font-medium leading-tight">{v.title}</span>
                                    <span className="text-white/50 text-[12px] tracking-wide">{v.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
