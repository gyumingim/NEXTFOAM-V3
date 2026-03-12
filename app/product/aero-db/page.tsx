"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Image from "next/image";
import Link from "next/link";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

const steps = [
    { num: "01", title: "실험계획법 기반 해석점 샘플링", desc: "마하수, 받음각, 옆미끄럼각, 핀의 변위각도 등의 샘플링 변수를 결정하고 전체 설계 공간에 해석점이 고르게 분포하도록 샘플링합니다. Latin Hypercube, Random 등 다양한 방법을 사용할 수 있습니다.", img: "/db/db3.png" },
    { num: "02", title: "배치 작업을 통한 CFD 유동 해석", desc: "샘플점들에 대한 해석 케이스를 자동으로 생성합니다. 배치 작업을 통해 유동해석을 수행하고 각 요소별 관찰 값을 도출합니다. CFD 코드는 FAMUS(무격자)와 OpenFOAM(BARAM)을 사용할 수 있습니다.", img: "/db/db4.png" },
    { num: "03", title: "Surrogate model 구축 및 신뢰성 평가", desc: "계산된 결과 데이터들을 이용해서 Surrogate model을 구축합니다. 수렴성 평가, 특이점 필터링, 최종 정확도 평가를 통해 DB 모델을 도출합니다.", img: "/db/db5.png" },
    { num: "04", title: "공력 DB 구성 및 후처리", desc: "공력 DB 구성안을 도출하여 대체 모델의 정확성과 효율성을 확보합니다. 랜덤 샘플링 기반 민감도 분석과 파라메트릭 스터디를 수행하며, 아음속·천음속·초음속 구간으로 DB 모델을 구획화합니다.", img: "/db/db6.png" },
];

const uiFeatures = [
    { label: "메인 화면", desc: "인풋 편집 버튼, 실행 버튼, 출력창" },
    { label: "DoE Sampling", desc: "실험 파라미터 구속조건 및 입력" },
    { label: "Numerical Analysis", desc: "FAMUS/BARAM batch run 패키지 생성" },
    { label: "Surrogate Model", desc: "크리깅 방법으로 대체 모델 생성" },
    { label: "Post-processing", desc: "공력 계수 예측, 반응표면, 교차 검증" },
];

const dbDetails = [
    "공력 DB 구획화 : 아음속, 천음속, 초음속 구간으로 DB 모델 구성",
    "샘플점 개수 변화 : 개수를 증가시키며 적정 개수 도출",
    "Outlier 필터링 : 교차 검증 결과에서 outlier 판별 및 필터링",
    "DoE 샘플링 파라미터 범위 조절로 균일한 샘플점 분포 확보",
    "크리깅 모델 생성 및 교차 검증을 통한 CFD 해석 값 비교",
];

export default function AeroDbPage() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[720px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                    공력 DB 구축<br />프레임워크
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-14">
                    Aerodynamic force Database Framework
                </p>

                <p className="text-white text-[17px] leading-[1.9] mb-5">
                    항공기, 유도무기, 드론, UAM, 잠수함, 어뢰 등 다양한 이동체 개발에서 고정밀도 유체력 데이터베이스는 필수적입니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                    풍동시험에 의한 데이터 획득은 매우 제한적이며, CFD 역시 방대한 계산량 때문에 활용에 어려움이 있습니다.
                    본 제품은 대체 모델 기반의 공력 데이터베이스 구축 자동화 프레임워크입니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-12">
                    마하수, 받음각, 옆미끄럼각, 핀의 변위각도에 따른 공력 DB를 구축할 수 있습니다.
                </p>

                <div className="flex flex-col gap-2 mb-14">
                    <div className="relative w-full h-[380px] overflow-hidden border border-white/10">
                        <Image src="/db/db.png" alt="공력 DB 프레임워크 개요" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="relative w-full h-[160px] overflow-hidden border border-white/10">
                        <Image src="/db/db2.png" alt="프레임워크 흐름도" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest mb-20"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">for more information, contact us</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                {/* 필요성 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <SectionLabel>대체 모델의 필요성</SectionLabel>
                            <p className="text-white/80 text-[15px] leading-[1.9]">
                                설계 변수가 증가할 경우 high-fidelity full factorial 실험이나 계산은 사실상 불가능합니다.
                                대체 모델 기법은 적은 비용으로 실제 모델의 반응을 모델링하여 실제 모델을 대체합니다.
                            </p>
                        </div>
                        <div>
                            <SectionLabel>자동화 프레임워크의 필요성</SectionLabel>
                            <p className="text-white/80 text-[15px] leading-[1.9]">
                                DoE 기반 해석점 선정, 유동해석, 대체 모델 생성 및 검증의 여러 작업을 하나의 프레임워크로
                                통합하여 작업의 효율성과 확장성을 확보합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4단계 프로세스 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Framework Process</SectionLabel>
                    <div className="flex flex-col gap-16">
                        {steps.map((step) => (
                            <div key={step.num}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-white/30 text-[11px] tracking-widest">{step.num}</span>
                                    <h3 className="text-white text-[18px] font-medium tracking-tight">{step.title}</h3>
                                </div>
                                <p className="text-white/80 text-[15px] leading-[1.9] mb-5">{step.desc}</p>
                                <div className="relative w-full h-[340px] overflow-hidden border border-white/10">
                                    <Image src={step.img} alt={step.title} fill className="object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DB 구성 세부 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>공력 DB 구성 세부</SectionLabel>
                    <div className="flex flex-col mb-10">
                        {dbDetails.map((d, i) => (
                            <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10">
                                <span className="text-white/30 text-[11px] tracking-widest w-6 pt-[3px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-white text-[15px] leading-[1.8]">{d}</span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative w-full h-[280px] overflow-hidden border border-white/10">
                            <Image src="/db/db7.png" alt="공력 DB 구획화" fill className="object-cover" />
                            <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">공력 DB 구획화</span>
                        </div>
                        <div className="relative w-full h-[280px] overflow-hidden border border-white/10">
                            <Image src="/db/db8.png" alt="크리깅 모델 검증" fill className="object-cover" />
                            <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">크리깅 모델 검증</span>
                        </div>
                    </div>
                </div>

                {/* 프레임워크 구성 */}
                <div className="border-t border-white/20 pt-14">
                    <SectionLabel>프레임워크 구성</SectionLabel>
                    <div className="flex flex-col mb-10">
                        {uiFeatures.map((f, i) => (
                            <div key={i} className="flex items-start gap-8 py-4 border-b border-white/10">
                                <span className="text-white text-[14px] font-medium tracking-wide w-[160px] shrink-0">{f.label}</span>
                                <span className="text-white/70 text-[14px]">{f.desc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {["/db/db9.png", "/db/db5.png", "/db/db6.png", "/db/db7.png"].map((src, i) => (
                            <div key={i} className="relative w-full h-[280px] overflow-hidden border border-white/10">
                                <Image src={src} alt={`screenshot ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
