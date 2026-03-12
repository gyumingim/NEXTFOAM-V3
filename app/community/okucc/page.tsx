"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import img12 from "@/public/okucc/kakaotalk_20250923_172004431_15.jpg";
import img11 from "@/public/okucc/okucc11.png";
import img10 from "@/public/okucc/okucc10-600x328.webp";
import img9 from "@/public/okucc/okucc9-600x322.webp";
import img8 from "@/public/okucc/okucc8-1-600x324.webp";
import img7 from "@/public/okucc/okucc7-600x326.webp";
import img6 from "@/public/okucc/okucc6-600x324.webp";
import img5 from "@/public/okucc/okucc5-600x324.webp";
import img4 from "@/public/okucc/okucc4-600x323.webp";
import img3 from "@/public/okucc/okucc3-600x325.webp";
import img2 from "@/public/okucc/okucc2-600x324.webp";
import img1 from "@/public/okucc/okucc1-600x323.webp";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

type Presentation = {
    title: string;
    org: string;
    presenter: string;
    keynote?: boolean;
};

type Conference = {
    edition: number;
    year: number;
    venue: string;
    date: string;
    img: StaticImageData;
    presentations: Presentation[];
};

const conferences: Conference[] = [
    {
        edition: 12,
        year: 2025,
        venue: "경주 더 케이 호텔",
        date: "2025.09.18 ~ 19",
        img: img12,
        presentations: [
            { title: "오픈 소스를 이용한 CFD Workflow 혁신", org: "넥스트폼", presenter: "김병윤" },
            { title: "미기상/CFD 모델을 활용한 대기환경모델링 연구", org: "서울시립대학교", presenter: "박승부" },
            { title: "고성능 데이터센터 대상 AI 자율운전을 위한 CFD 기반 시뮬레이터 구축", org: "오토시맨틱스", presenter: "박정규" },
            { title: "화학물질 취급 공정 환기 평가", org: "한국산업안전보건공단", presenter: "김규완" },
            { title: "KIMM Cyberlab 개발 방향", org: "한국기계연구원", presenter: "이충성" },
            { title: "OpenFOAM을 위한 책상용 베어울프 2-PC 클러스터 구축", org: "원자력 연구원", presenter: "김종태" },
            { title: "드론용 프로펠러 설계와 개발을 위한 OpenFOAM 활용 방안과 기술 협력 방안 제안", org: "니나노컴퍼니", presenter: "김건홍" },
            { title: "NASA ROBIN Helicopter simulation using OpenFOAM", org: "넥스트폼", presenter: "이보성" },
            { title: "BARAM, Inspiration through Insights!", org: "넥스트폼", presenter: "윤정구" },
            { title: "rhoPimpleFoam 기반 열플라즈마 토치 해석", org: "한국재료연구원", presenter: "전병륜" },
            { title: "선형 변환과 동적 격자의 조합을 통한 해석 효율화", org: "동아대학교", presenter: "박준상" },
            { title: "RANS 비등방성 난류 모델 구현", org: "선박해양플랜트연구소", presenter: "연성모" },
            { title: "압력기반 압축성 유동 해석자의 유동 해석 개선 연구 현황", org: "서울디지털대학교", presenter: "김태우" },
            { title: "넥스트폼 개발 사례", org: "넥스트폼", presenter: "김현식" },
            { title: "슈퍼컴퓨터의 재정의: AWS 클라우드 기반의 고성능 컴퓨팅 환경", org: "AWS", presenter: "조상만" },
            { title: "SW 교육의 새로운 기준, 버추얼클래스: AI, CAE, CAD를 위한 최적의 클라우드 실습 환경", org: "소프트웨이즈", presenter: "장재환" },
        ],
    },
    {
        edition: 11,
        year: 2024,
        venue: "호텔 ICC 대전",
        date: "2024.09.26 ~ 27",
        img: img11,
        presentations: [
            { title: "적합직교분해를 이용한 고속열차 전두부 형상최적설계 및 공력성능 향상기술 연구", org: "넥스트폼", presenter: "이웅현" },
            { title: "The modeling of rising bubble pair using adaptive mesh refinement", org: "부산대학교", presenter: "정유신" },
            { title: "대기오염 확산 시뮬레이션 SaaS 개발 및 실증", org: "넥스트폼", presenter: "김현식" },
            { title: "buoyantBoussinesqSimpleFoam 기반 위상최적화 연구", org: "부산대학교", presenter: "양재성" },
            { title: "LX디지털트윈 플랫폼 소개", org: "한국국토정보공사", presenter: "이용국" },
            { title: "BARAM, 돌풍 조심하세요", org: "넥스트폼", presenter: "김동규" },
            { title: "개수로 흐름에 대한 부력 수정 난류 모형의 적용성 검토", org: "한국건설기술연구원", presenter: "이두한" },
            { title: "Surface film model을 이용한 강판의 냉각 모델 기초 연구", org: "서울대학교", presenter: "이원강" },
            { title: "템플릿 메타 프로그램밍의 이해", org: "선박해양플랜트연구소", presenter: "연성모" },
            { title: "PIMPLE 알고리즘 기반 프로펠러 설계 프로세스에 대한 고찰 : 실패 사례와 극복 방안", org: "니나노컴퍼니", presenter: "김건홍" },
            { title: "High Performance Computing for CFD", org: "넥스트폼", presenter: "이보성" },
            { title: "Cut-Cell 기반 격자생성 기술 개발 현황", org: "한국원자력연구원", presenter: "김종태" },
            { title: "OpenFOAM의 overset 라이브러리, sugar++", org: "동아대학교", presenter: "김찬우" },
            { title: "Foam-extend와 AADO 기술을 이용한 축류 송풍기 설계 최적화", org: "피도텍", presenter: "이형진" },
        ],
    },
    {
        edition: 10,
        year: 2023,
        venue: "부산 누리마루 APEC 하우스",
        date: "2023.10.19 ~ 20",
        img: img10,
        presentations: [
            { title: "수리학 분야에서 OpenFOAM 활용과 전망", org: "한국건설기술연구원", presenter: "이두한 연구위원", keynote: true },
            { title: "조선해양 분야의 OpenFOAM 활용 사례 및 코드 개발 과정", org: "동아대학교", presenter: "이상봉 교수", keynote: true },
            { title: "Foam-extend를 이용한 가스터빈 유동해석", org: "한국항공우주연구원", presenter: "강승환" },
            { title: "CFD Simulation of Marine Propeller Cavitation Using Compressible and Incompressible Flow Solvers", org: "한국해양대학교", presenter: "Ng'aru Joseph Mwangi" },
            { title: "OpenFOAM의 중첩격자 라이브러리에 대한 분석", org: "동아대학교", presenter: "김찬우" },
            { title: "Suspension plasma spray의 열역학적 해석", org: "그린리소스", presenter: "김영기" },
            { title: "Paraview 활용 — 렌더링과 보고서 자동화", org: "넥스트폼", presenter: "박현강" },
            { title: "Multiple reference frame 기법을 이용한 KP505 프로펠러의 수치해석", org: "서울대학교", presenter: "김한준" },
            { title: "OpenFOAM의 압력기반 및 밀도기반 해석자의 고속 유동 해석 비교", org: "서울디지털대학교", presenter: "김태우" },
            { title: "오픈소스 설치매니저 Spack에서 OpenFOAM 활용", org: "삼성SDS", presenter: "김종록" },
            { title: "OpenFOAM 기반의 TFOAM 프로그램 개발 및 활용 사례", org: "주성지앤비", presenter: "조현보" },
            { title: "Product Roadmap", org: "넥스트폼", presenter: "이보성" },
            { title: "KIMM-Structure+KIMM-Flow를 활용한 1way FSI 소개", org: "한국기계연구원", presenter: "이충성" },
            { title: "BARAM, One Step Forward", org: "넥스트폼", presenter: "윤정구" },
            { title: "매개변수 형상 모델링을 적용한 OpenFOAM 해석 사례", org: "한국항공우주연구원", presenter: "김민우" },
            { title: "물리정보 인공지능 – OpenFOAM 결합 CFD 가속 연구", org: "전북대학교", presenter: "전준구" },
            { title: "인쇄형상 생성 및 Leveling 해석 자동화 프로세스 개발", org: "넥스트폼", presenter: "유강국" },
            { title: "다상유동과 동적격자 기법을 활용한 가변점도 레진 거동 예측 기술 개발", org: "삼성전자", presenter: "정순완" },
            { title: "OpenFOAM의 사소한 문제들", org: "넥스트폼", presenter: "길재흥" },
        ],
    },
    {
        edition: 9,
        year: 2022,
        venue: "호텔 ICC 대전",
        date: "2022.09.22 ~ 23",
        img: img9,
        presentations: [
            { title: "오픈소스 설계 해석 프로그램 KIMM Cyber Lab 소개", org: "한국기계연구원", presenter: "이충성", keynote: true },
            { title: "OpenFOAM for AI CFD", org: "광주과학기술원", presenter: "최성임", keynote: true },
            { title: "Paraview Programmable Filter", org: "넥스트폼", presenter: "박현강" },
            { title: "현대중공업 OpenFOAM 활용사례 소개", org: "현대중공업", presenter: "김상현" },
            { title: "BARAM Revised", org: "넥스트폼", presenter: "윤정구" },
            { title: "오픈폼을 이용한 수직 다단 원심 펌프의 CFD 시뮬레이션", org: "한국전자기술연구원", presenter: "이명성" },
            { title: "OpenFOAM을 이용한 격납건물 내 다상유동 연구", org: "한국원자력연구원", presenter: "김종태" },
            { title: "유체 운동의 실시간 시뮬레이터 개발을 위한 적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발", org: "넥스트폼", presenter: "이웅현" },
            { title: "Design of a Ducted Propeller System for a Drone using OpenFOAM", org: "니나노컴퍼니", presenter: "김건홍" },
        ],
    },
    {
        edition: 8,
        year: 2019,
        venue: "부산대 상남국제회관",
        date: "2019.09.27",
        img: img8,
        presentations: [
            { title: "공력 경계층 천이 및 안정성 연구의 개념 소개", org: "부산대학교", presenter: "박동훈", keynote: true },
            { title: "오픈 사이언스 플랫폼 – 계산과학 SW 발전의 가속화 및 OpenFOAM 적용사례", org: "한국과학기술정보연구원", presenter: "서정현", keynote: true },
            { title: "VTK 라이브러리를 활용한 CAD & 데이터 후처리", org: "두산중공업", presenter: "남경모" },
            { title: "공개 SW 라이선스 이해 및 관리", org: "공개SW역량프라자", presenter: "김병선" },
            { title: "넥스트폼의 항공우주 분야 개발 사례", org: "넥스트폼", presenter: "신재렬" },
            { title: "Single Section DES Study of Sirocco Fan", org: "삼성전자", presenter: "주종욱" },
            { title: "계산과학플랫폼(EDISON)에서 OpenFOAM 적용 사례", org: "넥스트폼", presenter: "김태우" },
            { title: "부유체 운동해석을 위한 Euler Overlay Method(EOM) 구현", org: "삼성중공업", presenter: "연성모" },
            { title: "해양 CFD 해석을 위한 OpenFOAM 개발 내용 소개", org: "삼성중공업", presenter: "연성모" },
            { title: "Actuator 기법을 이용한 프로펠러 3축 방향 힘/모멘트 해석 정확도 검증", org: "부산대학교", presenter: "이예빈" },
            { title: "우공이산 – 우공은 삽질로 산을 옮겼다", org: "현대중공업", presenter: "김건홍" },
            { title: "경계조건에 따른 자유수면의 이상 거동", org: "동아대학교", presenter: "김연주" },
            { title: "CFD + Neural Network", org: "넥스트폼", presenter: "서인덕" },
            { title: "오픈폼과 파이썬을 이용한 실험 데이터 가시화", org: "한국원자력연구원", presenter: "김종태" },
            { title: "넥스트폼의 조선해양분야 개발 사례", org: "넥스트폼", presenter: "김현식" },
            { title: "OpenFOAM의 슈퍼컴퓨팅 활용 동향 및 활성화 지원", org: "한국과학기술정보연구원", presenter: "윤태호" },
        ],
    },
    {
        edition: 7,
        year: 2018,
        venue: "서울대 글로벌컨벤션플라자",
        date: "2018.11.01",
        img: img7,
        presentations: [
            { title: "2018 OpenFOAM Release 소개", org: "현대중공업", presenter: "김건홍", keynote: true },
            { title: "BARAM v5 무엇에 쓰는 프로그램인가", org: "넥스트폼", presenter: "김병윤" },
            { title: "BeginnerFOAM 소개", org: "동아대학교", presenter: "이상봉" },
            { title: "수소 혼합 기체에서의 폭발 해석", org: "한국원자력연구원", presenter: "김종태" },
            { title: "Actuator Surface Method를 이용한 회전 날개 해석", org: "부산대학교", presenter: "박재영" },
            { title: "Stabilization of Gauss-Seidel Smoother", org: "동아대학교", presenter: "김연주" },
            { title: "OpenFOAM을 이용한 Home Engineering", org: "현대중공업", presenter: "김건홍" },
            { title: "Influence of free surface on turbulent characteristics in an open-channel flow", org: "동아대학교", presenter: "황아영" },
            { title: "유체-지반 연성 코드 작성 및 문제 해결", org: "해양대학교", presenter: "송성진" },
            { title: "OpenFOAM – Knights Landing 장비 병렬 테스트", org: "넥스트폼", presenter: "김현식" },
        ],
    },
    {
        edition: 6,
        year: 2017,
        venue: "국제원자력교육훈련센터",
        date: "2017.09.21 ~ 22",
        img: img6,
        presentations: [
            { title: "Consistent Velocity Interpolation for SIMPLE and PIMPLE Algorithm in Collocated Grid", org: "넥스트폼", presenter: "길재흥", keynote: true },
            { title: "CFD 주권회복 & 민주화", org: "서울대학교", presenter: "이신형", keynote: true },
            { title: "OpenFOAM Analysis on the Thermal-Hydraulics in the CANDU-6 Moderator", org: "군산대학교", presenter: "장세명" },
            { title: "압력 기반의 압축성 유동 해석자", org: "넥스트폼", presenter: "김태우" },
            { title: "넥스트폼이 오픈폼으로 계산했던 문제들", org: "넥스트폼", presenter: "김병윤" },
            { title: "interFOAM을 이용한 와류 분사기 유동 해석", org: "넥스트폼", presenter: "김재열" },
            { title: "전산풍동 개발 및 응용", org: "넥스트폼", presenter: "신재렬" },
            { title: "OpenFOAM GUI package Baram-v4.0 beta 소개", org: "넥스트폼", presenter: "오광호" },
            { title: "초공동 수중체의 제어판 전개 해석 방법", org: "넥스트폼", presenter: "이상돈" },
            { title: "정수 중 동적 자세 결정을 위한 알고리즘 개발", org: "동아대학교", presenter: "김연주" },
            { title: "ADM을 이용한 덕트 팬 꼬리 로터 공력 성능 예측", org: "부산대학교", presenter: "노나현" },
            { title: "고고도 장기체공 태양광 무인기 프로펠러 개발 사례 소개", org: "부산대학교", presenter: "박동훈" },
            { title: "새로운 무격자 기법의 소개 및 응용", org: "서울대학교", presenter: "김규홍" },
            { title: "12th OpenFOAM Workshop 참가 보고", org: "서울대학교", presenter: "서인덕" },
            { title: "벽면 모델링과 비정상 열전달 해석", org: "한국원자력연구원", presenter: "김종태" },
            { title: "M&S SW HEMOS 및 HEMOS-FLUID 소개", org: "한국과학기술정보연구원", presenter: "이석근" },
            { title: "Hyperloop and Aerodynamics", org: "한국교통대", presenter: "권혁빈" },
            { title: "해양플랜트를 위한 플랫폼 거동-계류계 연성해석 솔버 개발", org: "해양대학교", presenter: "이상철" },
        ],
    },
    {
        edition: 5,
        year: 2016,
        venue: "해양대 해양과학기술대학원",
        date: "2016.09.29 ~ 30",
        img: img5,
        presentations: [
            { title: "자연대류를 포함한 열전달 해석 솔버 개선", org: "넥스트폼", presenter: "길재흥", keynote: true },
            { title: "OpenFOAM을 이용한 항공기 착빙 현상 해석", org: "서울대학교", presenter: "이관중", keynote: true },
            { title: "Numerical Instability of OpenFOAM", org: "동아대학교", presenter: "이상봉", keynote: true },
            { title: "SNUFOAM을 이용한 수면 관통 물체 주위 난류 유동의 LES/RANS 해석", org: "서울대학교", presenter: "최학규" },
            { title: "OpenFOAM을 이용한 규칙파 중 원형 기둥에서의 파랑 상호작용에 관한 수치해석", org: "해양대학교", presenter: "송성진" },
            { title: "OpenFOAM을 이용한 파랑 중 선박의 부가저항 수치해석", org: "해양대학교", presenter: "서성욱" },
            { title: "현대중공업 선박해양연구소의 OpenFOAM을 이용한 선박 성능 해석 – 현재와 미래", org: "현대중공업", presenter: "김건홍" },
            { title: "OpenFOAM 솔버 수렴 특성", org: "한국원자력연구원", presenter: "김종태" },
            { title: "고속 유동 해석을 위한 압력 기반의 해석자 소개", org: "넥스트폼", presenter: "김태우" },
            { title: "Turbulent Inflow Profile for Numerical Wind Tunnel", org: "넥스트폼", presenter: "신재렬" },
            { title: "LTS 기법을 이용한 선박의 저항 및 항주자세 수치계산 시간 단축", org: "넥스트폼", presenter: "정광열" },
            { title: "Blender 3D를 활용한 CAD/Surface Mesh Repair", org: "삼성중공업", presenter: "연성모" },
            { title: "동적 환경변수 관리 도구를 활용한 OpenFOAM 사용환경 구축 및 OpenFOAM 개발을 위한 IDE 환경 구축", org: "삼성중공업", presenter: "연성모" },
            { title: "오픈폼을 이용한 120W급 동축반전팬의 유동해석", org: "전자부품연구원", presenter: "이명성" },
            { title: "interFoam을 활용한 용암유동 전산해석", org: "충북대학교", presenter: "황규관" },
        ],
    },
    {
        edition: 4,
        year: 2015,
        venue: "호텔 ICC 대전",
        date: "2015.09.10 ~ 11",
        img: img4,
        presentations: [
            { title: "OpenFOAM 솔버의 문제점 및 해결 방안", org: "넥스트폼", presenter: "길재흥", keynote: true },
            { title: "공기역학 해석을 위한 OpenFOAM 활용", org: "부산대학교", presenter: "오세종", keynote: true },
            { title: "OpenFOAM을 활용한 산업용 연소기 해석 연구 현황", org: "포항공과대학교", presenter: "허강열", keynote: true },
            { title: "선박 및 추진기의 SnappyHexMesh를 이용한 자동격자 생성 및 계산", org: "해양대학교", presenter: "박선호" },
            { title: "로터 후류 효과를 고려한 헬리콥터 동체의 착빙 형상 예측", org: "부산대학교", presenter: "손찬규" },
            { title: "OpenFOAM Analysis of CANDU-6 Moderator Circulation", org: "군산대학교", presenter: "장세명" },
            { title: "OpenFOAM 응용 변압기 해석 사례", org: "효성", presenter: "팽진기" },
            { title: "OpenFOAM 사용자 환경 개발 아이디어", org: "경원이앤씨", presenter: "김군홍" },
            { title: "Web 환경을 통한 OpenFOAM 구동", org: "넥스트폼", presenter: "노현석" },
            { title: "넥스트폼 OpenFOAM 활용 사례", org: "넥스트폼", presenter: "김병윤" },
        ],
    },
    {
        edition: 3,
        year: 2014,
        venue: "부산 노보텔 앰버서더 호텔",
        date: "2014.09.18",
        img: img3,
        presentations: [
            { title: "OpenFOAM을 활용한 전산 수치 해석 자동화 프로그램 개발과 응용", org: "현대중공업", presenter: "김건홍" },
            { title: "넥스트폼의 오픈폼 활용 사례", org: "넥스트폼", presenter: "김병윤" },
            { title: "Improvement of a legacy CFD code by OpenFOAM", org: "한국원자력연구원", presenter: "김종태" },
            { title: "로터 공력해석을 위한 Actuator Model 개발", org: "부산대학교", presenter: "김태우" },
            { title: "Multi-Scale Integrated Fuel Cell Model Using OpenFOAM", org: "세메스", presenter: "최해원" },
            { title: "OpenFOAM을 이용한 동네 예보 기반 공기중 축산 바이러스 확산 예보 시스템 개발", org: "넥스트폼", presenter: "노현석" },
        ],
    },
    {
        edition: 2,
        year: 2013,
        venue: "서울대 호암교수회관",
        date: "2013.10.24",
        img: img2,
        presentations: [
            { title: "왕복식(reciprocating) 펌프 캐비테이션 예측을 위한 오픈폼 솔버 개발", org: "넥스트폼", presenter: "김병윤" },
            { title: "도장공장 환기 설계용 CFD 시뮬레이터 개발", org: "대우조선해양", presenter: "고영호" },
            { title: "로터 및 외부유동 해석을 위한 오픈폼 솔버의 수정과 사용", org: "부산대학교", presenter: "김태우" },
            { title: "OpenFOAM을 이용한 항공기 공력해석 프로그램 ISAAC 개발", org: "한국항공우주산업", presenter: "신훈범" },
            { title: "Application of OpenFOAM to Prediction of Hull Resistance", org: "현대중공업", presenter: "이상봉" },
            { title: "LU-SGS 수치기법을 적용한 OpenFOAM 기반의 압축성 코드 개발 및 검증", org: "서울대학교", presenter: "김정현" },
        ],
    },
    {
        edition: 1,
        year: 2012,
        venue: "과학기술정보연구원",
        date: "2012.10.18",
        img: img1,
        presentations: [
            { title: "OpenFOAM 표준 해석자 알고리즘 변경을 통한 Actuator Disk Model 기반의 로터 해석자 개발", org: "부산대학교", presenter: "김태우" },
            { title: "도장 건조 예측을 위한 전산유체역학 시뮬레이터 개발", org: "대우조선해양", presenter: "심도식" },
            { title: "Incompressible and Compressible Flows with Cavitation", org: "서울대학교", presenter: "박선호" },
            { title: "공개SW 라이선스 이해와 관리", org: "공개SW역량프라자", presenter: "박준석" },
        ],
    },
];

