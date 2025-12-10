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

import React, { useRef, useEffect, useState } from 'react';
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

const HeroPage = () => {
    return (
        <div className="w-full h-[100vh] overflow-hidden ">
            <Image src={space} alt="null" className="overflow-hidden opacity-70 min-w-[100vw]" />
            <div className="absolute bottom-[1vw] font-[500] left-[1vw] text-white text-[5vw] leading-[5vw]">
                OPENING <br />
                NEXT-GENERATION <br />
                CFD SIMULATION
            </div>
        </div>
    )
}

const Index = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={className}>
            <span className="text-black bg-white px-[.5vw] py-[.25vw]">{text}</span>
            <span className="text-white px-[.5vw]">{text}</span>
        </div>
    )
}

const DescriptionPage = () => {
    return (
        <div className="bg-black w-full h-[100vh] flex flex-col p-[1vw]">
            <Index text={"INTRODUCE"} className={"mt-[8vw] mb-[6vw]"} />
            <div className="text-[3.25vw] leading-[3.7vw] text-white/40 font-[500]">
                <span className="text-white/100">넥스트폼</span>은 2011년 3명이 모여 오픈소스 CFD 코드인 <br />
                OpenFOAM을 기반으로, 기술 기반의 <span className="text-white/100">전문 엔지니어링 컨설팅 기업</span>으로 <br />
                물리현상 시뮬레이션 분야의 패러다임 전환을 목표로 출발하였습니다. <br />
                이후 다양한 산업 분야의 전문 인력들이 동참하여 <span className="text-white/100">열유체 분야에서</span> <br />
                <span className="text-white/100">국내의 대표적인 컨설팅 기업</span>으로 발전하였습니다. <br /><br />
                <span className="text-white/100">광학 및 인공지능을 이용한 영상계측 분야</span>로 영역을 확장하여 <br />
                현재 총 24명이 함께하고 있습니다.
            </div>
        </div>
    )
}

