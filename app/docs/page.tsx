"use client"
import React, { useRef } from "react";
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";

type Paper = { title: string; author?: string; venue: string; hasLink?: boolean };
type YearGroup = { year: number; items: Paper[] };

const papers: YearGroup[] = [
    {
        year: 2025,
        items: [
            { title: "드라이아이스를 활용한 밀폐형 드론 내부 냉각 열공력 해석", author: "이보성", venue: "한국전산유체공학회 추계학술대회" },
            { title: "소규모 언어모델 기반 OpenFOAM(BARAM) 케이스 생성기 개발", author: "김현식", venue: "한국전산유체공학회 추계학술대회" },
            { title: "오픈폼의 열전달 해석 솔버와 중력에 관하여", author: "길재흥", venue: "한국전산유체공학회 추계학술대회" },
            { title: "적합직교분해를 이용한 대기오염 확산 실시간 시뮬레이션 기술 연구", venue: "한국전산유체공학회 춘계학술대회" },
        ],
    },
    {
        year: 2024,
        items: [
            { title: "오픈소스를 활용한 화학물질 누출사고 영향 범위 해석", author: "김현식, 길재흥, 박현강, 유지형", venue: "한국위험물학회 학술대회" },
            { title: "이중격자 기법을 사용한 판형-핀 열교환기 CFD 성능 해석", author: "김현식, 이현웅, 길재흥, 이명성", venue: "한국유체기계학술대회" },
            { title: "공개소스 전산유체역학 프로그램 BARAM의 개발방법 및 현황", author: "김병윤", venue: "한국전산유체공학회 추계학술대회" },
            { title: "적합직교분해를 이용한 고속열차 전두부 형상 최적설계 및 공력성능 향상 기술 연구", author: "이웅현", venue: "한국전산유체공학회 추계학술대회" },
            { title: "Two-Layer Realizable k-ε 난류 모델 개발", author: "길재흥", venue: "한국전산유체공학회 추계학술대회" },
        ],
    },
    {
        year: 2023,
        items: [
            { title: "An Automated Aerodynamic Analysis System in Missile Based on Open-Source Software", author: "유강국, 하정현, 이상철", venue: "International Journal of Aeronautical and Space Sciences" },
            { title: "Numerical study of reacting flow for bi-propellant thrust", author: "정황희, 신재렬, 채종원, 이복직", venue: "Asia Joint Conference on Propulsion and Power" },
            { title: "적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발 현황", author: "이웅현", venue: "공개소스 CFD 연구회 2023 동계 세미나" },
            { title: "차수축소모델을 이용한 형상최적설계를 위한 형상 및 격자 변형 방법", author: "이웅현", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "LM-AUSMPW+ scheme for all-speed on unstructured grid", author: "경태윤, 김규홍", venue: "한국항공우주학회 춘계학술대회" },
            { title: "동축 제트 유동에서 MMH/NTO 접촉 자발 점화에 대한 수치해석", author: "정황희, 신재렬, 채종원, 이복직", venue: "한국추진공학회 춘계학술대회" },
            { title: "Development of Automated Aerodynamic Analysis Process Using Open-source Software", author: "유강국", venue: "18th OpenFOAM Workshop", hasLink: true },
            { title: "Development of Web Platform of CFD Analysis Using OpenFOAM and Paraview", author: "서진원, 최봉근, 박현강, 이현웅", venue: "18th OpenFOAM Workshop", hasLink: true },
            { title: "공학분야 오픈 소스 소프트웨어 활성화 – OpenFOAM 현황 및 활용 방안", author: "오광호", venue: "KSC2023 & NSC 35th Anniversary Conference" },
            { title: "GPU accelerated OpenFOAM with petsc4Foam and performance comparison", author: "이보성", venue: "한국전산유체공학회 추계학술대회" },
            { title: "회전중인 로터 블레이드의 다지점 변위 측정을 위한 스테레오 계측 시스템 개발", author: "김정호, 신재렬", venue: "한국항공우주학회 춘계학술대회", hasLink: true },
            { title: "오픈소스기반 공력 해석 자동화 모듈을 이용한 유도무기 조종면 해석", author: "유강국", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "OpenFOAM의 사소한… 문제들", author: "길재흥", venue: "10th OKUCC" },
            { title: "인쇄형상 생성 및 Leveling 해석 자동화 프로세스 개발", author: "유강국", venue: "10th OKUCC" },
            { title: "BARAM, One Step Forward", author: "윤정구", venue: "10th OKUCC" },
            { title: "ParaView 활용 : 렌더링과 보고서 자동화", author: "박현강", venue: "10th OKUCC" },
        ],
    },
    {
        year: 2022,
        items: [
            { title: "육공복합무인기 형상 모델링 및 유동해석 자동화 프로세스 개발", author: "이보성, 김민우, 여홍구, 황인성", venue: "항공우주시스템공학회 춘계학술대회", hasLink: true },
            { title: "계층적 데이터 포맷(HDF)을 이용한 공력 데이터베이스 활용성 증대", author: "최대산, 김성태", venue: "한국항공우주학회 춘계학술대회", hasLink: true },
            { title: "유한체적법 기반 공개소프트웨어 OpenFOAM(BARAM)과 무격자 기반 CFD프로그램(FAMUS)의 소개", author: "이상돈", venue: "2022 KSIAM-NIMS School on CFD" },
            { title: "10N 추력기의 노즐 성능 해석을 위한 수치 연구", author: "정황희, 신재렬, 채종원", venue: "한국추진공학회 춘계학술대회" },
            { title: "무격자 기반 전산유체해석 프로그램 FAMUS", author: "최대산", venue: "한국항공우주학회 공기역학워크샵" },
            { title: "Improvement on M-AUSMPW+ scheme for all speed flow", author: "경태윤", venue: "APISAT2022" },
            { title: "유체 운동의 실시간 시뮬레이터 개발을 위한 적합직교분해 및 인공신경망 기반의 차수축소모델 자동구성 프레임워크 개발", author: "이웅현, 이상돈", venue: "한국전산유체공학회" },
            { title: "BARAM Revised", author: "윤정구", venue: "9th OKUCC" },
            { title: "유체 유동의 실시간 시뮬레이터 개발을 위한 적합직교분해 및 인공신경망 기반의 차수축소모델 구성 프레임워크 개발", author: "이웅현", venue: "9th OKUCC" },
            { title: "Paraview Programmable Filter", author: "박현강", venue: "9th OKUCC" },
            { title: "Open-source를 사용한 미사일 공력 해석 자동화", author: "유강국", venue: "9th OKUCC" },
        ],
    },
    {
        year: 2021,
        items: [
            { title: "Enhanced Pressure Based Coupled Algorithm to Combine with Pressure-Velocity-Enthalpy for all Mach Number Flow", author: "신재렬, 김태우", venue: "International Journal of Aeronautical and Space Sciences" },
            { title: "시간 적응 기법 개선 연구", author: "경태윤, 이재상, 허진영, 김규홍", venue: "한국항공우주학회 춘계학술대회" },
            { title: "플라즈마 풍동의 노즐-디퓨저 시스템 수치해석 및 스타팅 특성 분석", author: "최대산, 백진솔, 김규홍", venue: "한국항공우주학회 춘계학술대회", hasLink: true },
            { title: "BARAM-v6.3 upgrade", author: "김병윤", venue: "한국전산유체공학회 추계학술대회" },
            { title: "Numerical Study on Effects of Swirler Core Blockage Ratio of a Low-Swirl Model Combustor", author: "정황희, 신재렬, 이복직", venue: "10th Asian Joint Conference on Propulsion and Power" },
            { title: "FGM을 적용한 저선회 연소기의 코어 막힘률에 관한 수치적 연구", author: "정황희, 이복직, 신재렬", venue: "한국추진공학회 춘계학술대회" },
            { title: "무격자 해석 기법 기반의 질점계 적응 알고리즘", author: "경태윤, 이재상, 오준석, 김규홍", venue: "한국항공우주학회 추계학술대회" },
            { title: "크리깅 방법을 이용한 그리드핀 공력데이터 모델링", author: "김성태, 최대산, 유강국", venue: "한국항공우주학회 추계학술대회", hasLink: true },
            { title: "Platform Motions and Mooring System Coupled Solver for a Moored Floating Platform in a Wave", author: "이상철, 송성진, 박선호", venue: "Processes" },
            { title: "오픈소스 기반 미사일 공력해석 자동화", author: "유강국, 이상철", venue: "한국전산유체공학회 추계학술대회" },
            { title: "Unreal engine을 이용한 FDS 화재 시뮬레이션 가시화 방안", author: "정황희, 신재렬, 최형균, 김동현", venue: "한국전산유체공학회 추계학술대회" },
            { title: "An Automated Analysis Process for Missile Using Open-source Software", author: "유강국, 하정현, 이상철", venue: "Asia-Pacific International Symposium on Aerospace Technology" },
            { title: "Numerical Investigation of Flow and Starting Characteristics of Nozzle-Diffuser System for Plasma Wind Tunnel", author: "최대산, 김규홍", venue: "Asia-Pacific International Symposium on Aerospace Technology", hasLink: true },
            { title: "OpenFOAM을 활용한 액적분사 해석", author: "정황희, 신재렬, 채종원", venue: "한국항공우주학회 추계학술대회" },
            { title: "추력기의 액적 분사 해석을 위한 기초적인 수치연구", author: "정황희, 신재렬, 채종원", venue: "한국추진공학회 추계학술대회" },
        ],
    },
    {
        year: 2020,
        items: [
            { title: "발사체 해석을 위한 CFD 소프트웨어 적용 현황", author: "정황희, 김재열, 신재렬", venue: "한국추진공학회" },
            { title: "무격자 기법 기반의 유동해석 솔버를 이용한 초음속유동에서의 그리드핀 해석", author: "최대산, 김성태, 이상돈", venue: "한국항공우주학회", hasLink: true },
            { title: "RANS 난류 모델의 밀도와 부력이 규칙파 생성에 미치는 영향에 관한 연구", author: "서인덕, 정광열, 정재환, 조석규", venue: "한국해양과학기술협의회 공동학술대회", hasLink: true },
            { title: "희박 예혼합 저선회 연소기의 화염전달함수 수치해석", author: "정황희, 신재렬, 이복직", venue: "한국연소학회", hasLink: true },
            { title: "FDS 병렬화 성능 비교", author: "정황희, 신재렬, 이상곤, 김동현", venue: "한국전산유체공학회 통합학술대회", hasLink: true },
            { title: "오픈 소스 라이브러리를 활용한 CFD Workflow 자동화 기술 연구", author: "이상철", venue: "한국전산유체공학회 통합학술대회" },
            { title: "OpenFOAM 사용자환경 개선과 Windows 환경에서의 OpenFOAM 사용", author: "오광호", venue: "한국전산유체공학회 통합학술대회" },
            { title: "무격자 기법 기반 유동해석 솔버를 이용한 초음속 및 천음속 그리드핀 공력특성 분석", author: "최대산, 김성태, 이상돈", venue: "한국항공우주학회 추계학술대회", hasLink: true },
            { title: "비정상 유동 해석의 효율성 증대를 위한 시간 적응 기법", author: "경태윤, 이재상, 허진영, 김규홍", venue: "한국항공우주학회 추계학술대회", hasLink: true },
            { title: "시간 적응 기법 적용을 위한 시스템 미분 방정식의 분석", author: "경태윤, 이재상, 허진영, 김규홍", venue: "한국전산유체공학회 통합학술대회", hasLink: true },
            { title: "RANS 난류 모델이 원형 실린더 주위 wave run-up에 미치는 영향에 관한 연구", author: "서인덕, 정광열, 정재환, 조석규", venue: "한국해양공학회 추계학술대회" },
            { title: "Mesh Deformation Method for CFD-Based Hull form Optimization", author: "정광열, 정세민", venue: "Journal of Marine Science and Engineering" },
        ],
    },
    {
        year: 2019,
        items: [
            { title: "항공기 무장 분리 메커니즘 모사를 위한 6자유도 해석 모듈 개발", author: "최대산, 이웅현, 이상돈", venue: "한국항공우주학회 추계학술대회" },
            { title: "다코어 컴퓨팅 시스템에서 OpenFOAM 병렬 성능 연구", author: "김현식, 김태우", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "OpenFOAM을 이용한 소형 훈련정 자항해석", author: "정광열, 김용오, 한경남", venue: "해양과학기술협의회 공동학술대회" },
            { title: "FAMUS 소개", author: "김병윤", venue: "한국항공우주학회 공기역학워크샾" },
            { title: "계산과학플랫폼(EDISON)에서 OpenFOAM 적용 사례", author: "김태우", venue: "OKUCC" },
            { title: "CFD + Neural Network – Physics informed PDE modeling using Machine learning", author: "서인덕", venue: "OKUCC" },
            { title: "넥스트폼의 조선해양분야 개발 사례", author: "김현식", venue: "OKUCC" },
            { title: "넥스트폼의 항공우주분야 개발 사례", author: "신재렬", venue: "OKUCC" },
            { title: "High Speed Internal and External Flow Analysis with Improved Pressure-based Algorithm", author: "김태우", venue: "OFW14" },
        ],
    },
    {
        year: 2018,
        items: [
            { title: "다양한 마하수 영역의 유동 해석을 위한 Coupled 방식의 개선된 속도-압력-엔탈피 연계 알고리즘", author: "김태우, 신재렬", venue: "한국전산유체공학회지" },
            { title: "철도차량 통과 시 터널 내부 유동장 해석을 위한 무격자기법의 적용에 관한 연구", author: "이웅현, 이상돈", venue: "한국전산유체공학회지" },
            { title: "무격자 전산유체역학 프로그램 FAMUS 소개", author: "김병윤", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "Developments the 'ESPER' for Estimating Ship Performance", author: "김현식, 정광열, 길재흥", venue: "OFW13" },
            { title: "Deciding Optimal Parameter for Internal Wavemaker using Coupling of DAKOTA and OpenFOAM", author: "이웅현, 오상호, 이상돈", venue: "OFW13" },
            { title: "Application Fields of OpenFOAM", author: "신재렬", venue: "Symposium on Computational Wind Engineering" },
            { title: "오픈폼을 활용한 선박 성능해석 패키지 'ESPER' 개발", author: "김현식, 정광열, 길재흥", venue: "해양과학기술협의회 공동학술대회" },
            { title: "오픈소스를 이용한 연소해석을 위한 사용자 환경 개발", author: "김현식, 박성현, 김재열, 신재렬", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "로켓 엔진 해석을 위한 OpenFOAM 기반의 사용자 환경 개발", author: "신재렬", venue: "한국유체공학학술대회" },
            { title: "산업체에서 공개소스 CFD S/W의 활용방안 및 OpenFOAM의 현황", author: "김병윤", venue: "한국유체공학학술대회" },
            { title: "고속 외부 유동에 대한 FAMUS와 상용 프로그램의 해석 결과 비교", author: "김태우, 이상돈, 이웅현", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "다양한 마하수 영역의 유동 해석을 위한 압력-속도 연계 해석 알고리즘 개발", author: "김태우, 이복직, 한상훈, 조미옥, 김성구", venue: "한국추진공학회 춘계학술대회" },
            { title: "KNL 장비를 활용한 병렬성능", author: "김현식", venue: "OKUCC" },
            { title: "Baram v5 무엇에 쓰는 프로그램인가?", author: "김병윤", venue: "OKUCC" },
            { title: "발사체 해석용 LVAFoam 개발", author: "신재렬", venue: "OKUCC" },
            { title: "Improved Pressure-Velocity Coupled Algorithm For Compressible Flow", author: "김태우, 길재흥, 신재렬", venue: "OFW13" },
            { title: "수치해석을 이용한 의성 사촌리 마을숲 방풍효과 분석", author: "김동현, 김병윤", venue: "한국방재학회지" },
        ],
    },
    {
        year: 2017,
        items: [
            { title: "Octree 분할과 Cut-cell을 이용한 다면체격자 자동생성 프로그램 개발", author: "정광열", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "쇄빙선 유체하중 해석을 위한 다면체격자 자동생성 알고리즘 개발", author: "정광열, 한상헌", venue: "대한조선학회 추계학술대회" },
            { title: "압축성 유동 해석을 위한 압력 기반 해석자의 개선된 알고리즘 개발", author: "김태우, 길재흥", venue: "한국전산유체공학회지" },
            { title: "Consistent Velocity Interpolation for SIMPLE and PIMPLE Algorithm in Collocated Grid", author: "길재흥", venue: "OKUCC" },
            { title: "발사체 개발용 열 유동 수치모사 프로그램 개발 및 사용자환경 구축", author: "신재렬", venue: "OKUCC" },
            { title: "압력 기반의 압축성 유동 해석자", author: "김태우", venue: "OKUCC" },
            { title: "OpenFOAM GUI package Baram v4.0 소개", author: "오광호", venue: "OKUCC" },
            { title: "interFoam을 이용한 와류 분사기 유동 해석", author: "김재열", venue: "OKUCC" },
            { title: "초공동 수중체의 제어판 전개 해석 방법", author: "이상돈", venue: "OKUCC" },
            { title: "전산 풍동 개발 및 응용", author: "신재렬", venue: "OKUCC" },
            { title: "넥스트폼이 오픈폼으로 계산했던 문제들", author: "김병윤", venue: "OKUCC" },
        ],
    },
    {
        year: 2016,
        items: [
            { title: "선박의 저항성능해석에 대한 오픈폼의 활용성 검토", author: "정광열", venue: "해양과학기술협의회 공동학술대회", hasLink: true },
            { title: "공개소스 CFD 라이브러리를 활용한 선박 저항예측 패키지 개발", author: "김병윤, 정광열", venue: "KTTC 춘계 워크샾" },
            { title: "공개 소스 기반의 저속 열유동 해석용 전산유체해석 솔버 및 사용자환경 프레임(Baram-v2.1) 개발", author: "김병윤, 길재흥", venue: "한국전산유체공학회 추계학술대회" },
            { title: "자연대류를 고려한 열전달 해석 솔버 수정", author: "길재흥", venue: "OKUCC" },
            { title: "고속 유동 해석을 위한 압력 기반의 해석자 소개", author: "김태우", venue: "OKUCC" },
            { title: "전산풍동 개발을 위한 난류유입속도 형상 비교", author: "신재렬", venue: "OKUCC" },
            { title: "LTS 기법을 이용한 선박의 저항 및 항주자세 수치계산 시간 단축", author: "정광열, 길재흥", venue: "OKUCC" },
        ],
    },
    {
        year: 2015,
        items: [
            { title: "오픈 소스 코드를 이용한 터널내 화재 확산 예측 프로그램 개발", author: "김병윤, 길재흥, 조현보", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "준설토 배송관로 내에서의 개질재 혼합효율에 대한 CFD 해석", author: "박병준, 강병윤, 정민철, 신재렬", venue: "대한토목학회지" },
            { title: "추진기관 시험설비에서 한국형발사체 추진기관 화염냉각의 수치적 연구", author: "신재렬, 김성룡, 문성목", venue: "한국항공우주학회 추계학술대회" },
            { title: "OpenFOAM 솔버의 문제점 및 해결방안", author: "길재흥", venue: "OKUCC" },
            { title: "넥스트폼 OpenFOAM 활용사례", author: "김병윤", venue: "OKUCC" },
            { title: "Web 환경을 통한 OpenFOAM 구동", author: "노현석", venue: "OKUCC" },
        ],
    },
    {
        year: 2014,
        items: [
            { title: "OpenFOAM을 이용한 동네 예보 기반 공기중 축산 바이러스 확산 예보 시스템 개발", author: "노현석, 이인복, 한용규", venue: "한국전산유체공학회 춘계학술대회" },
            { title: "오픈소스 CFD 프로그램 오픈폼(OpenFOAM)이 제공하는 다물리 해석을 위한 라이브러리", author: "김병윤", venue: "한국전산유체공학회 춘계학술대회", hasLink: true },
            { title: "공개 SW를 이용한 교반기 전산유동해석 프로그램 개발", author: "김병윤, 길재흥, 노현석", venue: "한국유체공학학술대회" },
            { title: "Flow Analysis of Porous Structure Using OpenFOAM", author: "신재렬, 김병윤", venue: "한국유체공학학술대회" },
            { title: "Development of Live Stock Airborne Virus Spread Warning System Based on Weather Forecast using OpenFOAM", author: "노현석, 이인복, 한용규", venue: "OFW9", hasLink: true },
            { title: "Web-based forecasting system for the airborne spread of livestock infectious disease using computational fluid dynamics", author: "서일환, 이인복, 홍세원, 노현석, 박주현", venue: "Biosystems Engineering" },
            { title: "Numerical Multi-scale Analysis of Turbulent Flow Around Low-speed Ship with Energy Saving Pre-swirl Stator", author: "박선호, 오광호", venue: "ISOPE", hasLink: true },
            { title: "Full scale performance prediction of an energy saving device by using computational fluid dynamics", author: "박선호, 오광호, 이신형", venue: "ACFD10", hasLink: true },
            { title: "성긴 격자의 결과를 초기 유동장으로 이용한 선박의 저항추정 시간 단축", author: "정광열, 오광호, 김병윤", venue: "한국유체공학학술대회" },
            { title: "추진기관시험설비에서 비반응 플룸모델을 이용한 한국형발사체 1단 추진기관의 배기플룸 거동 평가", author: "신재렬, 문성목, 김성룡", venue: "한국추진공학회 추계학술대회", hasLink: true },
            { title: "추진기관시험설비에서 DPM 모델을 이용한 한국형 발사체 1단 추진기관의 화염냉각의 수치적 연구", author: "신재렬, 문성목, 김성룡", venue: "한국추진공학회 추계학술대회", hasLink: true },
            { title: "OpenFOAM을 이용한 동네 예보 기반 공기중 축산 바이러스 확산 예보 시스템 개발", author: "노현석, 이인복, 한용규", venue: "OKUCC" },
            { title: "넥스트폼의 OpenFOAM 활용사례", author: "김병윤", venue: "OKUCC" },
        ],
    },
    {
        year: 2013,
        items: [
            { title: "오픈소스(OpenFOAM)에 기반한 공력해석 전용 프로그램(ISAAC) 개발 – 전/후처리와 사용자 환경", author: "김병윤, 길재흥, 신훈범", venue: "한국항공우주학회 추계학술대회", hasLink: true },
            { title: "오픈소스(OpenFOAM)에 기반한 내재적 방법의 압축성 전산유체해석 프로그램(ISAAC)의 개발", author: "신훈범, 정성기, 김지홍, 길재흥, 김병윤, 김정현, 김규홍", venue: "한국항공우주학회 추계학술대회" },
            { title: "오픈폼(OpenFOAM)에 LU-SGS 알고리즘을 이용한 밀도 기반의 내재적 Navier-Stokes Solver 코드 개발 및 검증", author: "김정현, 김규홍, 김지홍, 신훈범, 김병윤, 길재흥", venue: "한국항공우주학회 추계학술대회" },
            { title: "플럭스 기법의 수치 점성항 비교 연구", author: "신재렬, 최정열", venue: "한국항공우주학회 추계학술대회" },
            { title: "Development and Validation of a Density-Based Implicit Solver Using LG-SGS Algorithm", author: "길재흥, 김병윤, 김지홍, 신훈범, 정성기, 김규홍", venue: "OFW8" },
            { title: "Development of automatic package for prediction of ship resistance", author: "오광호, 노현석, 김병윤", venue: "OFW8" },
            { title: "왕복식(reciprocating) 펌프 캐비테이션 예측을 위한 오픈폼 솔버 개발", author: "김병윤, 길재흥, 노현석, 박선호", venue: "OKUCC" },
        ],
    },
    {
        year: 2012,
        items: [
            { title: "오픈소스 CFD 코드 오픈폼(OpenFOAM)을 이용한 가스터빈엔진 노즐-터빈 유동 해석", author: "김병윤, 김병휘, 길재흥", venue: "한국전산유체공학회 춘계학술대회", hasLink: true },
            { title: "Development and Validation of Computational Wind Field Model(Wind scape)", author: "김동현, 김병윤", venue: "4th Asian Joint Workshop on Thermophysics and Fluid Science", hasLink: true },
            { title: "오픈소스 CFD 도구 오픈폼(OpenFOAM)을 사용한 수송체 외부유동해석 프로그램 개발", author: "김병윤, 길재흥, 노현석", venue: "한국유체공학학술대회", hasLink: true },
        ],
    },
    {
        year: 2011,
        items: [
            { title: "OpenFOAM을 이용한 댐 여수로의 3차원 수치모의 적용성 검토", author: "박병준, 김병윤, 정요한, 김민균", venue: "대한토목학회 추계학술대회", hasLink: true },
            { title: "오픈 소스 CFD 코드를 이용한 차세대 고속열차 공력 해석", author: "김병윤, 길재흥, 권혁빈", venue: "한국전산유체공학회 춘계학술대회" },
        ],
    },
];

