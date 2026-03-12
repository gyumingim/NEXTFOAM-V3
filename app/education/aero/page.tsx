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

const goals = [
    "항공기, 드론 등의 고정익 및 회전익 비행체의 공력 설계 및 성능 평가 방법에 대한 이론과 전산유체역학(CFD)의 기본 이론을 이해한다.",
    "오픈 소스 CFD 패키지인 BARAM을 이용한 실무 CFD 시뮬레이션 워크플로우를 이해한다.",
    "항력, 양력, 압력 분포 등 공력 성능 지표를 산출할 수 있는 능력을 확보한다.",
    "회전하는 물체인 프로펠러 및 회전익의 CFD 유동 해석 방법을 이해한다.",
    "CFD 시뮬레이션 결과를 설계 개선 및 성능 비교에 활용하는 방법을 습득한다.",
];

const highlights = [
    "비행체 공력 설계 및 성능 분석과 전산유체역학 시뮬레이션 이론 강의",
    "오픈소스 CFD BARAM 기반 실습 중심 교육",
    "OpenVSP를 이용한 비행체 형상 모델링 방법 및 실습",
    "BARAM을 이용한 아음속~초음속 영역의 에어포일, 고정익 및 회전익 비행체 해석 실습",
];

const day1 = [
    {
        title: "공기역학적 힘",
        items: [
            "비행체에 작용하는 힘과 모멘트, 공기역학적 힘의 발생 원리 — 고정익 항공기, 멀티콥터",
            "비행체의 항력 — 유도항력(Induced Drag)과 유해항력(Parasite Drag), 멀티콥터 항력계수",
            "비행체 형상 결정 요소 및 형상 설계 프로세스",
        ],
    },
    {
        title: "공력 성능 도출 방법",
        items: [
            "풍동실험과 전산유체역학 시뮬레이션",
            "전산유체역학 기반 공력 성능 도출 방법 및 최적설계·상세설계 프로세스에서 활용 방법",
        ],
    },
    {
        title: "전산유체역학 기초 이론",
        items: [
            "전산유체역학의 정의, 목적, 활용 분야",
            "유체역학 물리 법칙 및 지배방정식, 모델링 및 수치해석 기법, 시뮬레이션 프로세스",
        ],
    },
    {
        title: "OpenVSP를 이용한 비행체 모델링",
        items: [
            "소프트웨어 소개 및 기본 사용법",
        ],
    },
];

const day2 = [
    {
        title: "고정익 비행체 시뮬레이션 실습",
        items: [
            "OpenVSP를 이용한 모델링, VSPAero를 이용한 low fidelity 분석",
            "BARAM을 이용한 격자 생성, 계산, 후처리",
            "양력 이론 및 고정익 비행체에 대한 전산유체역학 시뮬레이션 실습",
        ],
    },
    {
        title: "로터/프로펠러 해석 — Actuator Disk 모델",
        items: [
            "프로펠러·로터의 추력 생성 모델, 터빈의 동력 추출 모델, BARAM의 Actuator disk 모델",
            "Actuator disk 모델을 이용한 프로펠러와 비행체 해석 — 프로펠러 해석, 고정익/회전익 비행체 해석",
        ],
    },
    {
        title: "로터/프로펠러 해석 — 슬라이딩 격자",
        items: [
            "슬라이딩 격자를 이용한 프로펠러와 비행체 해석",
            "Tmotor 프로펠러 해석, 회전익 비행체 해석",
        ],
    },
];

