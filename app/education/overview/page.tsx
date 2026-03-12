"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Link from "next/link";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

type DaySchedule = { day: string; items: string[] };

type Course = {
    id: string;
    title: string;
    subtitle?: string;
    onsite?: boolean;
    desc: string[];
    schedule: DaySchedule[];
    fee: string[];
};

const courses: Course[] = [
    {
        id: "01",
        title: "CFD 실전교육 BARAM",
        desc: [
            "CFD의 기초 이론과 함께 공개 소스 CFD 프로그램인 BARAM을 이용한 실습을 진행합니다. BARAM 내용은 baramMesh를 이용한 격자 생성, baramFlow를 이용한 유동 해석 및 후처리 과정으로 진행이 되며, 누구나 어디서든 CFD 활용이 가능합니다.",
            "교육 수강 후 한달 동안 무상으로 기술지원을 제공합니다 (edusupport@nextfoam.co.kr).",
        ],
        schedule: [
            {
                day: "1일차",
                items: [
                    "Introduction — What is BARAM?",
                    "전산유체역학의 기본 이론 — 유체역학 지배방정식 및 컴퓨터를 이용한 시뮬레이션 방법론",
                    "BARAM을 이용한 시뮬레이션 프로세스 — 문제 정의 및 계획",
                    "격자 생성 : baramMesh 기능과 활용 예, 실습",
                ],
            },
            {
                day: "2일차",
                items: [
                    "BARAM을 이용한 시뮬레이션 프로세스",
                    "해석 실행 : baramFlow 기능 및 활용 예, 실습",
                    "후처리 : Scaffolds, Graphics, Report",
                    "ParaView 사용법 — 사용법 교육 및 실습",
                ],
            },
        ],
        fee: [
            "80만원 (VAT 포함, 교재/중식 제공)",
            "학생할인 30% 적용 (박사과정까지)",
            "현장카드납부 가능 | 국민은행 421737-04-011869",
        ],
    },
    {
        id: "02",
        title: "OpenFOAM 사용자 교육",
        desc: [
            "OpenFOAM을 이용한 CFD 시뮬레이션 예제 및 실습 위주의 교육을 진행합니다. CLI(Command Line Interface)를 이용한 OpenFOAM의 전반적인 사용법 내용으로 진행합니다.",
            "교육 수강 후 한달 동안 무상으로 기술지원을 제공합니다 (edusupport@nextfoam.co.kr).",
        ],
        schedule: [
            {
                day: "1일차",
                items: [
                    "OpenFOAM(NextFOAM) 소개",
                    "OpenFOAM(NextFOAM) 설치 및 구동환경 만들기",
                    "OpenFOAM 기본 Solver 사용법 예제 1 (pitzDaily, simpleFoam)",
                ],
            },
            {
                day: "2일차",
                items: [
                    "OpenFOAM 기본 Solver 사용법 예제 2 (hotRoom, buoyantSimpleFOAM)",
                    "ParaView 사용법",
                    "OpenFOAM 기본 Solver 사용법 예제 3 (Dam breaking, VOF, interFoam)",
                    "공개 CFD 프로그램 BARAM 소개",
                ],
            },
            {
                day: "3일차",
                items: [
                    "PyFoam 소개 및 사용법",
                    "병렬계산하기, OpenMPI 사용법",
                    "Function objects",
                    "경계조건 / Utilities 소개",
                ],
            },
        ],
        fee: [
            "120만원 (VAT 포함, 교재/중식 제공)",
            "학생할인 30% 적용 (박사과정까지)",
            "현장카드납부 가능 | 국민은행 421737-04-011869",
        ],
    },
    {
        id: "03",
        title: "OpenFOAM 코드개발자 교육",
        onsite: true,
        desc: [
            "OpenFOAM을 이용하여 사용자 요구에 맞는 customized solver를 만들고자 하시는 분들께 도움을 드리고자 OpenFOAM solver를 직접 modify하는 방법에 대한 교육을 진행합니다.",
            "사용자교육을 수강하셨던 분이나 사용자교육에 준하는 사용법을 숙지하고 계신 분들만 수강하시길 권장드립니다.",
            "정기 교육은 없으며 요청이 있을 때 On-site 교육으로 진행합니다.",
        ],
        schedule: [
            {
                day: "1일차",
                items: [
                    "OpenFOAM compile을 위한 compiler 사용법",
                    "OpenFOAM을 이용한 High Level 프로그래밍",
                ],
            },
            {
                day: "2일차",
                items: [
                    "wmake로 빌드하기",
                    "Utility 만들기",
                    "경계조건 라이브러리 만들기",
                ],
            },
            {
                day: "3일차",
                items: [
                    "FVM & SIMPLE algorithm in OpenFOAM",
                ],
            },
        ],
        fee: ["200만원 / 1일 (On-Site 교육으로만 진행)"],
    },
    {
        id: "04",
        title: "OpenFOAM 열전달 교육",
        onsite: true,
        desc: [
            "OpenFOAM을 이용하여 열전달 및 복합열전달 유동해석을 하고자 하시는 분들께 thermophysical models 설명 및 해석 방법에 대한 교육을 진행합니다.",
            "정기 교육은 없으며 요청이 있을 때 On-site 교육으로 진행합니다.",
        ],
        schedule: [
            {
                day: "1일차",
                items: [
                    "Heat Transfer Solver",
                    "Thermophysical models",
                    "Thermophysical properties",
                    "Multi Region / Conjugate Heat Transfer Solver",
                    "전처리 방법",
                    "해석 방법",
                    "예제 실습",
                ],
            },
        ],
        fee: ["200만원 / 1일 (On-Site 교육으로만 진행)"],
    },
    {
        id: "05",
        title: "CFD를 이용한 비행체 공력 성능 평가 교육",
        subtitle: "오픈 소스 SW(BARAM)을 이용한 실무 중심의 2일 집중 교육",
        desc: [
            "항공기(고정익/회전익)나 드론의 성능 경쟁력은 공력 설계와 해석 기술에서 시작됩니다. 이런 문제 해결을 위해 비행체 설계를 위한 공기역학적 성능 분석에 대한 교육 과정을 개설하였습니다.",
            "비행체의 공기역학적 설계 및 성능 평가 방법과 전산유체역학에 대한 기본 이론 강의와 실습으로 구성됩니다. 형상 모델링은 NASA의 OpenVSP를, CFD는 OpenFOAM 기반의 BARAM을 사용합니다.",
            "CFD 입문자부터 실무 엔지니어까지, '무엇을 계산해야 하고, 결과를 어떻게 해석해야 하는지'에 집중합니다.",
            "교육 수강 후 한달 동안 무상으로 기술지원을 제공합니다 (edusupport@nextfoam.co.kr).",
        ],
        schedule: [
            {
                day: "1일차",
                items: [
                    "공기역학적 힘과 전산유체역학 이론",
                    "OpenVSP를 이용한 비행체 모델링",
                ],
            },
            {
                day: "2일차",
                items: [
                    "BARAM을 이용한 고정익 비행체 해석",
                    "Actuator disk를 이용한 회전익 비행체 해석",
                    "Sliding mesh를 이용한 회전익 비행체 해석",
                ],
            },
        ],
        fee: [
            "80만원 (VAT 포함, 교재/중식 제공)",
            "학생할인 30% 적용 (박사과정까지)",
            "현장카드납부 가능 | 국민은행 421737-04-011869",
        ],
    },
    {
        id: "06",
        title: "CAE/AI 엔지니어를 위한 HPC 교육",
        onsite: true,
        desc: [
            "자체 HPC 구축 및 관리 / HPC를 활용하여 CFD 등 CAE 해석을 수행하고자 하는 엔지니어 및 연구원을 대상으로 교육을 진행합니다.",
            "HPC 환경에서 CAE 어플리케이션이나 OpenFOAM 수행 방법 및 병렬 AI 학습 수행 방법, HPC 구축 실습 교육 등을 진행합니다.",
            "정기 교육은 없으며 요청이 있을 때 On-site 교육으로 진행합니다.",
        ],
        schedule: [
            {
                day: "1일차",
                items: [
                    "HPC 활용 및 관리를 위한 Linux 기본 (2시간)",
                    "HPC 개요 — 기본 개념 및 활용 분야, 구성 요소 및 성능 영향 요인",
                    "활용 분야에 따른 HPC 설계 및 활용 방안",
                    "HPC 구축 데모 및 실습",
                ],
            },
            {
                day: "2일차",
                items: [
                    "HPC에서 OpenFOAM 등 CFD 어플리케이션 수행",
                    "HPC에서 Pytorch를 활용한 AI 학습",
                    "HPC에서 GPU 활용",
                ],
            },
        ],
        fee: ["200만원 / 1일 (On-Site 교육으로만 진행)"],
    },
];