export default function DocsPage() {
    const yearRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const totalCount = papers.reduce((acc, p) => acc + p.items.length, 0);

    const scrollToYear = (year: number) => {
        yearRefs.current[year]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <div className="flex items-end justify-between mb-6">
                    <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none">
                        논문 및<br />학술대회 발표
                    </h1>
                    <div className="text-right pb-2">
                        <div className="text-white text-[48px] font-bold leading-none tracking-tighter">{totalCount}</div>
                        <div className="text-white/40 text-[12px] tracking-widest uppercase mt-1">publications</div>
                    </div>
                </div>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-16">
                    Publications & Conference Proceedings
                </p>

                {/* 연도 네비게이션 */}
                <div className="flex flex-wrap gap-2 mb-16 border-t border-white/20 pt-10">
                    {papers.map(({ year, items }) => (
                        <button
                            key={year}
                            onClick={() => scrollToYear(year)}
                            className="group flex items-center gap-2 px-4 py-2 border border-white/20 text-white/60 text-[13px] hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                        >
                            {year}
                            <span className="text-white/30 group-hover:text-black/40 text-[11px]">{items.length}</span>
                        </button>
                    ))}
                </div>

                {/* 연도별 목록 */}
                <div className="flex flex-col gap-16">
                    {papers.map(({ year, items }) => (
                        <div
                            key={year}
                            ref={el => { yearRefs.current[year] = el; }}
                            className="scroll-mt-32"
                        >
                            <div className="flex items-baseline gap-4 mb-6 border-b border-white/20 pb-4">
                                <span className="text-white text-[36px] font-bold leading-none tracking-tighter">{year}</span>
                                <span className="text-white/30 text-[12px] tracking-widest">{items.length} papers</span>
                            </div>

                            <div className="flex flex-col">
                                {items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex items-start justify-between gap-4 py-4 border-b border-white/10 hover:border-white/30 transition-all duration-200"
                                    >
                                        <div className="flex gap-5 items-start flex-1">
                                            <span className="text-white/25 text-[11px] tracking-widest w-5 pt-0.5 shrink-0">
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white text-[14px] font-medium leading-snug">{item.title}</span>
                                                <span className="text-white/50 text-[12px] leading-relaxed">
                                                    {item.author && `${item.author} · `}{item.venue}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-white/25 group-hover:text-white text-[14px] transition-colors duration-200 shrink-0 pt-0.5">
                                            {item.hasLink ? "↗" : "→"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