export default function EducationAeroPage() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[720px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[56px] font-bold tracking-tighter leading-[1.05] mb-4">
                    BARAM을 이용한<br />비행체 공력 성능 평가 교육
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-14">
                    오픈 소스 SW를 이용한 실무 중심의 2일 집중 교육
                </p>

                <div className="relative w-full h-[380px] overflow-hidden border border-white/10 mb-14">
                    <Image src="/edu/drone.png" alt="비행체 공력 성능 평가 교육" fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>

                {/* 과정 개요 */}
                <p className="text-white text-[17px] leading-[1.9] mb-5">
                    항공기(고정익/회전익)나 드론의 성능 경쟁력은 공력 설계와 해석 기술에서 시작됩니다. 이런 문제 해결을 위해 비행체 설계를 위한 공기역학적 성능 분석에 대한 교육 과정을 개설하였습니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                    비행체의 공기역학적 설계 및 성능 평가 방법과 전산유체역학에 대한 기본 이론 강의와 실습으로 구성됩니다. 형상 모델링은 NASA의 OpenVSP를, CFD는 OpenFOAM 기반의 BARAM을 사용합니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-10">
                    CFD 입문자부터 실무 엔지니어까지, <span className="text-white">"무엇을 계산해야 하고, 결과를 어떻게 해석해야 하는지"</span>에 집중합니다.
                </p>

                <div className="flex flex-col gap-2 mb-16">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 py-3 border-b border-white/10">
                            <span className="text-white/30 text-[11px] tracking-widest w-5 pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-white/90 text-[15px] leading-[1.7]">{h}</span>
                        </div>
                    ))}
                </div>

                <Link
                    href="/education/schedule"
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest mb-20"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">교육 신청하기</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                {/* 교육 종류 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Course Type</SectionLabel>
                    <div className="grid grid-cols-2 gap-px bg-white/10">
                        {[
                            {
                                type: "넥스트폼 정규 교육",
                                items: [
                                    { label: "일정", value: "2026년 4월 09~10일" },
                                    { label: "장소", value: "넥스트폼 교육장" },
                                    { label: "교육비", value: "80만원 / 1인 (부가세 포함)" },
                                    { label: "신청", value: "홈페이지 또는 marketing@nextfoam.co.kr" },
                                ],
                            },
                            {
                                type: "온사이트(On-site) 교육",
                                items: [
                                    { label: "일정", value: "교육 일정 및 기간 조정 가능" },
                                    { label: "장소", value: "요청 기관에 방문해서 진행" },
                                    { label: "교육비", value: "200만원 / 1일 (부가세 포함)" },
                                    { label: "신청", value: "홈페이지 또는 marketing@nextfoam.co.kr" },
                                ],
                            },
                        ].map((col, ci) => (
                            <div key={ci} className="bg-black px-6 py-8">
                                <p className="text-white text-[15px] font-medium mb-6">{col.type}</p>
                                <div className="flex flex-col gap-4">
                                    {col.items.map((item, ii) => (
                                        <div key={ii}>
                                            <span className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-1">{item.label}</span>
                                            <span className="text-white/90 text-[14px] leading-[1.6]">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 교육 목표 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Objectives</SectionLabel>
                    <div className="relative w-full h-[220px] overflow-hidden border border-white/10 mb-10">
                        <Image src="/edu/design.png" alt="비행체 설계 프로세스" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="flex flex-col">
                        {goals.map((g, i) => (
                            <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10">
                                <span className="text-white/30 text-[11px] tracking-widest w-6 pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-white/90 text-[15px] leading-[1.8]">{g}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 수강 대상 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Target Audience</SectionLabel>
                    <div className="flex flex-col gap-2">
                        {[
                            "항공기/드론 개발 및 설계 관련 엔지니어, 연구원, 대학(원)생",
                            "대학교 1학년 수준의 일반 물리 지식만 있으면 수강 가능하며, 대학 학부 전공과 관련 없습니다.",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-white/30 text-[10px] mt-1.5">●</span>
                                <span className="text-white/80 text-[15px] leading-[1.8]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 1일차 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Day 1</SectionLabel>
                    <h2 className="text-white text-[20px] font-medium tracking-tight mb-8">
                        공기역학적 힘과 공력 성능 도출, 전산유체역학 이론
                    </h2>

                    <div className="relative w-full h-[200px] overflow-hidden border border-white/10 mb-10">
                        <Image src="/edu/force-1-768x238.webp" alt="공기역학적 힘" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Aerodynamic Forces & CFD Theory</span>
                    </div>

                    <div className="flex flex-col gap-8">
                        {day1.map((section, si) => (
                            <div key={si}>
                                <p className="text-white text-[15px] font-medium mb-3">{section.title}</p>
                                <div className="flex flex-col gap-1.5">
                                    {section.items.map((item, ii) => (
                                        <div key={ii} className="flex items-start gap-3">
                                            <span className="text-white/30 text-[10px] mt-1.5">●</span>
                                            <span className="text-white/80 text-[14px] leading-[1.8]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full h-[260px] overflow-hidden border border-white/10 mt-10">
                        <Image src="/edu/vspAero-768x324.webp" alt="OpenVSP & VSPAero" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">OpenVSP & VSPAero</span>
                    </div>
                </div>

                {/* 2일차 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Day 2</SectionLabel>
                    <h2 className="text-white text-[20px] font-medium tracking-tight mb-8">
                        BARAM을 이용한 고정익 비행체 해석
                    </h2>

                    <div className="flex flex-col gap-8 mb-10">
                        {day2.map((section, si) => (
                            <div key={si}>
                                <p className="text-white text-[15px] font-medium mb-3">{section.title}</p>
                                <div className="flex flex-col gap-1.5">
                                    {section.items.map((item, ii) => (
                                        <div key={ii} className="flex items-start gap-3">
                                            <span className="text-white/30 text-[10px] mt-1.5">●</span>
                                            <span className="text-white/80 text-[14px] leading-[1.8]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full h-[300px] overflow-hidden border border-white/10">
                        <Image src="/edu/dronecfd-768x427.webp" alt="드론 CFD 해석" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Rotary-wing CFD Simulation</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="border-t border-white/20 pt-14">
                    <SectionLabel>Registration</SectionLabel>
                    <p className="text-white/80 text-[15px] leading-[1.9] mb-6">
                        교육 문의 : <span className="text-white">marketing@nextfoam.co.kr</span> &nbsp;|&nbsp; 070-8796-3025 이혜진 부장
                    </p>
                    <div className="flex gap-3">
                        <Link
                            href="/education/schedule"
                            className="group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest"
                        >
                            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">정규 교육 신청</span>
                            <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 overflow-hidden border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-widest"
                        >
                            <span className="relative z-10 text-white/60 group-hover:text-black transition-colors duration-300">온사이트 교육 문의</span>
                            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
