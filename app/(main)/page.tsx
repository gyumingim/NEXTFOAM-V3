"use client"
import { Header } from "@/widgets/header/Header";
import Image from "next/image";
import space from "@/public/space.png"
import arrow from "@/public/arrow.svg"

import news2 from "@/public/news/AI타임즈.png"
import news3 from "@/public/news/경상일보.png"
import news1 from "@/public/news/경주신문.png"
import news6 from "@/public/news/뉴스메카.png"
import news5 from "@/public/news/디지털타임즈.png"
import news4 from "@/public/news/브릿지경제.png"

import port1 from "@/public/port/port1.gif"
import port2 from "@/public/port/port2.png"
import port3 from "@/public/port/port3.webp"
import port4 from "@/public/port/port4.png"
import port5 from "@/public/port/port5.png"
import port6 from "@/public/port/port6.png"
import port7 from "@/public/port/port7.webp"
import port8 from "@/public/port/port8.png"

import nextfoam from "@/public/introduce/nextfoam.jpg"

import React, { useRef, useEffect, useState } from 'react';
import { div } from "framer-motion/client";
import next from "next";
// import { useDraggable } from 'react-use-draggable-scroll';

export default function Home() {
    return (
        <div className="w-full h-full">
            <Header />
            <HeroPage />
            <DescriptionPage />
            <PurposePage />
            <BaramPage />
            {/* <BaramFeaturePage /> */}
            <PortfolioPage />
            <DocumentationPage />
            <InThePressPage />
            <PartnershipPage />
            <ReleasePage />
            <CompanyNewsPage />
            <JoinTeamPage />
            <FooterPage />
        </div>
    );
}

