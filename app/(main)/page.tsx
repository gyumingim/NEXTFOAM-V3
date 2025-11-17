"use client"
import { Header } from "@/widgets/header/Header";
import Image from "next/image";
import space from "@/public/space.png"
import arrow from "@/public/arrow.svg"
import news from "@/public/브릿지경제.png"

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
            <BaramFeaturePage />
            <PortfolioPage />
            <DocumentationPage />
            <InThePressPage />
            <PartnershipPage />
        </div>
    );
}

const HeroPage = () => {
    return (
        <div className="w-full h-[100vh] overflow-hidden">
            <Image src={space} alt="null" className="overflow-hidden" />
            <div className="absolute bottom-[1rem] left-[1rem] text-white text-[6rem] leading-[5.875rem]">
                Opening <br />
                next-generation <br />
                CFD simulation
            </div>
        </div>
    )
}

const Index = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={className}>
            <span className="text-black bg-white px-[.5rem] py-[.25rem]">{text}</span>
            <span className="text-white px-[.5rem]">{text}</span>
        </div>
    )
}

const DescriptionPage = () => {
    return (
        <div className="bg-black w-full h-[110vh] flex flex-col p-[1rem]">
            <Index text={"INTRODUCE"} className={"mt-[8rem] mb-[6rem]"} />
            <div className="text-white text-[3.5rem] leading-[4rem]">
                Vast is developing humanity’s most capable space stations, pioneering the next giant leap toward long-term living and thriving in space. Vast is developing humanity’s most capable space stations, pioneering the next giant leap toward long-term living and thriving in space. Vast is developing humanity’s most capable space stations, pioneering the next giant leap toward long-term living
            </div>
        </div>
    )
}

const PurposePage = () => {
    return (
        <div className="bg-black w-full h-[190vh] flex flex-col p-[1rem]">
            <Index text={"PURPOSE"} className={"mt-[8rem] mb-[2rem]"} />
            <div className="flex-row flex p-[3rem] justify-between">
                <div className="text-white text-[3rem] leading-[3.5rem]">
                    Free CFD software making <br />
                    computational fluid dynamics <br />
                    accessible to everyone.
                </div>
                <div className="flex justify-between flex-col">
                    <div className="text-white">
                        In November 2025, Haven Demo achieved mission success after deploying from <br />
                        SpaceX’s Bandwagon-4 flight. The spacecraft captured 4K video of its solar <br />
                        array deployment and is now power-positive.
                    </div>
                    <div className="flex flex-row items-center gap-[1rem]">
                        <Image src={arrow} alt="none" />
                        <div className="text-white">Leam more</div>
                    </div>
                </div>
            </div>
            <div className="p-[3rem]">
                <Image src={space} alt="" />
                <div className="text-white/50 text-right">Launch video Courtesy of spaceX</div>
            </div>

        </div>
    )
}

