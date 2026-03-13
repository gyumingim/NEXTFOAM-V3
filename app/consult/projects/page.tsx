"use client"
import { PageLayout, SectionLabel } from "@/shared/ui/page";
import Image from "next/image";

type Project = { title: string; client: string; year: string };
type Category = { label: string; en: string; img: string; projects: Project[]; more?: boolean };

const categories: Category[] = [
    {
        label: "항공 / 우주", en: "Aerospace", img: "/consult_perf/image3 (1).png", more: true,
        projects: [
            { title: "재진입 비행체 개발사업 탐색연구", client: "우주항공청", year: "2025" },
            { title: "하이브리드 드론용 엔진제어시스템(ECU) 보드 및 소프트웨어 개발", client: "피앤유드론", year: "2025" },
            { title: "축소 동축로터 블레이드 팁 변위 계측 시스템 개발", client: "한국항공우주연구원", year: "2025" },
            { title: "차세대발사체 터보펌프 성능 시험 고주파 신호 분석 프로그램 제작 및 추가 코드 개발", client: "한국항공우주연구원", year: "2025" },
            { title: "드라이아이스를 적용한 소형 드론 내부공간 냉각모사", client: "한국항공우주연구원", year: "2025" },
            { title: "화성 탐사 회전익기용 고성능 로터 및 전기구동 시스템 핵심기술 개발", client: "한국연구재단", year: "2024" },
            { title: "고속비행체 동적 공력DB 생성 및 관리검증", client: "한국항공우주연구원", year: "2024" },
            { title: "Grid fin 및 Landing legs를 장착한 재사용 발사체 공력 특성 예측", client: "한국항공우주연구원", year: "2023" },
            { title: "무인 이동체 설계 플랫폼을 위한 유저 익스피리언스 개발", client: "한국연구재단", year: "2023" },
            { title: "하이드로코드 개선 및 최신화", client: "ADD", year: "2023" },
            { title: "고속비행체 시뮬레이션 공력 DB 생성 및 비행가시화", client: "한국항공우주연구원", year: "2023" },
            { title: "PCB 형태 드론 플랫폼 개발", client: "PNU드론", year: "2023" },
            { title: "극초음속 비행체 하중분포 연구를 위한 전산해석", client: "한국항공우주연구원", year: "2023" },
            { title: "우주비행기용 영상계측시스템 제작", client: "한국항공우주연구원", year: "2023" },
            { title: "비행체 공력해석 및 자동화 S/W를 사용한 6분력 DB 구축", client: "국방과학연구소", year: "2022" },
            { title: "비행체 단분리 거동 해석", client: "한화", year: "2022" },
            { title: "고정밀도 공력해석자 자동화 기술 연구", client: "국방과학연구소", year: "2019" },
            { title: "외장분리 시뮬레이션 프로그램(ANYSEP V4) 개발", client: "한국항공우주산업", year: "2018" },
        ],
    },
    {
        label: "자동차 / 철도", en: "Automotive & Railway", img: "/consult_perf/drivaer-13.png", more: true,
        projects: [
            { title: "코레일 EMU-260 고속전철 78량, 냉난방해석", client: "현대로템", year: "2025" },
            { title: "코레일 EMU-260 고속전철 78량, 공력해석", client: "현대로템", year: "2025" },
            { title: "코레일 EMU-320 고속전철 136량, 냉난방해석", client: "현대로템", year: "2025" },
            { title: "해외수출용 고속철도차량 TSI 인증 공력해석", client: "현대로템", year: "2024" },
            { title: "고점도 접착제 면도포 노즐 내부 유동 및 도포형상 해석", client: "현대모비스", year: "2024" },
            { title: "370kph 고속열차 전두부 형상 최적화 설계도구 제작", client: "한국교통대", year: "2023" },
            { title: "코레일 EMU-260 고속전철 84량, TC2차량 냉난방해석", client: "현대로템", year: "2023" },
            { title: "공항철도 전동차 54량, 터널교행유동해석", client: "현대로템", year: "2023" },
            { title: "370kph 주행 열차의 3차원 전산유체해석", client: "한국교통대", year: "2022" },
            { title: "코레일 EMU-260 고속전철 84량, 냉난방 해석", client: "현대로템", year: "2022" },
            { title: "웹 기반 열유체 해석 플랫폼 개발", client: "현대모비스", year: "2022" },
            { title: "공항철도 전동차 54량, 공기역학적특성 CFD 해석", client: "현대로템", year: "2022" },
            { title: "OpenFOAM을 이용한 칵핏 공조 해석 프로그램 개발", client: "현대모비스", year: "2018" },
            { title: "OpenFOAM 기반 PAV 최적화 해석 패키지 개발", client: "현대자동차", year: "2018" },
            { title: "하이퍼튜브(아음속 캡슐 트레인) 공력 전용 해석 SW 개발", client: "한국철도기술연구원", year: "2018" },
        ],
    },
    {
        label: "조선 / 해양", en: "Shipbuilding & Marine", img: "/consult_perf/ed8c8ceb9e91-600x359.webp", more: true,
        projects: [
            { title: "잠수함 프로펠러 해석", client: "선박해양플랜트연구소", year: "2025" },
            { title: "부유체 6자유도 영상계측 시스템", client: "제주대", year: "2023" },
            { title: "배관 성능 평가 자동화 프로그램 해석 모듈 업데이트", client: "한국조선해양", year: "2023" },
            { title: "추진기 소음저감 부가물 설계 프로그램 멀티 부가물 설계 및 후처리 GUI 모듈 개발", client: "선박해양플랜트연구소", year: "2022" },
            { title: "극저온 열교환기 성능 예측 플랫폼 개발", client: "한국조선해양", year: "2022" },
            { title: "선체개구부 침수유량 감소 효과 CFD 연구", client: "사회적참사대책위원회", year: "2021" },
            { title: "고정도 파랑 생성을 위한 난류모델링 기반기술 구축", client: "선박해양플랜트연구소", year: "2021" },
            { title: "디지털트윈 기반 배관시스템 열유동 Virtual Commissioning 자동화 플랫폼 개발", client: "한국조선해양", year: "2020" },
            { title: "OpenFOAM을 이용한 선체 및 추진기 유동해석", client: "선박해양플랜트연구소", year: "2020" },
            { title: "Scrubber의 배기가스 역류 예측을 위한 열유동해석", client: "시뮬레이션테크", year: "2020" },
            { title: "중견조선소용 LNG 추진 선박 및 성능 해석 시스템 개발", client: "중소조선연구원", year: "2020" },
            { title: "H.7060 잠수함구조함-II 체계개발사업 Thruster 후류 CFD 해석", client: "대우조선해양", year: "2019" },
        ],
    },
    {
        label: "전기 / 전자", en: "Electronics", img: "/consult_perf/eb9494ec8aa4ed8e9cec8bb1.gif", more: true,
        projects: [
            { title: "키친전용 복합 열전달 프로그램을 개발하여 자동화 기능을 접목시킨 GUI 구축", client: "LG전자", year: "2024" },
            { title: "비전문가용 CFD 해석 자동화툴 개발", client: "LG전자", year: "2024" },
            { title: "Slot Die Coating 전용 CFD 프로그램 개발", client: "SK이노베이션", year: "2024" },
            { title: "OpenFOAM을 활용한 회전기 냉각 팬 해석 검증", client: "HD현대일렉트릭", year: "2024" },
            { title: "열교환기 열전달해석 프로그램 개발", client: "한국전자기술연구원", year: "2023" },
            { title: "인쇄 Leveling 자동화 Tool 개발", client: "삼성전기", year: "2022" },
            { title: "해석효율화(스프레딩, 경화해석)를 위한 격자 자동생성 Tool 개발", client: "삼성전자", year: "2022" },
            { title: "입형다단펌프 성능 해석", client: "한국전자기술연구원", year: "2022" },
            { title: "FAB 환경분석 3차원 CFD 해석 모델 구축 및 시뮬레이션", client: "플로우플러스", year: "2021" },
            { title: "디스펜싱 유동해석 기술 개발", client: "삼성전자", year: "2019" },
        ],
    },
    {
        label: "에너지 / 환경 / 플랜트", en: "Energy & Environment", img: "/consult_perf/shoe_closet_large_type2_wood_snf.webp", more: true,
        projects: [
            { title: "핵연료집합체 열유동 해석을 위한 차수축소법 적용성 평가", client: "한국원자력연구원", year: "2025" },
            { title: "RCS 가드호퍼 유동해석", client: "에코프로HN", year: "2025" },
            { title: "대기오염 확산 시뮬레이션 SaaS 개발 및 실증", client: "NIA", year: "2024" },
            { title: "화학물질 누출사고 영향범위 예측 및 사고원인 분석을 위한 오픈소스 3차원 CFD 프로그램 개발", client: "환경부", year: "2023" },
            { title: "디지털트윈 CFD 프로그램 연계 개발", client: "이삭엔지니어링", year: "2023" },
            { title: "Open Source 기반 정수장 수리흐름 해석 K-water형 CFD 표준모델 개발", client: "수자원공사", year: "2019" },
            { title: "학파저수지 수상태양광(20MW/5MW×4기) CFD / FEM 해석", client: "BK에너지", year: "2019" },
            { title: "CFD 기반의 핫셀내통 기류특성 분석 및 관련 툴 개발", client: "한국원자력연구원", year: "2019" },
            { title: "격납건물 해석을 위한 난류 벽함수 및 수치알고리즘 개선", client: "한국원자력연구원", year: "2019" },
            { title: "격납건물 수소거동 해석을 위한 난류모델 개선 및 검증", client: "한국원자력연구원", year: "2017" },
            { title: "다차원 수소연소 해석 GUI 개발", client: "한국원자력연구원", year: "2017" },
            { title: "Circuit Breaker 용 OpenFOAM 프로그램 개발", client: "한국전기연구원", year: "2016" },
            { title: "PPS 열유동 해석", client: "현대중공업", year: "2016" },
        ],
    },
    {
        label: "건설 / 토목", en: "Civil & Construction", img: "/consult_perf/dam-1-600x305.webp", more: true,
        projects: [
            { title: "와류 유입구 CFD 해석 자동화 사전 타당성 분석", client: "한국건설기술연구원", year: "2024" },
            { title: "검단역 PSD 풍압 해석", client: "지오디", year: "2024" },
            { title: "대구권 광역철도 구미역 PSD 풍압 시뮬레이션", client: "지오디", year: "2024" },
            { title: "대전 둔산동 그랑르피에드 연돌 해석", client: "르피에르둔산피에프브이", year: "2024" },
            { title: "수중터널 침설시공 동적제어 시험장치 제작 및 수중터널 통합시공시스템 소프트웨어 개발", client: "대우건설", year: "2023" },
            { title: "이라크 Khor Al Zubair 침매터널 시공 중 환기 및 온도 CFD 해석", client: "대우건설", year: "2023" },
            { title: "토트와이어 센서 및 시뮬링크 함수 블록", client: "대우건설", year: "2021" },
            { title: "OpenFOAM을 이용한 CFD 해석 프로그램 개발", client: "주성지앤비", year: "2021" },
            { title: "수중터널 침설시공법 모사 시험장치 제작", client: "대우건설", year: "2021" },
            { title: "영상계측 프로그램 개발", client: "대우건설", year: "2021" },
            { title: "2차원 와류진동 해석 소프트웨어 개발", client: "대우건설", year: "2020" },
        ],
    },
    {
        label: "기타", en: "Others", img: "/consult_perf/ebafb8eb9494ec96b41.gif", more: false,
        projects: [
            { title: "재난 및 범죄 현장 신속 신원확인 기술 확보 방안 연구", client: "과학치안진흥센터", year: "2025" },
            { title: "PINN 기반 Physical AI 해석 기술을 활용한 금형 게이트 최적화 시스템 개발", client: "포엠디엑스", year: "2025" },
            { title: "돔 표면온도 재구성 알고리즘 개발", client: "포항산업과학연구원", year: "2025" },
            { title: "자율 비자율 데이터 서비스 시범환경 구축", client: "금오공대", year: "2025" },
            { title: "AI 기반 공연현장 군중 밀집 사고예측 및 실시간 대응 플랫폼 기술 개발", client: "한국콘텐츠진흥원", year: "2024" },
            { title: "양자기술 기반 데이터센터 공조설계 시뮬레이션 실증", client: "SQK", year: "2024" },
            { title: "실감기반 첨단소방훈련체계 구축연구", client: "소방청", year: "2024" },
            { title: "KIMM-Flow 압축성 솔버 개발", client: "한국기계연구원", year: "2024" },
            { title: "배터리 충전실 열유동해석", client: "지오디", year: "2024" },
            { title: "온수롤 내부 유체 열유동 해석 및 열전달 해석", client: "지오디", year: "2023" },
            { title: "배터리 관리 시스템 보드제작 및 기술개발", client: "경인테크", year: "2023" },
            { title: "유체 운동의 실시간 시뮬레이터 개발을 위한 적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발", client: "KOITA", year: "2021" },
            { title: "풍력발전단지 구축 효율화를 위한 OpenFOAM 활용 대규모 유동해석 연구", client: "한국과학기술정보연구원", year: "2021" },
            { title: "Mixing system 전산유체해석 simulation", client: "메디톡스", year: "2021" },
            { title: "OpenFOAM의 슈퍼컴퓨터 활용을 위한 성능최적화, 솔버 개선 및 사용자환경 개발", client: "한국과학기술정보연구원", year: "2018" },
            { title: "공개소스 전산유체역학 라이브러리의 HPC 활용을 위한 웹 기반 UI 플랫폼 개발", client: "NIPA", year: "2015" },
            { title: "OpenFOAM 기반의 CFD 프로그램 개발", client: "한국기계연구원", year: "2018" },
        ],
    },
];

