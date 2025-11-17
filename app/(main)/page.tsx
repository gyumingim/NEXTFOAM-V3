"use client"
import { Header } from "@/widgets/header/Header";
import Image from "next/image";
import space from "@/public/space.png"
import arrow from "@/public/arrow.svg"

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

const 