const BaramPage = () => {
    return (
        <div className="bg-black w-full h-[120vh] flex flex-col p-[1rem]">
            <Index text={"BARAM"} className={"mt-[8rem] mb-[8rem]"} />
            <div className="w-screen h-[50%] flex items-center justify-center">
                <div className="text-white/30 text-[clamp(5rem,100vw,28.5rem)] left-0 absolute">
                    BARAM
                </div>
            </div>

            <div className="flex-row flex justify-between p-[1rem]">
                <div className="text-white">
                    The world’s first commercial <br />
                    space station
                </div>
                <div className="text-white">
                    2019-2025
                </div>
            </div>
            <div className="flex-row flex items-center p-[1rem] gap-[1rem]">
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
        <div className="bg-black w-full h-[150vh] flex flex-col p-[1rem]">
            <Index text={"BARAM FEATURE"} className={"mt-[8rem] mb-[8rem]"} />
            <div
                ref={scrollRef}
                // {...events}
                className="flex flex-row overflow-x-auto gap-8 scrollbar-hide cursor-grab active:cursor-grabbing"
            >
                {[1, 2, 3].map((item) => (
                    <div key={item} className="w-[70rem] h-[40rem] relative min-w-[70rem] overflow-hidden">
                        <div className="text-white text-[4rem] font-light mb-4">SUBSCRIPTION {item}</div>
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
    const items = [1, 2, 3, 4, 5, 6, 7, 8]; // 8개 아이템 예시

    return (
        <div className="bg-black w-full h-[370vh] flex flex-col p-[1rem]">
            <Index text={"PORTFOLIO"} className={"mt-[8rem] mb-[8rem]"} />
            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
                    <div key={key} className="text-white h-[35rem] relative">
                        <Image src={space} alt="" className="w-full h-full object-cover rounded-sm" />
                        <div className="absolute bottom-[.25rem] left-[.75rem] z-100 text-[1.5rem]">CFD를 이용한 폭발 시뮬레이션</div>
                    </div>
                ))}
            </div>
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
        <div className="bg-black w-full h-[260vh] flex flex-col p-[1rem]">
            <Index text={"DOCUMENTATION"} className={"mt-[8rem] mb-[8rem]"} />
            {documentation1.map((text) => (
                <div className="relative">
                    <div className="text-white text-[3rem] font-[500] hover:text-black hover:bg-white w-full">
                        {text}
                    </div>
                    <span className="z-2 absolute text-black text-[3rem] font-[500] right-0 top-0">2025.11.21</span>
                </div>
            ))}
            <div className="mb-[8rem]"></div>
            {documentation2.map((text) => (
                <div className="relative">
                    <div className="text-white text-[3rem] font-[500] hover:text-black hover:bg-white w-full">
                        {text}
                    </div>
                    <span className="z-2 absolute text-black text-[3rem] font-[500] right-0 top-0">2025.11.21</span>
                </div>
            ))}
        </div>
    )
}

const InThePressPage = () => {
    const newsItems = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="bg-black w-full h-[110vh] flex flex-col p-[1rem]">
            <Index text={"IN THE PRESS"} className={"mt-[8rem]"} />
            <div className="text-white text-[6rem] mt-[6rem] mb-[4rem]">
                IN THE PRESS
            </div>

            <div className="overflow-hidden">
                <div className="flex animate-scroll">
                    {/* 첫 번째 세트 */}
                    {newsItems.map((key) => (
                        <div
                            key={`first-${key}`}
                            className="w-[20rem] h-[17.5rem] relative min-w-[20rem] overflow-hidden border-l-1 border-white/20 py-[.25rem] px-[1rem] mr-8"
                        >
                            <Image src={news} alt="" />
                            <div className="text-[1.3rem] leading-[1.5rem] text-white mt-[2rem]">
                                BARAM® offers software
                                maintenance, technical support,
                                and training services through a
                                subscription agreement with
                                Nextfoam. When necessary,
                                verification can be performed When
                                necessary, verification can be
                                performed verification can be
                            </div>
                        </div>
                    ))}
                    {/* 두 번째 세트 */}
                    {newsItems.map((key) => (
                        <div
                            key={`second-${key}`}
                            className="w-[20rem] h-[17.5rem] relative min-w-[20rem] overflow-hidden border-l-1 border-white/20 py-[.25rem] px-[1rem] mr-8"
                        >
                            <Image src={news} alt="" />
                            <div className="text-[1.3rem] leading-[1.5rem] text-white mt-[2rem]">
                                BARAM® offers software
                                maintenance, technical support,
                                and training services through a
                                subscription agreement with
                                Nextfoam. When necessary,
                                verification can be performed When
                                necessary, verification can be
                                performed verification can be
                            </div>
                        </div>
                    ))}
                    {/* 세 번째 세트 (더 부드러운 전환을 위해) */}
                    {newsItems.map((key) => (
                        <div
                            key={`third-${key}`}
                            className="w-[20rem] h-[17.5rem] relative min-w-[20rem] overflow-hidden border-l-1 border-white/20 py-[.25rem] px-[1rem] mr-8"
                        >
                            <Image src={news} alt="" />
                            <div className="text-[1.3rem] leading-[1.5rem] text-white mt-[2rem]">
                                BARAM® offers software
                                maintenance, technical support,
                                and training services through a
                                subscription agreement with
                                Nextfoam. When necessary,
                                verification can be performed When
                                necessary, verification can be
                                performed verification can be
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};


const PartnershipPage = () => {
    // 이미지 URL 리스트 (무한 확장 가능)
    const logoImages = [
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

    // 3줄로 나누기
    const rowCount = 3;
    const itemsPerRow = Math.ceil(logoImages.length / rowCount);

    const rows = [
        logoImages.slice(0, itemsPerRow),
        logoImages.slice(itemsPerRow, itemsPerRow * 2),
        logoImages.slice(itemsPerRow * 2)
    ];

    return (
        <div className="bg-black w-full h-[270vh] flex flex-col p-[1rem]">
            <Index text={"PARTNERSHIP"} className={"mt-[8rem]"} />
            <div className="text-white text-[6rem] mt-[6rem] mb-[4rem]">
                CLIENT WE WORK WITH
            </div>
            {rows.map((rowLogos, rowIndex) => (
                <div key={rowIndex} className="overflow-hidden py-8">
                    <div
                        className="flex animate-scroll"
                        style={{
                            animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                            animationDuration: `${30 + rowIndex * 5}s`
                        }}
                    >
                        {/* 첫 번째 세트 */}
                        {rowLogos.map((logo, index) => (
                            <div
                                key={`${rowIndex}-first-${index}`}
                                className="flex items-center justify-center px-12 min-w-[200px]"
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="h-16 w-auto object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                                />
                            </div>
                        ))}
                        {/* 두 번째 세트 */}
                        {rowLogos.map((logo, index) => (
                            <div
                                key={`${rowIndex}-second-${index}`}
                                className="flex items-center justify-center px-12 min-w-[200px]"
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="h-16 w-auto object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                                />
                            </div>
                        ))}
                        {/* 세 번째 세트 */}
                        {rowLogos.map((logo, index) => (
                            <div
                                key={`${rowIndex}-third-${index}`}
                                className="flex items-center justify-center px-12 min-w-[200px]"
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="h-16 w-auto object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};