export default function ConsultProjectsPage() {
    const total = categories.reduce((acc, c) => acc + c.projects.length, 0);

    const scrollToCategory = (index: number) => {
        const el = document.getElementById(`cat-${index}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <PageLayout>

            <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                수행실적
            </h1>
            <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-6">
                Project References
            </p>
            <p className="text-white/80 text-[16px] leading-[1.9] mb-10">
                {total}건 이상의 수행실적을 보유하고 있습니다. 항공우주, 자동차/철도, 조선해양, 전기전자, 에너지, 건설 등 다양한 산업 분야에 걸쳐 전문 기술을 제공합니다.
            </p>

            <div className="flex flex-wrap gap-2 mb-16">
                {categories.map((cat, ci) => (
                    <button
                        key={ci}
                        onClick={() => scrollToCategory(ci)}
                        className="px-4 py-2 border border-white/40 text-white/80 text-[13px] tracking-wide hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {categories.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`} className="border-t-2 border-white/50 pt-14 mb-16 scroll-mt-24">
                    <SectionLabel>{cat.en}</SectionLabel>
                    <h2 className="text-white text-[28px] font-semibold tracking-tight mb-8">{cat.label}</h2>

                    <div className="relative w-full h-[240px] overflow-hidden border border-white/40 mb-10">
                        <Image
                            src={cat.img}
                            alt={cat.label}
                            fill
                            className="object-cover"
                            unoptimized={cat.img.endsWith(".gif")}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="flex flex-col">
                        {cat.projects.map((p, pi) => (
                            <div key={pi} className="flex items-start gap-6 py-4 border-b border-white/35">
                                <span className="text-white/55 text-[12px] tracking-widest w-5 pt-0.5 shrink-0">
                                    {String(pi + 1).padStart(2, "0")}
                                </span>
                                <span className="text-white text-[15px] leading-[1.7] flex-1">{p.title}</span>
                                <div className="flex flex-col items-end shrink-0 gap-0.5 pt-0.5">
                                    <span className="text-white/70 text-[13px] tracking-wide whitespace-nowrap">{p.client}</span>
                                    <span className="text-white/45 text-[12px] tracking-widest">{p.year}</span>
                                </div>
                            </div>
                        ))}
                        {cat.more && (
                            <div className="py-4">
                                <span className="text-white/40 text-[13px] tracking-[0.2em]">— 외 다수</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}

        </PageLayout>
    );
}