const ordinalSuffix = (n: number) => {
    if (n === 1) return "1st";
    if (n === 2) return "2nd";
    if (n === 3) return "3rd";
    return `${n}th`;
};

export default function OkuccPage() {
    const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const scrollToEdition = (edition: number) => {
        const el = sectionRefs.current[edition];
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                    OKUCC
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-10">
                    OpenFOAM Korea Users&apos; Community Conference
                </p>
                <div className="flex flex-col gap-4 mb-14">
                    <p className="text-white/80 text-[15px] leading-[1.9]">
                        OKUCC는 국내 OpenFOAM 사용자들이 정보 및 최신동향 공유, 기술 교류, 네트워킹 등을 목적으로 1년에 한번 진행하는 컨퍼런스입니다.
                    </p>
                    <p className="text-white/80 text-[15px] leading-[1.9]">
                        OpenFOAM에 관심이 있거나 사용하고 있는 연구원, 엔지니어, 교수, 학생들이 참여하여, 이틀간 OpenFOAM에 관련된 주제와 응용 분야에 대해 다양한 발표와 토론이 이루어집니다.
                    </p>
                    <p className="text-white/60 text-[14px] leading-[1.9]">
                        아래에서 지난 행사와 발표 내용들을 찾아보세요.
                    </p>
                </div>

                {/* Edition Navigation */}
                <div className="flex flex-wrap gap-2 mb-20">
                    {conferences.map((c) => (
                        <button
                            key={c.edition}
                            onClick={() => scrollToEdition(c.edition)}
                            className="flex items-center gap-2 border border-white/20 px-4 py-2 text-white/60 text-[12px] tracking-widest hover:border-white/60 hover:text-white transition-colors duration-200"
                        >
                            <span>{ordinalSuffix(c.edition)}</span>
                            <span className="text-white/30">{c.year}</span>
                        </button>
                    ))}
                </div>

                {/* Conference Sections */}
                {conferences.map((conf) => (
                    <div
                        key={conf.edition}
                        ref={(el) => { sectionRefs.current[conf.edition] = el; }}
                        className="border-t border-white/20 pt-14 mb-20 scroll-mt-32"
                    >
                        <SectionLabel>
                            {ordinalSuffix(conf.edition)} OKUCC · {conf.year}
                        </SectionLabel>

                        <h2 className="text-white text-[26px] font-medium tracking-tight mb-2">
                            제{conf.edition}회 OKUCC
                        </h2>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-white/50 text-[13px]">{conf.venue}</span>
                            <span className="text-white/25 text-[11px]">|</span>
                            <span className="text-white/40 text-[13px]">{conf.date}</span>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-72 overflow-hidden mb-10">
                            <Image
                                src={conf.img}
                                alt={`${conf.edition}th OKUCC ${conf.year}`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Presentations */}
                        <div className="mb-6">
                            <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-5">발표자료 보기</span>
                            <div className="flex flex-col gap-px bg-white/10">
                                {conf.presentations.map((p, i) => (
                                    <div key={i} className="bg-black px-5 py-4 flex items-start gap-4">
                                        <span className="text-white/20 text-[11px] w-5 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                                            <div className="flex items-start gap-2">
                                                {p.keynote && (
                                                    <span className="shrink-0 border border-white/30 text-white/50 text-[9px] tracking-widest px-1.5 py-0.5 mt-0.5">
                                                        KEYNOTE
                                                    </span>
                                                )}
                                                <span className="text-white/90 text-[13px] leading-[1.7]">{p.title}</span>
                                            </div>
                                            <span className="text-white/40 text-[12px]">
                                                {p.org} &nbsp;·&nbsp; {p.presenter}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
