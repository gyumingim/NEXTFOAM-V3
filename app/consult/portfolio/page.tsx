"use client"
import { PageLayout } from "@/shared/ui/page";
import Image from "next/image";

const portfolioItems = [
    { img: "/consult_port/image7.gif", category: "유동 해석", title: "CFD를 이용한 폭발(Explosion) 시뮬레이션", desc: "ENO 공간 이산화, Level set, Ghost Fluid, AMR 기법을 활용한 폭발 해석 전용 CFD 코드 개발" },
    { img: "/consult_port/ec98a4ec97bcebacbced9995ec82b0-600x316.webp", category: "환경 / 스마트시티", title: "대기 오염물 확산 CFD 시뮬레이션 SaaS 개발", desc: "한국국토정보공사 디지털 트윈 플랫폼에 CFD 분석 환경을 SaaS로 구현" },
    { img: "/consult_port/240131100421_pxe5qtkhwd-600x335.webp", category: "철도차량 / 최적설계", title: "고속열차 전두부 형상 최적화", desc: "Bezier 곡면 기반 27개 형상 매개변수, NSGA-II로 항력/미기압파 다목적 최적화" },
    { img: "/consult_port/ec84a4eab384ed86b5ed95a9ec9db8ed84b0ed8e98ec9db4ec8aa4-600x230.webp", category: "항공우주 / 자동화", title: "비행체 CFD 해석 및 설계 통합 자동화 인터페이스 개발", desc: "형상 자동생성, 격자 생성, 솔버 설정, 후처리의 전 과정을 통합 GUI/CLI로 자동화" },
    { img: "/consult_port/aaa-1-600x510.webp", category: "프로세스 자동화", title: "CFD Workflow 최적화", desc: "해석 방법 정립부터 전체 workflow 구축까지, 다량 계산과 업무 이관을 위한 효율화" },
    { img: "/consult_port/eab3b5eba0a5db-600x433.webp", category: "항공우주 / 공력 DB", title: "비행체 공력 DB 구축 프레임워크 개발", desc: "DOE 기반 해석점 선정, FAMUS 유동해석, 크리깅 대체모델 생성을 하나의 자동화 프레임워크로 구성" },
    { img: "/consult_port/gridfin-1-1-600x370.webp", category: "항공우주", title: "그리드 핀 공력DB 구축", desc: "재사용 발사체용 그리드 핀의 형상/질점 자동 생성, CFD 해석 자동화, 공력 DB 구축" },
    { img: "/consult_port/image3.png", category: "환경 / GIS", title: "수치지형도를 이용한 CFD 전처리 자동화 및 오염물질 확산 시뮬레이션", desc: "GIS 데이터로 3D 지형/건물 형상 생성, snappyHexMesh 격자, buoyantPimpleNFoam 암모니아 확산 해석" },
    { img: "/consult_port/ec9881ec83811-600x385.webp", category: "영상계측", title: "투하 물체의 거동 영상기반 계측", desc: "마커 부착 투하체의 위치·자세 6자유도 측정, 증강현실 가상 형상 증강 기술 구현" },
    { img: "/consult_port/240507013452_rpzmefjauf-1-600x340.webp", category: "영상계측", title: "고속 회전체 변위 영상기반 계측", desc: "스테레오 카메라 + 동조식 스트로브 조명으로 로터 블레이드 변위 및 피치각 분석" },
    { img: "/consult_port/ec97b0eb8f8c-600x337.webp", category: "건설 / 건축", title: "건축물 연돌 현상(Stack effect) 해석", desc: "WindTunnelFoam 풍압 해석과 CONTAM 네트워크 기법으로 연돌 효과 분석 및 저감방안 제시" },
    { img: "/consult_port/hyper-600x336.webp", category: "교통 / 유동 해석", title: "하이퍼루프 해석을 위한 하이브리드 도메인(1D+3D) 코드 개발", desc: "장거리 튜브 구간은 1D, 캡슐 주변 복잡 유동 영역은 3D로 처리하는 하이브리드 해석 기법 개발" },
    { img: "/consult_port/train-600x338.webp", category: "철도차량", title: "고속열차의 공기역학적 특성 분석", desc: "G7, KTX, HEMU, EMU 등 국내 전 고속열차 대상 주행저항, 측풍, 미기압파, 교행 CFD 해석" },
    { img: "/consult_port/cadmesh-600x325.webp", category: "전처리 / 자동화", title: "특화 전처리(CAD+Mesh+Solver setup) 프로그램 개발", desc: "에어컨 실외기 전용 CAD 기능과 snappyHexMesh 자동 격자 생성을 내재한 특화 전처리 프로그램" },
    { img: "/consult_port/ec98a8ec8898eba1a4-600x500.webp", category: "열전달", title: "온수롤 열전달 해석", desc: "Outer Shell/Baffle gap이 열전달 성능에 미치는 영향 분석, MRF 회전 + CHT 복합 해석" },
    { img: "/consult_port/cavitation-600x250.webp", category: "다상유동", title: "캐비테이션 해석", desc: "점진적 기포 발생 기법으로 안정성을 개선한 NextFOAM 기반 캐비테이션 해석자 개발" },
    { img: "/consult_port/eba088ebb2a8eba781-600x378.webp", category: "전기 / 전자", title: "인쇄 레벨링 CFD 자동화 해석 프로그램 개발", desc: "2D 도면 → 3D 형상 → VOF 다상유동 해석까지 전 과정 자동화, 동적 접촉각·overset 기법 적용" },
    { img: "/consult_port/ed84b0eb8490-600x585.webp", category: "건설 / 교통", title: "터널 CFD 해석 프로그램 개발", desc: "화재확산, PSD 풍압, 미기압파, HVAC 모듈로 구성된 터널·승강장 전용 CFD 해석 프로그램" },
    { img: "/consult_port/eca09cec8381-600x371.webp", category: "자동차", title: "제상(Defrosting) 해석 프로그램 개발", desc: "복합열전달 솔버와 solidification/melting 모델 개선으로 자동차 실내 제상 해석 구현" },
    { img: "/consult_port/ec9881ec83812.webp", category: "에너지 / 산업", title: "열교환기 해석 프로그램 개발", desc: "다공성 매질 Dual cell 방법, multi-region 솔버, CALCULIX 구조해석 연동 개발" },
    { img: "/consult_port/eb9494ec8aa4ed8e9cec8bb1-600x338.webp", category: "전기 / 전자", title: "디스펜싱 유동해석 기술 개발", desc: "VOF + overset 기법, 비뉴턴유체 온도 의존 점도, dynamic contact angle 적용" },
    { img: "/consult_port/pod-600x685.webp", category: "AI / 실시간 시뮬레이터", title: "POD 및 ANN 기반의 ROM 구성 프레임워크 개발", desc: "OpenFOAM–AccelerateCFD–DAKOTA 연동 자동화, 에어포일 최적화 및 자유수면파 DB 구축 검증" },
    { img: "/consult_port/ebb680eab080ebacbc-600x476.webp", category: "항공우주 / 드론", title: "무인이동체 매개변수 기반 형상-유동해석 연계 자동화 프레임워크", desc: "프로펠러·동체·날개 등 형상 자동 생성부터 actuator disk 해석, 후처리까지 파이썬 스크립트 자동화" },
    { img: "/consult_port/ed8c8ceb9e91-1-600x359.webp", category: "조선 / 해양", title: "고정도 파랑 생성을 위한 난류모델 개발", desc: "Density-modified / Buoyancy-modified k-ε, SST k-ω 모델로 파고 감쇠 현상 억제" },
    { img: "/consult_port/eb9dbcec9db4eca080-600x340.webp", category: "조선 / 해양", title: "선박 추진기 소음저감 부가물 설계 프로그램 개발", desc: "vortex generator 설계변수 기반 형상 자동 생성, snappyHexMesh + RSM 난류모델 해석 자동화" },
    { img: "/consult_port/pod-600x68s5.webp", category: "조선 / 해양", title: "라이저 와유기 진동", desc: "DES 난류모델 기반 3차원 cylinder vortex shedding, 탄성스프링 지지 6자유도 거동 해석 (Re = 3900 & 6.7×10⁵)" },
];

export default function ConsultPortfolioPage() {
    return (
        <PageLayout>

            <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                컨설팅 포트폴리오
            </h1>
            <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-6">
                CFD Consulting Portfolio
            </p>
            <p className="text-white/80 text-[16px] leading-[1.9] mb-16">
                300건 이상의 컨설팅 프로젝트를 수행했습니다. 항공우주, 자동차, 조선, 건설, 에너지 등 다양한 산업 분야의 주요 수행 사례를 소개합니다.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {portfolioItems.map((item, i) => (
                    <div key={i} className="group flex flex-col cursor-pointer hover:bg-neutral-800 duration-300 transition-all p-3 rounded-2xl">
                        <div className="w-full h-[190px] rounded-xl overflow-hidden bg-neutral-900">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                unoptimized={item.img.endsWith(".gif")}
                            />
                        </div>
                        <div className="mt-3 flex flex-col px-1">
                            <span className="text-neutral-400 text-[11px] tracking-[0.15em] uppercase mb-1">{item.category}</span>
                            <span className="text-white text-[15px] font-medium leading-snug mb-1.5">{item.title}</span>
                            <span className="text-white/55 text-[13px] leading-[1.65]">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

        </PageLayout>
    );
}