const LearnMore = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} font-[300] bg-black w-fit border-1 border-white/40 rounded-[.2rem] duration-300 transition-all py-[.7vw] px-[1vw] text-[.8vw] hover:bg-white hover:text-black text-white`}>
            <div className="">→ Learn more</div>
        </div>
    )
}

const HeroContainer = ({ className, title, desc, isLeft, image }: { className?: any, title: any, desc:any, isLeft:any, image:any }) => {
    return (
        <div className={` w-full ${className} overflow-hidden relative whitespace-pre-line`}>
            <Image src={image} alt="null" className="overflow-hidden min-w-[100vw] opacity-70" />
            <HeroMain className={isLeft}>
                <div className="drop-shadow-[0_0_5px_rgba(0,0,0,0.2)]">
                    {title}
                </div>
                <div className="font-[300] text-white text-[.9vw] leading-[1.5vw] mt-[3vh] ">
                    <div className="drop-shadow-[0_0_3px_rgba(0,0,0,1)]">
                        {desc}
                    </div>
                    <LearnMore className="mt-[4vh]" />
                </div>
            </HeroMain>
        </div>

    )
}

const HeroMain = ({ className, children }: { className?: any, children: any }) => {
    return (
        <div className={`absolute bottom-[28vh] ${className} font-[600] text-white text-[3vw] leading-[3vw]`}>
            {children}
        </div>
    )
}


const Index = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={className}>
            <span className="text-black bg-white px-[.5vw] py-[.25vw] text-[0.75rem]">{text}</span>
            <span className="text-white px-[.5vw] text-[0.75rem]">{text}</span>
        </div>
    )
}

const HeroPage = () => {
    return (
        <HeroContainer 
            className="h-[100vh]" 
            title={`OPENING \n NEXT-GENERATION \n CFD SIMULATION`}
            desc={`넥스트폼은 최고의 기술력으로 여러분의 엔지니어링 문제에 대한 \n 컨설팅을 제공합니다`}
            isLeft={`left-[6vw]`} 
            image={space}
        />
    )
}


const DescriptionPage = () => {
    return (
        <HeroContainer 
            className="h-[120vh]" 
            title="NEXTFOAM" 
            desc={`넥스트폼은 2011년 3명이 모여 오픈소스 CFD 코드인 
                  OpenFOAM을 기반으로, 기술 기반의 전문 엔지니어링 컨설팅 기업으로 
                  물리현상 시뮬레이션 분야의 패러다임 전환을 목표로 출발하였습니다. 
                  이후 다양한 산업 분야의 전문 인력들이 동참하여 열유체 분야에서 
                  국내의 대표적인 컨설팅 기업으로 발전하여 
                  현재 총 24명이 함께하고 있습니다.`}
            isLeft={`right-[6vw]`} 
            image={nextfoam}
        />
    )
}

const PurposePage = () => {
    return (
        <HeroContainer 
            className="h-[100vh]" 
            title={`MAKING CFD 
                    FOR EVERYONE.`}
            desc={`2025년 현재 15년째를 맞이하는 넥스트폼은 지금까지 산업체, 공공기관 등
                  100여 개의 기관과 300여건의 컨설팅 프로젝트를 수행하였습니다. 
                  한국전산유체공학회, 한국항공우주학회, 대한조선학회 등의 여러 학회에서 
                  특별세션, 후원, 전시부스 등의 학술활동을 계속해 오고 있습니다 `}
            isLeft={`left-[6vw]`} 
            image={space}
        />
    )
}

const BaramPage = () => {
    return (
        <div className="bg-black w-full h-[120vh] flex flex-col p-[1vw]">
            <Index text={"BARAM"} className={"mt-[8vw] mb-[8vw]"} />
            <div className="w-screen h-[50%] flex items-center justify-center">
                <div className="text-white/30 text-[clamp(5vw,100vw,30vw)] left-0 absolute">
                    BARAM
                </div>
            </div>

            <div className="flex-row flex justify-between p-[1vw] mt-[16vh]">
                <div className="text-white">
                    No More Pay Lincese Fee for CFD
                </div>
                {/* <div className="text-white">
                    2019-2025
                </div> */}
            </div>
            <LearnMore className="mt-[2vh] ml-[1rem]" />

        </div>
    )
}
const BaramFeaturePage: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    // const { events } = useDraggable(scrollRef);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 3;

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth / totalItems;
            scrollRef.current.scrollTo({ left: scrollWidth * index, behavior: 'smooth' });
            setCurrentIndex(index);
        }
    };

    const handlePrev = () => scrollToIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
    const handleNext = () => scrollToIndex((currentIndex + 1) % totalItems);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    return (
        <div className="bg-black w-full h-[150vh] flex flex-col p-[1vw]">
            <Index text={"BARAM FEATURE"} className={"mt-[8vw] mb-[8vw]"} />
            <div
                ref={scrollRef}
                // {...events}
                className="flex flex-row overflow-x-auto gap-8 scrollbar-hide cursor-grab active:cursor-grabbing"
            >
                {[1, 2, 3].map((item) => (
                    <div key={item} className="w-[70vw] h-[40vw] relative min-w-[70vw] overflow-hidden">
                        <div className="text-white text-[4vw] font-light mb-4">SUBSCRIPTION {item}</div>
                        <Image src={space} alt="" />
                        <div className="bg-white/60 absolute z-10 bottom-0 text-xl backdrop-blur-sm px-2 py-1 ">
                            BARAM® offers software maintenance, technical <br />
                            support, and training services through a subscription <br />
                            agreement with Nextfoam. When necessary, <br />
                            verification can be performed through BMT. The <br />
                            development priorities of BARAM are determined <br />
                            primarily based on the requests of subscription <br />
                            customers. Two subscription tiers—Workgroup and <br />
                            Enterprise—are available to meet different customer <br />
                            needs.
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
                <div className="w-full h-1 bg-white/20 relative">
                    <div
                        className="absolute h-full bg-white transition-all duration-1000"
                        style={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
                    />
                </div>
                <div className="flex gap-4">
                    <button onClick={handlePrev} className="text-white text-2xl px-4 py-2">←</button>
                    <button onClick={() => setIsPaused(!isPaused)} className="text-white text-2xl px-4 py-2">
                        {isPaused ? '▶' : '||'}
                    </button>
                    <button onClick={handleNext} className="text-white text-2xl px-4 py-2">→</button>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

const PortfolioPage = () => {
    const items = [
        [port1, "CFD를 이용한 폭발 시뮬레이션", "폭발 · 시뮬레이션"],
        [port2, "대기 오염물 확산 SaaS 개발", "폭발 · 시뮬레이션"],
        [port3, "고속열차 전두부 형상 최적화", "폭발 · 시뮬레이션"],
        [port4, "비행체 CFD 인터페이스 개발", "폭발 · 시뮬레이션"],
        [port5, "CFD Workflow 최적화", "폭발 · 시뮬레이션"],
        [port6, "공력 DB 프레임워크 개발", "폭발 · 시뮬레이션"],
        [port7, "그리드 핀 공력DB 구축", "폭발 · 시뮬레이션"],
        [port8, "오염물질 확산 시뮬레이션", "폭발 · 시뮬레이션"]]; // 8개 아이템 예시

    return (
        <div className="bg-black w-full min-h-screen flex flex-col p-[1vw]">
            {/* 타이틀 */}
            <Index text={"PORTFOLIO"} className={"mt-[8vw] mb-[8vw]"} />

            {/* 그리드 영역 */}
            {/* gap-y를 넉넉하게 주어 위아래 카드 간격을 벌립니다 */}
            <div className="grid grid-cols-2 gap-x-[1vw] gap-y-[4vw]">
                {items.map((item, key) => (
                    <div
                        key={key}
                        className="group flex flex-col w-full cursor-pointer hover:bg-neutral-700 duration-300 transition-all p-[2rem] rounded-2xl"
                    >
                        {/* 1. 이미지 영역 (텍스트와 분리됨) */}
                        <div className="w-full h-[28vw] rounded-[1vw] overflow-hidden bg-neutral-900">
                            <Image
                                src={item[0]}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* 2. 텍스트 영역 (이미지 밖으로 나옴) */}
                        <div className="mt-[.5vw] flex flex-col">
                            {/* 작은 텍스트 (날짜/카테고리 등) */}
                            <div className="text-neutral-400 text-[0.875vw] font-medium mt-[0.2vw] mb-[0.1vw]">
                                {item[2].toString()}
                            </div>
                            {/* 큰 타이틀 */}
                            <div className="text-white text-[2.5vw] font-[400] leading-tight decoration-white underline-offset-4">
                                {item[1].toString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 더보기 버튼 */}
            <LearnMore className="mt-[8vh] mx-auto text-[1vw]" />
        </div>
    );
};

const DocumentationPage = () => {
    const documentation1 = [
        "BARAM의 Real Time Simulator 성능 평가",
        "BARAM v25.3 Release Notes",
        "BARAM Validation – Pressure based solver",
        "BARAM Validation – Density based solver",
        "BaramMesh Tips",
        "ParaView Tips",
        "공개 소스 CFD 프로그램 BARAM의 개발 방법 및 현황",
        "BARAM 서브스크립션과 서비스",
        "BARAM v25.2 Release Notes",
        "BARAM v25.1 Release notes"
    ];

    const documentation2 = [
        "오픈 소스를 이용한 CFD Workflow 혁신",
        "CFD 패러다임의 전환",
        "전산유체역학(CFD)이란",
        "전산유체역학(CFD) 해석 절차서",
        "NextFOAM 이란?",
        "수치지형도를 이용한 CFD 전처리 자동화 및 오염물질",
        "대기 오염물질 확산 CFD SaaS 개발",
        "Open Source CFD, OpenFOAM에 대한 오해",
        "Cavitation 해석 사례",
        "CFD Workflow 최적화"
    ];
    return (
        <div className="bg-black w-full min-h-screen flex flex-col p-[1vw]">
            {/* 헤더 섹션 */}
            <div className="flex justify-between items-end border-neutral-800 pb-[1vw] mb-[6vw]">
                <Index text={"DOCUMENTATION"} className={"mt-[8vw] mb-[2vw]"} />
            </div>

            {/* 리스트 영역 */}
            <div className="flex flex-col">
                {[...documentation1, ...documentation2].map((text, key) => (
                    <div
                        key={key}
                        className="group relative flex items-center justify-between py-[1.25vw] px-[1vw] border-b border-neutral-900 hover:border-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
                    >
                        {/* 배경 반전 레이어: 초반엔 빠르게 차오르고 후반엔 끈적하게 멈춤 */}
                        <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom" />

                        {/* 인덱스 */}
                        <span className="relative z-10 text-neutral-600 text-[1vw] font-[500] group-hover:text-black transition-colors duration-500 ease-out">
                            {String(key + 1).padStart(3, '0')}
                        </span>

                        {/* 메인 텍스트 */}
                        <div className="relative z-10 flex-1 px-[2vw] text-white text-[3vw] font-[500] group-hover:text-black transition-colors duration-500 ease-out uppercase">
                            {text}
                        </div>

                        {/* 우측 정보 */}
                        <div className="relative z-10 flex items-center gap-[3vw]">
                            <span className="text-neutral-500 text-[1.25vw] font-[500] group-hover:text-black transition-colors duration-500">
                                2025.11.21
                            </span>
                            <span className="text-white text-[2vw] group-hover:text-black transform group-hover:rotate-45 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                ↗
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const InThePressPage = () => {
    // 기사 데이터 배열
    const newsArticles = [
        {
            id: 1,
            image: news1,
            title: "BARAM® Announces New Partnership",
            content: "국내 OpenFOAM 사용자들의 최대 교류 행사인 '제12회 한국 OpenFOAM 사용자 모임'이 오는 18일부터 19일까지 경주에서 열린다. 이번 행사는 넥스트폼과 한국기계연구원 주관으로 마련되며, 학계·산업계·연구기관 전문가들이 한자리에 모여 최신 전산유체역학(CFD) 기술과 오픈소스 활용 사례를 공유한다."
        },
        {
            id: 2,
            image: news2,
            title: "Industry Recognition Award",
            content: "국내 산업용 시뮬레이션 시장은 외산 소프트웨어 의존도가 높다. 이에 매년 수백억 원의 세금과 산업 비용이 해외로 유출되고 있다. 이 가운데 넥스트폼(Nextfoam)이 개발한 오픈소스 전산유체역학(CFD) 솔루션 '바람(BARAM)'이 주목받고 있다."
        },
        {
            id: 3,
            image: news3,
            title: "New Release Update",
            content: "국내 산업계가 전산유체역학(CFD) 분야에서 외산 소프트웨어에 지나치게 의존하고 있는 상황에서, 넥스트폼(Nextform Inc.)이 자체 개발한 CFD 솔버 '바람(Baram)'을 앞세워 산업용 시뮬레이션 시장에 본격 도전장을 내밀었다."
        },
        {
            id: 4,
            image: news4,
            title: "Global Expansion News",
            content: "전산유체역학(CFD) 전문기업 넥스트폼이 오픈소스 프리웨어 CFD 솔루션 'BARAM(바람)'을 공식 출시하고 상용화에 나섰다. CFD(Computational Fluid Dynamics)는 열·유체의 흐름을 컴퓨터를 이용해 시뮬레이션 하는 기술이다."
        },
        {
            id: 5,
            image: news5,
            title: "Technical Innovation Spotlight",
            content: "전산유체역학(CFD) 전문기업 넥스트폼은 국내 첫 오픈소스 프리웨어 CFD 솔루션 '바람(BARAM)'을 공식 출시한다고 17일 밝혔다. 이 솔루션은 누구나 자유롭게 사용할 수 있는 오픈소스 기반 CFD 소프트웨어(SW)다. 복잡한 명령어 입력 없이도 간편한 그래픽사용자인터페이스(GUI) 환경에서 메시 생성, 유동 해석, 결과 시각화까지 원스톱으로 수행할 수 있도록 지원한다."
        },
        {
            id: 6,
            image: news6,
            title: "Customer Success Story",
            content: "전산유체역학(CFD) 전문기업 ㈜넥스트폼은 오픈소스 프리웨어 CFD 솔루션 'BARAM(바람)'을 공식 출시하고 상용화에 나섰다고 16일 밝혔다. 넥스트폼이 국내 처음 개발한 'BARAM'은 오픈소스 기반의 전산유체해석(CFD) 소프트웨어이다. 복잡한 명령어 입력 없이도 간편한 GUI(그래픽유저인터페이스) 환경에서 메시지 생성에서부터 유동 해석, 결과 시각화에 이르는 일련의 작업을 원스톱으로 끝마칠 수 있다."
        }
    ];

    return (
        <div className="bg-black w-full h-[100vh] flex flex-col p-[1vw]">
            <Index text={"IN THE PRESS"} className={"mt-[8vw]"} />
            <div className="text-white text-[6vw] mt-[6vw] mb-[8vw]">
                IN THE PRESS
            </div>

            <div className="overflow-hidden">
                <div className="flex animate-scroll">
                    {/* 무한 스크롤을 위해 3번 반복 */}
                    {[...Array(3)].map((_, setIndex) => (
                        newsArticles.map((article) => (
                            <div
                                key={`set-${setIndex}-article-${article.id}`}
                                className="w-[25vw] h-[30vw] relative min-w-[30vw] overflow-hidden border-l-1 border-white/20 py-[.25vw] px-[1vw] mr-8"
                            >
                                <div className="w-full h-[2vw] relative overflow-hidden items-center flex">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        className="w-[10vw] object-cover"
                                    />
                                </div>
                                <div className="text-[1.125vw] leading-[1.875vw] text-white mt-[2vw]">
                                    {article.content}
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100%/3));
                    }
                }

                .animate-scroll {
                    animation: scroll 100s linear infinite;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

interface LogoRow {
    logos: string[];
    speed: number;
    direction: 1 | -1;
}

const PartnershipPage: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    const logoImages: string[] = [
        'https://cdn.simpleicons.org/google/ffffff',
        'https://cdn.simpleicons.org/apple/ffffff',
        'https://cdn.simpleicons.org/meta/ffffff',
        'https://cdn.simpleicons.org/netflix/ffffff',
        'https://cdn.simpleicons.org/spotify/ffffff',
        'https://cdn.simpleicons.org/nike/ffffff',
        'https://cdn.simpleicons.org/adidas/ffffff',
        'https://cdn.simpleicons.org/tesla/ffffff',
        'https://cdn.simpleicons.org/samsung/ffffff',
        'https://cdn.simpleicons.org/sony/ffffff',
        'https://cdn.simpleicons.org/intel/ffffff',
        'https://cdn.simpleicons.org/nvidia/ffffff',
        'https://cdn.simpleicons.org/amd/ffffff',
        'https://cdn.simpleicons.org/salesforce/ffffff',
        'https://cdn.simpleicons.org/airbnb/ffffff',
        'https://cdn.simpleicons.org/uber/ffffff',
        'https://cdn.simpleicons.org/github/ffffff',
        'https://cdn.simpleicons.org/stripe/ffffff',
        'https://cdn.simpleicons.org/shopify/ffffff',
        'https://cdn.simpleicons.org/slack/ffffff',
        'https://cdn.simpleicons.org/zoom/ffffff',
        'https://cdn.simpleicons.org/dropbox/ffffff',
        'https://cdn.simpleicons.org/notion/ffffff',
    ];

    const rowCount = 3;
    const itemsPerRow = Math.ceil(logoImages.length / rowCount);

    const rows: LogoRow[] = [
        { logos: logoImages.slice(0, itemsPerRow), speed: 0.5, direction: 1 },
        { logos: logoImages.slice(itemsPerRow, itemsPerRow * 2), speed: 0.6, direction: 1 },
        { logos: logoImages.slice(itemsPerRow * 2), speed: 0.7, direction: 1 }
    ];

    return (
        <div className="bg-black w-full h-[120vh] flex flex-col p-[1vw]">
            <Index text={"PARTNERSHIP"} className={"mt-[8vw]"} />
            <div className="text-white text-[6vw] mt-[6vw] mb-[4vw]">
                CLIENT WE WORK WITH
            </div>
            {rows.map((row, rowIndex) => (
                <InfiniteScrollRow
                    key={rowIndex}
                    logos={row.logos}
                    speed={row.speed}
                    direction={row.direction}
                    isHovered={hoveredRow === rowIndex}
                    onHoverChange={(hovered) => setHoveredRow(hovered ? rowIndex : null)}
                />
            ))}
        </div>
    );
};

interface InfiniteScrollRowProps {
    logos: string[];
    speed: number;
    direction: 1 | -1;
    isHovered: boolean;
    onHoverChange: (hovered: boolean) => void;
}

const InfiniteScrollRow: React.FC<InfiniteScrollRowProps> = ({
    logos,
    speed,
    direction,
    isHovered,
    onHoverChange
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const positionRef = useRef<number>(0);
    const targetSpeedRef = useRef<number>(speed);
    const currentSpeedRef = useRef<number>(speed);

    useEffect(() => {
        targetSpeedRef.current = isHovered ? speed * 3 : speed;
    }, [isHovered, speed]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animate = () => {
            // 부드러운 속도 전환 (lerp)
            currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.1;

            // 위치 업데이트
            positionRef.current += currentSpeedRef.current * direction;

            // 컨테이너 너비의 1/3 지점에서 리셋 (3세트 중 1세트 통과)
            const resetPoint = container.scrollWidth / 3;

            if (direction === 1) {
                if (positionRef.current >= resetPoint) {
                    positionRef.current -= resetPoint;
                }
            } else {
                if (positionRef.current <= -resetPoint) {
                    positionRef.current += resetPoint;
                }
            }

            container.style.transform = `translateX(${-positionRef.current}px)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [direction]);

    return (
        <div
            className="overflow-hidden py-12"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
            <div ref={containerRef} className="flex" style={{ width: 'max-content' }}>
                {[...Array(3)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
                        {logos.map((logo, index) => (
                            <div
                                key={`${setIndex}-${index}`}
                                className="flex items-center justify-center px-12 min-w-[12vw]"
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="h-[4vw] w-auto object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const ReleasePage = () => {
    return (
        <div className="bg-black w-full min-h-screen flex flex-col p-[2vw]">
            {/* 헤더 섹션 */}
            <div className="flex justify-between items-end border-neutral-800 pb-[1.5vw] mt-[4vw] mb-[4vw]">
                <div className="flex flex-col">
                    <Index text={"RELEASE"} className={"text-[0.9vw] text-neutral-500 mb-[4vw]"} />
                    <h2 className="text-white text-[5vw] leading-[0.9] font-light tracking-tighter uppercase">Latest Updates</h2>
                </div>
            </div>

            {/* 콘텐츠 그리드 */}
            <div className="flex gap-[2vw] items-start w-full">
                {[1, 2, 3].map((item, idx) => (
                    <div key={item} className="flex-1 flex flex-col group cursor-pointer min-w-0">

                        {/* 1. 이미지 박스: 4:3 비율 & 컬러 유지 */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 rounded-[0.3vw] mb-[1.5vw]">
                            <Image
                                src={space}
                                alt=""
                                fill
                                className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-80"
                            />
                            {/* 우측 하단 데이터 태그 */}
                            <div className="absolute bottom-[0.5vw] right-[0.8vw] font-mono text-[0.6vw] text-white/50 tracking-tighter bg-black/40 px-[0.4vw] py-[0.1vw] backdrop-blur-sm">
                                LOG_UNIT_0{idx + 1}
                            </div>
                        </div>

                        {/* 2. 메타 정보 (Thin line) */}
                        <div className="flex justify-between items-center border-t border-neutral-800 pt-[1vw] font-mono text-neutral-400 text-[0.75vw]">
                            <div className="flex items-center gap-[0.4vw]">
                                {/* 상태 표시등 애니메이션 */}
                                <div className="w-[4px] h-[4px] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                <span className="group-hover:text-white transition-colors uppercase">System Analysis</span>
                            </div>
                            <span className="text-neutral-500">2025 // 10 // 24</span>
                        </div>

                        {/* 3. 타이틀: 기존 폰트 설정 유지 */}
                        <h3 className="text-white text-[1.3vw] font-[500] mt-[1.25vw] leading-[1.3] tracking-tight group-hover:text-neutral-300 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            IWC Schaffhausen and Vast Enter into a Strategic Collaboration
                        </h3>

                        {/* 4. 하단 프로그레스 바 스타일 잔상 효과 */}
                        <div className="mt-[1.5vw] w-full h-[1px] bg-neutral-900 relative">
                            <div className="absolute top-0 left-0 h-full bg-white w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const CompanyNewsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const newsItems = [
        { id: 1, image: space, title: "NIKE N7 COLLECTION HONORS CONNECTIONS TO THE LAND WITH RUNNING", date: "2025.12.01" },
        { id: 2, image: space, title: "NIKE N7 COLLECTION HONORS CONNECTIONS TO THE LAND WITH RUNNING", date: "2025.11.28" },
        { id: 3, image: space, title: "NIKE N7 COLLECTION HONORS CONNECTIONS TO THE LAND WITH RUNNING", date: "2025.11.15" },
        { id: 4, image: space, title: "NIKE N7 COLLECTION HONORS CONNECTIONS TO THE LAND WITH RUNNING", date: "2025.11.10" },
        { id: 5, image: space, title: "NIKE N7 COLLECTION HONORS CONNECTIONS TO THE LAND WITH RUNNING", date: "2025.11.05" }
    ];

    const visibleItems = 3;
    const maxIndex = newsItems.length - visibleItems;

    const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
    const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

    return (
        <div className="bg-black w-full min-h-[60vh] flex flex-col p-[2vw]">
            {/* 상단 헤더 및 컨트롤러 */}
            <div className="flex justify-between items-end border-b border-neutral-800 mb-[4vw]">
                <div className="flex flex-col">
                    <Index text={"COMPANY NEWS"} className={"text-[0.9vw] text-neutral-500 mb-[1vw]"} />
                </div>

                {/* 엔지니어링 감성의 컨트롤러 */}
                <div className="flex items-center gap-[1.5vw] mb-[0.5vw]">
                    <div className="font-mono text-[0.8vw] text-neutral-500 tracking-widest">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="flex gap-[0.5vw]">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="group w-[3vw] h-[3vw] border border-neutral-800 flex items-center justify-center transition-all hover:border-white disabled:opacity-20"
                        >
                            <Image src={arrow} alt="prev" className="w-[1.2vw] scale-x-[-1] group-hover:translate-x-[-2px] transition-transform" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === maxIndex}
                            className="group w-[3vw] h-[3vw] border border-neutral-800 flex items-center justify-center transition-all hover:border-white disabled:opacity-20"
                        >
                            <Image src={arrow} alt="next" className="w-[1.2vw] group-hover:translate-x-[2px] transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 메인 슬라이더 영역 */}
            <div className="overflow-hidden border-b border-neutral-900">
                <div
                    className="flex transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {newsItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className="min-w-[33.333%] flex flex-col gap-[1.5vw] p-[1.5vw] border-l border-neutral-900 group cursor-pointer hover:bg-neutral-950 transition-colors"
                        >
                            {/* 상단 메타데이터 */}
                            <div className="flex justify-between items-center font-mono text-[0.7vw] text-neutral-500 uppercase">
                                <span>News_feed_0{idx + 1}</span>
                                <span className="group-hover:text-white transition-colors">{item.date}</span>
                            </div>

                            {/* 가로형 레이아웃: 이미지와 텍스트 조합 */}
                            <div className="flex gap-[1.5vw] items-start">
                                <div className="w-[8vw] aspect-[4/3] relative overflow-hidden flex-shrink-0 rounded-[0.2vw] border border-neutral-800">
                                    <Image src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>

                                <h3 className="text-neutral-400 group-hover:text-white text-[1vw] font-[500] leading-tight transition-colors duration-500 uppercase break-keep">
                                    {item.title}
                                </h3>
                            </div>

                            {/* 하단 진행선 가이드 */}
                            <div className="mt-auto w-full h-[1px] bg-neutral-900 relative">
                                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const JoinTeamPage = () => {
    return (
        <div className="relative w-full h-[120vh] overflow-hidden select-none bg-black">
            {/* 배경 이미지: 원래대로 꽉 채움 */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={space}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                />
            </div>

            {/* 오버레이: 텍스트 가독성 확보 */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* 컨텐츠: 원래의 중앙 정렬 구조 */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[2vw]">
                {/* 타이틀: 크고 시원하게 */}
                <h1 className="text-white text-[4vw] font-light leading-[1.1] mb-[2vw] uppercase tracking-tighter">
                    Join our<br />
                    team
                </h1>

                {/* 설명 문구 */}
                <p className="text-white text-[1.2vw] max-w-2xl mb-[4vw] leading-relaxed opacity-90 break-keep">
                    Join the only space station company fully funded to design,
                    manufacture, launch, and send a crew to the world's first
                    commercial space station.
                </p>

                {/* 버튼: 원래 스타일 유지 + 우리가 만든 끈적한 호버 효과 */}
                <button className="group relative px-[3vw] py-[1vw] bg-white/10 backdrop-blur-md text-white border border-white/30 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {/* 호버 시 배경 차오르는 효과 */}
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-[cubic-bezier(0.16,1,0.3,1)]" />

                    <span className="relative z-10 text-[1.1vw] group-hover:text-black transition-colors duration-500 uppercase">
                        View open positions
                    </span>
                </button>
            </div>
        </div>
    );
};

const FooterPage = () => {
    return (
        <div className="relative w-full h-[110vh] bg-black flex flex-col justify-between select-none overflow-hidden">
            <div className="mt-[8vw] text-[2.2vw]">
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    서울 금천구 디지털로9길 32 A동 1106호 <span className="text-white/10">ASDNVOI IVHOAS</span> Github<span className="text-white/10"> BJZM</span> Naver Blog <span className="text-white/10">VUIXJNOBIZBWE</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    marketing@nextfoam.co.kr <span className="text-white/10">ASDVASD K DJSOPV SDA </span>Youtube<span className="text-white/10"> ASD </span>Baram Portal<span className="text-white/10">SAIND CIASJDS</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    070-8796-3019 <span className="text-white/10">BIASNUD USDHAJW DK AKSL ASDAI </span>Linkedin<span className="text-white/10"> LUX </span>Nextfoam Blog<span className="text-white/10"> BNOAJIBXND</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    찾아오는 길 <span className="text-white/10">AGLI PAISD LKQ JSGI ANWJGVB QKSD HGL </span>Instagram<span className="text-white/10"> GHOQL ZLFG PQND SGJAA KJS</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/10">AOBXH QKXGHAOHBN UHDAJ KBFIUASHDA BFGOUZ </span>Facebook<span className="text-white/10"> ZM OV HGQ JSHGAIBG PPXUSN</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/10">BHOA HQNP BSAUD JZHXGUOIQMZ PQASIFHQEU HZNCM BVHFHASG ZHUFQH WFOUA SHAGM</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/10">JSIDFJIAJ GZPUJQWNTNSJA HZXUHVKMZ VIHWHASK HDIUHABG UYHIOAYUDNI DQIUA IMLYA</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    Privacy Policy <span className="text-white/10">NBAIOSH DBQUGASKJG HBA SUN ZKNQKJWHRIUASHGAUSNFUIASG</span> @Nextfoam
                </div>
            </div>
            <div className="text-white text-[clamp(23vw,23vw,23vw)] absolute left-0 bottom-0 leading-[17vw]">
                Nextfoam
            </div>
        </div>
    );
};
