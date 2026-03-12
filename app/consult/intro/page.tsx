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

const industries = [
    {
        label: "항공우주",
        items: "항공기/유도무기 공력 DB 구축, 항공기 외장분리, 무장창 음향하중, 우주발사체 배기 플룸, 발사대 화염유도로, 터보펌프, 로켓 단분리, 초음속 흡입구, 그리드 핀",
    },
    {
        label: "자동차/철도차량",
        items: "헤드램프, 라디에이터, 실내 공조, 제상, 주행 저항, 교행, 측풍, 열차풍, 미기압파, 형상 최적화, 융설, 하이퍼튜브, 스크린도어 풍압, 터널 화재, 배터리",
    },
    {
        label: "조선해양",
        items: "선박 저항/자항, 부가물, 프로펠러 성능/캐비테이션, 선박 운동, 슬로싱, 배가스 확산, 공장 환기, 선박 배관시스템, 파랑 생성, 해양플랜트 라이저, FPSO, 파랑저감장치, 사고 분석",
    },
    {
        label: "건설/토목",
        items: "건축물 풍압, 풍환경, 연돌 현상, 교량, 댐 여수로, 빗물 터널, 환기",
    },
    {
        label: "전기/전자",
        items: "클린룸, 변압기, 차단기, 전동기, 인버터, 디스펜싱, MLCC, 냉장고, 오븐, 에어컨, 코팅",
    },
    {
        label: "에너지/환경",
        items: "풍력터빈, 태양광 발전, 조류발전, 보일러, 엔진, PPS, HRSG, SCR, 스크러버, 건조기",
    },
    {
        label: "기타",
        items: "정수장, 혼합기, 열교환기, 팬, 압축기, 터빈, 펌프, 온수롤, 화재",
    },
];

const devSteps = [
    "솔버개발 및 검증",
    "격자 시스템 / 수치 기법 / 후처리 표준화",
    "프로세스 자동화",
    "UX 개발",
    "테스트 및 보완",
    "교육",
];