const PurposePage = () => {
    return (
        <div className="bg-black w-full h-[160vh] flex flex-col p-[1vw]">
            <Index text={"PURPOSE"} className={"mt-[8vw]"} />
            <div className="flex-row flex p-[3vw] justify-between pb-[1vw]">
                <div className="text-white font-[500] text-[3vw] leading-[3.5vw]">
                    Free CFD SOFTWARE MAKING <br />
                    COMPUATATIONAL FLUID DYNAMICS <br />
                    ACCESSIBLE TO EVERYONE.
                </div>
                <div className="flex justify-between flex-col gap-[2vw] text-[1vw]">
                    <div className="text-white">
                        2025년 현재 15년째를 맞이하는 넥스트폼은 지금까지 산업체, 공공기관 등<br />
                        100여 개의 기관과 300여건의 컨설팅 프로젝트를 수행하였습니다. <br />
                        한국전산유체공학회, 한국항공우주학회, 대한조선학회 등의 여러 학회에서 <br />
                        특별세션, 후원, 전시부스 등의 학술활동을 계속해 오고 있습니다 <br />
                    </div>
                    <div className="flex flex-row items-center gap-[1vw] hover:invert bg-black w-fit">
                        <Image src={arrow} alt="none"/>
                        <div className="text-white">Learn more</div>
                    </div>
                </div>
            </div>
            <div className="p-[3vw]">
                <Image src={space} alt=""  className="min-w-[92vw]"/>
                <div className="text-white/50 text-right">Launch video Courtesy of spaceX</div>
            </div>

        </div>
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

            <div className="flex-row flex justify-between p-[1vw]">
                <div className="text-white">
                    The world’s first commercial <br />
                    space station
                </div>
                <div className="text-white">
                    2019-2025
                </div>
            </div>
            <div className="flex-row flex items-center m-[1vw] gap-[1vw] hover:invert bg-black w-fit">
                <Image src={arrow} alt="" />
                <div className="text-white">Learn more</div>
            </div>

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
    const items = [[port1, "CFD를 이용한 폭발(Explosion) 시뮬레이션"],
    [port2, "대기 오염물 확산 CFD 시뮬레이션 SaaS 개발"],
    [port3, "고속열차 전두부 형상 최적화"],
    [port4, "비행체 CFD 해석 및 설계 통합 자동화 인터페이스 개발"],
    [port5, "CFD Workflow 최적화"],
    [port6, "비행체 공력 DB 구축 프레임워크 개발"],
    [port7, "그리드 핀 공력DB 구축"],
    [port8, "수치지형도를 이용한 CFD 전처리 자동화 및 오염물질 확산 시뮬레이션"]]; // 8개 아이템 예시

    return (
        <div className="bg-black w-full h-[380vh] flex flex-col p-[1vw]">
            <Index text={"PORTFOLIO"} className={"mt-[8vw] mb-[8vw]"} />
            <div className="grid grid-cols-2 gap-4 p-[4vw]">
                {items.map((item, key) => (
                    <div key={key} className="text-white relative p-[1vw] py-[3vw] h-[39vw]">
                        <Image src={item[0]} alt="" className="w-full h-full object-cover rounded-sm" />
                        <div className="font-[500] absolute pl-[1vw] bottom-[0vw] left-[0vw] z-100 bg-black pr-[0.5vw] py-[0.25vw] text-[1.4vw] rounded-tr-[.25vw]">
                            {item[1].toString()}
                        </div>
                    </div>
                ))}
            </div>
            <a className="hover:cursor-pointer mx-auto mt-[1vw] flex flex-row items-center hover:invert bg-black w-fit min-h-[7.2vh] min-w-[14vw] justify-center gap-[2vw]">
                <Image src={arrow} alt="" className="scale-[-2] h-[2vw]" />
                <div className="text-white text-[1.25vw] ">More Portfolio</div>
            </a>
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
        <div className="bg-black w-full h-[250vh] flex flex-col p-[1vw]">
            <Index text={"DOCUMENTATION"} className={"mt-[8vw] mb-[8vw]"} />
            {documentation1.map((text) => (
                <div className="relative">
                    <div className="text-white text-[3vw] font-[500] hover:text-black hover:bg-white w-full">
                        {text}
                    </div>
                    <span className="z-2 absolute text-black text-[3vw] font-[500] right-0 top-0">2025.11.21</span>
                </div>
            ))}
            <div className="mb-[8vw]"></div>
            {documentation2.map((text) => (
                <div className="relative">
                    <div className="text-white text-[3vw] font-[500] hover:text-black hover:bg-white w-full">
                        {text}
                    </div>
                    <span className="z-2 absolute text-black text-[3vw] font-[500] right-0 top-0">2025.11.21</span>
                </div>
            ))}
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
            <div className="text-white text-[6vw] mt-[6vw] mb-[4vw]">
                IN THE PRESS
            </div>

            <div className="overflow-hidden">
                <div className="flex animate-scroll">
                    {/* 무한 스크롤을 위해 3번 반복 */}
                    {[...Array(3)].map((_, setIndex) => (
                        newsArticles.map((article) => (
                            <div
                                key={`set-${setIndex}-article-${article.id}`}
                                className="w-[35vw] h-[20vw] relative min-w-[35vw] overflow-hidden border-l-1 border-white/20 py-[.25vw] px-[1vw] mr-8"
                            >
                                <div className="w-full h-[3vw] relative overflow-hidden items-center flex">
                                    <Image 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-[10vw] object-cover"
                                    />
                                </div>
                                <div className="text-[1.35vw] leading-[1.875vw] text-white mt-[2vw]">
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
        <div className="bg-black w-full h-[100vh] flex flex-col p-[1vw]">
            <Index text={"RELEASE"} className={"mt-[8vw]"} />
            <div className="flex justify-end mt-[2vw]">
                <button className="text-white text-lg underline">
                    More
                </button>
            </div>

            <div className="flex gap-8 mt-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex-1 flex flex-col">
                        <div className="w-full aspect-square relative overflow-hidden">
                            <Image src={space} alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex justify-between mt-[.75vw]">
                            <span className="text-white/60 text-sm">FREE RELEASE</span>
                            <span className="text-white/60 text-sm">2025.10.24</span>
                        </div>

                        <h3 className="text-white text-xl mt-[1.5vw] text-[1vw]">
                            IWC Schaffhausen and Vast Enter into a Strategic Collaboration
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

const CompanyNewsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const newsItems = [
        {
            id: 1,
            image: space,
            title: "Nike N7 Collection Honors Connections to the Land with Running"
        },
        {
            id: 2,
            image: space,
            title: "Nike N7 Collection Honors Connections to the Land with Running"
        },
        {
            id: 3,
            image: space,
            title: "Nike N7 Collection Honors Connections to the Land with Running"
        },
        {
            id: 4,
            image: space,
            title: "Nike N7 Collection Honors Connections to the Land with Running"
        },
        {
            id: 5,
            image: space,
            title: "Nike N7 Collection Honors Connections to the Land with Running"
        }
    ];

    const visibleItems = 3;
    const maxIndex = newsItems.length - visibleItems;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="bg-black w-full min-h-[80vh] flex flex-col p-[1vw]">
            <Index text={"COMPANY NEWS"} className={"mt-[8vw]"} />
            <div className="flex justify-end gap-[2vw] mt-8 mb-8">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="text-white text-3xl disabled:opacity-30"
                >
                    <Image src={arrow} alt="" className="w-full h-full object-cover scale-x-[-1]" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === maxIndex}
                    className="text-white text-3xl disabled:opacity-30"
                >
                    <Image src={arrow} alt="" />
                </button>
            </div>

            <div className="overflow-hidden  border-y-1 border-white/30">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {newsItems.map((item) => (
                        <div key={item.id} className="min-w-[calc(33.333%)] flex flex-row gap-4 items-center py-[1vw]">
                            <div className="w-32 h-20 relative overflow-hidden flex-shrink-0">
                                <Image src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-white text-base leading-tight text-[.8vw]">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const JoinTeamPage = () => {
    return (
        <div className="relative w-full h-[120vh] overflow-hidden select-none">
            {/* 배경 이미지 */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={space}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                />
            </div>

            {/* 오버레이 (선택사항 - 텍스트 가독성 높이기) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* 컨텐츠 */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-white text-7xl font-light mb-8">
                    Join our<br />team
                </h1>

                <p className="text-white text-lg max-w-2xl mb-12 leading-relaxed">
                    Join the only space station company fully funded to design,
                    manufacture, launch, and send a crew to the world's first
                    commercial space station.
                </p>

                <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300">
                    View open positions
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
                    서울 금천구 디지털로9길 32 A동 1106호 <span className="text-white/20">ASDNVOI IVHOAS</span> Github<span className="text-white/20"> BJZM</span> Naver Blog <span className="text-white/20">VUIXJNOBIZBWE</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    marketing@nextfoam.co.kr <span className="text-white/20">ASDVASD K DJSOPV SDA </span>Youtube<span className="text-white/20"> ASD </span>Baram Portal<span className="text-white/20">SAIND CIASJDS</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    070-8796-3019 <span className="text-white/20">BIASNUD USDHAJW DK AKSL ASDAI </span>Linkedin<span className="text-white/20"> LUX </span>Nextfoam Blog<span className="text-white/20"> BNOAJIBXND</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    찾아오는 길 <span className="text-white/20">AGLI PAISD LKQ JSGI ANWJGVB QKSD HGL </span>Instagram<span className="text-white/20"> GHOQL ZLFG PQND SGJAA KJS</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/20">AOBXH QKXGHAOHBN UHDAJ KBFIUASHDA BFGOUZ </span>Facebook<span className="text-white/20"> ZM OV HGQ JSHGAIBG PPXUSN</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/20">BHOA HQNP BSAUD JZHXGUOIQMZ PQASIFHQEU HZNCM BVHFHASG ZHUFQH WFOUA SHAGM</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/20">JSIDFJIAJ GZPUJQWNTNSJA HZXUHVKMZ VIHWHASK HDIUHABG UYHIOAYUDNI DQIUA IMLYA</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    Privacy Policy <span className="text-white/20">NBAIOSH DBQUGASKJG HBA SUN ZKNQKJWHRIUASHGAUSNFUIASG</span> @Nextfoam
                </div>
            </div>
            <div className="text-white text-[clamp(23vw,23vw,23vw)] absolute left-0 bottom-0 leading-[17vw]">
                Nextfoam
            </div>
        </div>
    );
};