export default function EducationOverviewPage() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[720px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                    교육 프로그램
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-6">
                    2026 Education — CFD & HPC Training
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-6">
                    BARAM, OpenFOAM, HPC 등 CFD 실무에 필요한 전문 교육을 제공합니다. 기초부터 코드 개발까지, 수준에 맞는 과정을 선택하세요.
                </p>
                <p className="text-white/60 text-[14px] leading-[1.9] mb-14">
                    교육 문의 및 기술지원 : <span className="text-white/80">edusupport@nextfoam.co.kr</span>
                </p>

                <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest mb-20"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">교육 신청 / 문의하기</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                {/* 과정 목록 */}
                {courses.map((course, ci) => (
                    <div key={ci} className="border-t border-white/20 pt-14 mb-16">
                        <SectionLabel>Course {course.id}</SectionLabel>

                        <div className="flex items-start justify-between gap-4 mb-3">
                            <h2 className="text-white text-[22px] font-medium tracking-tight leading-snug flex-1">
                                {course.title}
                            </h2>
                            {course.onsite && (
                                <span className="shrink-0 border border-white/30 text-white/50 text-[11px] tracking-widest px-3 py-1 mt-1">
                                    ON-SITE
                                </span>
                            )}
                        </div>

                        {course.subtitle && (
                            <p className="text-white/50 text-[13px] tracking-wide mb-6">{course.subtitle}</p>
                        )}

                        <div className="flex flex-col gap-3 mb-10">
                            {course.desc.map((d, di) => (
                                <p key={di} className="text-white/80 text-[15px] leading-[1.9]">{d}</p>
                            ))}
                        </div>

                        {/* 일정 */}
                        <div className="flex flex-col gap-px bg-white/10 mb-8">
                            {course.schedule.map((day, di) => (
                                <div key={di} className="bg-black flex gap-6 px-6 py-5">
                                    <span className="text-white/40 text-[12px] tracking-widest w-12 shrink-0 pt-0.5">{day.day}</span>
                                    <ul className="flex flex-col gap-2">
                                        {day.items.map((item, ii) => (
                                            <li key={ii} className="flex items-start gap-2.5">
                                                <span className="text-white/25 mt-1.5 text-[6px]">●</span>
                                                <span className="text-white/90 text-[14px] leading-[1.75]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* 교육비 */}
                        <div className="border border-white/15 px-6 py-5">
                            <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-3">교육비</span>
                            <div className="flex flex-col gap-1.5">
                                {course.fee.map((f, fi) => (
                                    <span key={fi} className="text-white text-[14px] leading-[1.7]">{f}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