export default function ConsultIntroPage() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                    컨설팅 서비스
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-14">
                    CFD Consulting & Engineering Solutions
                </p>

                <p className="text-white text-[17px] leading-[1.9] mb-5">
                    CFD 시뮬레이션, 엔지니어링 솔루션 개발, 실시간 시뮬레이터 제작, 영상계측 시스템 개발 등의 서비스를 제공합니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-14">
                    다양한 분야에서 다년간의 연구와 실무 경험을 보유한 20명 이상의 박사 및 석사 학위를 가진 전문 엔지니어들이 프로젝트를 수행합니다.
                </p>

                <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest mb-20"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">프로젝트 문의하기</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                {/* CFD 시뮬레이션 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>CFD 시뮬레이션</SectionLabel>
                    <h2 className="text-white text-[22px] font-medium tracking-tight leading-snug mb-6">
                        CFD 시뮬레이션을 통한<br />성능평가 / 진단 / 최적설계
                    </h2>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        CFD(Computational Fluid Dynamics)는 유체의 흐름, 열전달, 화학반응 등을 컴퓨터 시뮬레이션으로 분석하는 기술입니다. 눈에 보이지 않는 현상을 가시화하고 분석하여 최적화된 설계를 가능하게 하며, 개발 기간과 비용을 절감할 수 있는 강력한 도구입니다.
                    </p>
                    <div className="relative w-full h-[400px] overflow-hidden border border-white/10 mb-8">
                        <Image src="/consult_intr/path2-1.webp" alt="CFD 시뮬레이션" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        CFD 시뮬레이션에 필요한 인력과 경험이 부족하여 직접 수행하기 어려운 분들께, 전문 기술력을 바탕으로 컨설팅 서비스를 제공합니다. 제품이나 시스템의 시뮬레이션을 통해 성능을 평가하고 이를 바탕으로 문제점을 분석하고 개선안을 제시해 드립니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        다양한 조건에 대한 데이터베이스 구축, 인공지능 학습자료 생성 등을 위한 대규모 계산이 필요한 경우, 실험계획법, 민감도분석, 대리모델 등의 방법을 이용해 빠른 시간에 정확한 데이터를 제공해 드립니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        CFD 분야에 높은 기술력을 보유하고 있으나, 조직의 효율성을 위해 외부의 전략적 파트너가 필요한 경우에도 다양한 방식으로 협력하고 있습니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        CFD 기술을 처음 도입하거나 새로운 분야에 적용하기 위한 PoC(Proof of Concept)가 필요한 경우, 벤치마크테스트 문제를 통해 최적의 시뮬레이션 프로세스를 제공해 드립니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9]">
                        저희는 직접 개발한 공개소스 코드(BARAM, NextFOAM)를 사용하며, 고객이 원하시면 시뮬레이션에 사용된 소스코드 제공과 함께 사용법 교육 서비스를 제공합니다. 이를 통해 컨설팅 계약 종료 후에도 다양한 상황에서 고객이 직접 시뮬레이션을 수행할 수 있습니다.
                    </p>
                </div>

                {/* DIY CFD */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>DIY CFD</SectionLabel>
                    <h2 className="text-white text-[22px] font-medium tracking-tight leading-snug mb-6">
                        CFD 해석 프로세스 자동화 &<br />전용 프로그램 개발
                    </h2>
                    <p className="text-white text-[17px] leading-[1.9] mb-5">
                        DIY(Do It Yourself)는 가구를 만들 때만 쓰는 것이 아닙니다. CFD 프로세스를 직접 설계해 보세요.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        과거 CFD 해석은 소수의 범용 상용 프로그램을 사용하는 것이 대부분이었지만, 지금은 KIMM-Flow, GSS, EagleCFD, ISAAC 등 자신만의 프로그램을 갖고 있는 기관들이 많습니다. 자신의 제품이나 시스템에 특화된 전용 프로그램은 효율성 향상, 비용절감, 사용자 확장, 업무 프로세스 혁신 등의 많은 장점이 있습니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        형상 및 격자 생성, 솔버 설정, 후처리 과정의 표준화/자동화는 시간절감, 인적오류(human error) 방지, 결과물 수준의 보장 등의 많은 장점이 있습니다. 무엇보다 해석 업무를 CFD 비전공자인 설계/개발 담당들이 직접 수행할 수 있다는 것이 가장 큰 장점입니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        DIY 프로그램은 사용자 수, CPU 개수, 비용에 제한이 없기 때문에 해석 과정의 효율성을 극대화할 수 있습니다. 하나의 CFD 프로그램에 국한되지 않고 설계/최적화 프레임워크, 여러 종류의 해석 프로그램 등을 통합하는 인터페이스로 개발할 수도 있습니다.
                    </p>

                    <div className="relative w-full h-[340px] overflow-hidden border border-white/10 mb-10">
                        <Image src="/consult_intr/ec8aa4ed81aceba6b0ec83b7-2025-01-16-19-34-17.png" alt="DIY CFD 프로그램" fill className="object-cover" />
                    </div>

                    <p className="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-6">개발 프로세스</p>
                    <div className="flex flex-col">
                        {devSteps.map((s, i) => (
                            <div key={i} className="flex items-center gap-4 py-3.5 border-b border-white/10">
                                <span className="text-white/30 text-[11px] tracking-widest w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-white text-[15px]">{s}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 실시간 시뮬레이터 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>AI / 실시간 시뮬레이터</SectionLabel>
                    <h2 className="text-white text-[22px] font-medium tracking-tight leading-snug mb-6">
                        AI/데이터마이닝을 이용한<br />실시간 시뮬레이터 개발
                    </h2>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        반복적인 CFD 해석 문제에 대해 데이터마이닝과 인공지능 기술을 이용하여 해석하지 않은 조건의 결과를 즉시 예측하는 실시간 시뮬레이터를 제공합니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        샘플 조건에서의 해석 데이터들을 이용해 적합직교분해(POD) 기법으로 기저함수를 추출하고 인공신경망 기반의 내삽법을 통해 차수축소모델(ROM)을 만듭니다. 축소모델을 이용해 새로운 형상 및 유동조건에 대한 고정밀도 데이터를 수초의 시간에 예측하고 가시화할 수 있습니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        시뮬레이션 기반 디지털 트윈, 다목적 형상최적설계, 데이터베이스 구축, 다물리 연성해석 등의 많은 컴퓨팅 용량과 오랜 계산 시간이 요구되는 문제에 대한 최적의 솔루션입니다. 데이터 생성을 위한 CFD 코드와 유동장 재건 및 가시화의 전 과정을 공개소스 코드를 사용하여, 라이선스 비용이 없고 효율적인 업그레이드가 가능한 솔루션을 제공합니다.
                    </p>
                    <div className="relative w-full h-[360px] overflow-hidden border border-white/10">
                        <Image src="/consult_intr/pod1.png" alt="POD 기반 실시간 시뮬레이터" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">POD-based Real-time Simulator</span>
                    </div>
                </div>

                {/* 영상계측 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>영상계측 시스템</SectionLabel>
                    <h2 className="text-white text-[22px] font-medium tracking-tight leading-snug mb-6">
                        영상계측 시스템 개발
                    </h2>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        영상측량기술은 광학식 카메라를 이용해 목표물의 3차원 위치를 측정하고, 나아가 3차원 자세까지 측정할 수 있는 기술이며, 비접촉식 계측을 수행하고자 하는 전 분야에서 활용될 수 있는 기술입니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        일반적으로 광학카메라를 이용한 영상측량기술의 경우 상대 위치 측정에만 초점을 두고 다른 상태정보(ex. 자세, 속도, 각속도) 등의 운동성분 해석은 불가능한 경우가 많습니다. 하지만 본사는 영상측량기술과 상태추정필터 기술을 결합함으로써 6자유도 운동성분분석이 동시에 가능하게 합니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        3차원 측량기술의 경우 일반적으로 스테레오 카메라, 즉 2대 이상의 카메라를 동시에 촬영하여 3차원 측량을 수행합니다. 하지만 본사는 단안 카메라(1대의 카메라)를 이용한 3차원 영상측량기술을 보유하고 있습니다.
                    </p>
                    <div className="relative w-full h-[360px] overflow-hidden border border-white/10">
                        <Image src="/consult_intr/survey6.jpg" alt="영상계측 시스템" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Vision-based 6-DOF Measurement System</span>
                    </div>
                </div>

                {/* HPC/Cloud */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>HPC / Cloud</SectionLabel>
                    <h2 className="text-white text-[22px] font-medium tracking-tight leading-snug mb-6">
                        HPC/Cloud 컨설팅
                    </h2>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-5">
                        CFD는 많은 계산량 때문에 HPC(High Performance Computing) 장비가 필요한 경우가 많이 있습니다. 계산용 클러스터를 구축할 때 해석 문제의 규모, 현재 전산장비의 개발 동향, 가격 변동 등을 고려하여 최적의 시스템을 제안해 드립니다.
                    </p>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        클라우드에서 CFD 시뮬레이션을 사용하고자 할 때, 어떤 클라우드를 쓰는게 좋은지, 클라우드에 시스템을 어떻게 구성해야 하는지, 해석 코드는 어떻게 설치해야 하는지 등의 여러가지 어려움에 부딪히게 됩니다. 이런 문제들에 대해 최적의 솔루션을 제안해 드립니다.
                    </p>
                    <div className="relative w-full h-[300px] overflow-hidden border border-white/10">
                        <Image src="/consult_intr/azure.jpg" alt="Launch BARAM on Azure" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Launch BARAM on Azure</span>
                    </div>
                </div>

                {/* 주요 컨설팅 수행 분야 */}
                <div className="border-t border-white/20 pt-14">
                    <SectionLabel>주요 컨설팅 수행 분야</SectionLabel>
                    <div className="flex flex-col">
                        {industries.map((ind, i) => (
                            <div key={i} className="flex gap-8 py-5 border-b border-white/10">
                                <span className="text-white text-[14px] font-medium tracking-wide w-[120px] shrink-0 pt-0.5">{ind.label}</span>
                                <span className="text-white/70 text-[14px] leading-[1.8]">{ind.items}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
