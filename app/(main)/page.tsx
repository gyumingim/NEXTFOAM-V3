"use client"
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import Image from "next/image";
import space from "@/public/space.png"

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

import { useThree } from "@react-three/fiber";
import nextfoam from "@/public/introduce/nextfoam.jpg"
import { useGLTF } from "@react-three/drei";
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { div } from "framer-motion/client";
import next from "next";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
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
            {/* <ReleasePage /> */}
            <CompanyNewsPage />
            {/* <JoinTeamPage /> */}
            <Footer />
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

const HeroContainer = ({ className, title, desc, isLeft, image }: { className?: any, title: any, desc: any, isLeft: any, image: any }) => {
    return (
        <div className={`w-full ${className} overflow-hidden relative`}>
            <Image src={image} alt="" fill className="object-cover opacity-40" />
            <HeroMain className={isLeft}>
                <div>{title}</div>
                <div className="font-[300] text-white text-[1.125vw] leading-[2vw] mt-[1vh]">
                    <div>{desc}</div>
                    <LearnMore className="mt-[4vh]" />
                </div>
            </HeroMain>
        </div>
    )
}

const HeroMain = ({ className, children }: { className?: any, children: any }) => {
    return (
        <div className={`absolute bottom-[10%] ${className} font-[400] text-white text-[4vw] leading-[4.5vw] whitespace-pre-line`}>
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
            title={`Opening \n Next-Gen \n CFD Simulation`}
            desc={`최고의 기술력으로 엔지니어링 컨설팅을 제공합니다`}
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
            title={`Making CFD 
                    for Everyone.`}
            desc={`2025년 현재 15년째를 맞이하는 넥스트폼은 지금까지 산업체, 공공기관 등
                  100여 개의 기관과 300여건의 컨설팅 프로젝트를 수행하였습니다. 
                  한국전산유체공학회, 한국항공우주학회, 대한조선학회 등의 여러 학회에서 
                  특별세션, 후원, 전시부스 등의 학술활동을 계속해 오고 있습니다 `}
            isLeft={`left-[6vw]`}
            image={space}
        />
    )
}


// BaramModel - velocity 기반 동적 기울기
function BaramModel({ scrollProgress, scrollVelocity }: { scrollProgress: number; scrollVelocity: number }) {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/Untitled.glb");
    const currentTilt = useRef(0); // 현재 Z 기울기 (lerp용)
    const { viewport } = useThree();  // ← 추가
    const scale = viewport.width * 0.04;  // 숫자 조절해서 크기 맞추기

    useEffect(() => {
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const oldMat = mesh.material as THREE.MeshStandardMaterial;
                mesh.material = new THREE.MeshPhysicalMaterial({
                    map: oldMat.map,
                    normalMap: oldMat.normalMap,
                    metalness: .5,          // 낮출수록 반사 범위 넓어짐
                    roughness: 0.1,          // 0에 가까울수록 거울처럼 넓게 반사
                    clearcoat: 1.0,
                    clearcoatRoughness: 1.0, // 0으로 낮춰서 코팅 반사 극대화
                    envMapIntensity: 3.0,    // 환경 반사 강도 올림
                });
            }
        });
    }, [scene]);

    useFrame(() => {
        if (!groupRef.current) return;

        // 스크롤 속도 → Z 기울기 타겟 (최대 ±0.4 rad)
        const targetTilt = Math.max(-0.4, Math.min(0.4, scrollVelocity * 0.03));

        // 부드럽게 lerp (스크롤 멈추면 원위치)
        currentTilt.current += (targetTilt - currentTilt.current) * 0.08;

        // Y축: 스크롤 전체 진행도로 천천히 회전
        groupRef.current.rotation.y = scrollProgress * Math.PI * 1.5;

        // Z축: 스크롤 속도에 반응하는 동적 기울기
        groupRef.current.rotation.z = currentTilt.current;
    });

    return (
        <group ref={groupRef}>
            <primitive
                object={scene}
                scale={scale}
                position={[0, 0, 0]}
                rotation={[Math.PI, -Math.PI * 1.1, Math.PI / 2 * 1.2]}
            />
        </group>
    );
}


// BaramPage에서 scrollVelocity도 같이 전달
const BaramPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollVelocity, setScrollVelocity] = useState(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = containerRef.current;
            if (!el) return;

            const scrollTop = window.scrollY;
            const velocity = scrollTop - lastScrollY.current;
            lastScrollY.current = scrollTop;

            const maxScroll = el.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
            setScrollProgress(Math.min(Math.max(progress, 0), 1));
            setScrollVelocity(velocity);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="bg-black w-full flex flex-col p-[1vw]">
            <Index text={"BARAM"} className={"mt-[8vw] mb-[3vw]"} />
            <div className="text-white text-[6vw] mt-[6vw] mb-[1vw] leading-tight font-[700]">
                누구나 사용할 수 있고, <br/>
                개발에 참여할 수 있습니다.
            </div>
            <div className="text-white text-[1.5vw] mt-[0vw] mb-[8vw] leading-normal font-[300]">
                BARAM®은 넥스트폼이 개발/공개한 전산유체역학(CFD) 열-유동 해석 프로그램입니다.
            </div>
            {/* h-[50%] → h-[60vh] 고정값으로 */}
            <div className="w-full h-[60vh] flex items-center justify-center relative">
                <div className="text-white/20 text-[clamp(5vw,100vw,30vw)] absolute select-none pointer-events-none left-0 w-screen text-center">
                    BARAM
                </div>

                <div className="w-full absolute inset-0">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        gl={{ alpha: true, antialias: true }}
                        style={{ background: "transparent", width: "100%", height: "100%" }}
                    >
                        <ambientLight intensity={0.1} />
                        <directionalLight position={[-5, 3, -5]} intensity={30} />
                        <pointLight position={[0, 5, 3]} intensity={30} color="#ffffff" />
                        <pointLight position={[3, -2, 4]} intensity={30} color="#aaddff" />
                        <spotLight position={[0, 8, 4]} intensity={20} angle={0.6} penumbra={0.2} castShadow />
                        <Suspense fallback={null}>
                            <BaramModel scrollProgress={scrollProgress} scrollVelocity={scrollVelocity} />
                            <Environment preset="studio" />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div className="flex-row flex justify-between p-[1vw] mt-[4vh]">
                <div className="text-white text-[1vw] leading-[1.75vw]">
                    우리는 스마트폰에서 필요한 앱을 그냥 설치해서 씁니다. <br/>
                    그런데 왜 CFD는 비싼 돈을 내고 사용할까요? <br/>
                    BARAM®은 누구나 자유롭게 사용할 수 있습니다. <br/>
                    오픈 소스는 단순한 무료 대안이 아니라, <br/>
                    CFD Workflow 자체를 혁신하는 도구입니다. <br/>
                </div>
            </div>
            <LearnMore className="mt-[2vh] ml-[1rem]" />
        </div>
    );
};
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
            <Index text={"PORTFOLIO"} className={"mt-[8vw] mb-[3vw]"} />
            <div className="text-white text-[6vw] mt-[6vw] mb-[1vw] leading-tight font-[700]">
                분야의 경계를 넘어,<br />
                해답을 현실로 만듭니다.
            </div>
            <div className="text-white text-[1.5vw] mt-[0vw] mb-[10vw] leading-normal font-[300]">
                300건 이상의 컨설팅 프로젝트를 수행했습니다. 주요 수행 사례를 소개합니다.
            </div>
            {/* 그리드 영역 */}
            {/* gap-y를 넉넉하게 주어 위아래 카드 간격을 벌립니다 */}
            <div className="grid grid-cols-3 gap-y-[2vw]">
                {items.map((item, key) => (
                    <div
                        key={key}
                        className="group flex flex-col w-full cursor-pointer hover:bg-neutral-700 duration-300 transition-all p-[1rem] rounded-2xl"
                    >
                        {/* 1. 이미지 영역 (텍스트와 분리됨) */}
                        <div className="w-full h-[20vw] rounded-[1vw] overflow-hidden bg-neutral-900">
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
                            <div className="text-white text-[2vw] font-[400] leading-tight decoration-white underline-offset-4">
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
        <div className="bg-black w-full min-h-screen flex flex-col p-[1vw] mb-[8vw]">
            {/* 헤더 섹션 */}
            <div className="flex justify-between items-end border-neutral-800 pb-[1vw] mb-[6vw]">
                <Index text={"DOCUMENTATION"} className={"mt-[8vw] mb-[2vw]"} />
            </div>
            <div className="text-white text-[6vw] mt-[1vw] mb-[1vw] leading-tight font-[700]">
                넥스트폼의<br />
                새로운 콘텐츠를 만나보세요
            </div>
            <div className="text-white text-[1.5vw] mt-[0vw] mb-[10vw] leading-normal font-[300]">
                국내외 학술지와 학술대회에 130편 이상의 논문을 발표하였습니다.
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
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const newsArticles = [
        {
            id: 1, image: news1,
            content: "국내 OpenFOAM 사용자들의 최대 교류 행사인 '제12회 한국 OpenFOAM 사용자 모임'이 오는 18일부터 19일까지 경주에서 열린다. 이번 행사는 넥스트폼과 한국기계연구원 주관으로 마련되며, 학계·산업계·연구기관 전문가들이 한자리에 모여 최신 전산유체역학(CFD) 기술과 오픈소스 활용 사례를 공유한다."
        },
        {
            id: 2, image: news2,
            content: "국내 산업용 시뮬레이션 시장은 외산 소프트웨어 의존도가 높다. 이에 매년 수백억 원의 세금과 산업 비용이 해외로 유출되고 있다. 이 가운데 넥스트폼(Nextfoam)이 개발한 오픈소스 전산유체역학(CFD) 솔루션 '바람(BARAM)'이 주목받고 있다."
        },
        {
            id: 3, image: news3,
            content: "국내 산업계가 전산유체역학(CFD) 분야에서 외산 소프트웨어에 지나치게 의존하고 있는 상황에서, 넥스트폼(Nextform Inc.)이 자체 개발한 CFD 솔버 '바람(Baram)'을 앞세워 산업용 시뮬레이션 시장에 본격 도전장을 내밀었다."
        },
        {
            id: 4, image: news4,
            content: "전산유체역학(CFD) 전문기업 넥스트폼이 오픈소스 프리웨어 CFD 솔루션 'BARAM(바람)'을 공식 출시하고 상용화에 나섰다. CFD(Computational Fluid Dynamics)는 열·유체의 흐름을 컴퓨터를 이용해 시뮬레이션 하는 기술이다."
        },
        {
            id: 5, image: news5,
            content: "전산유체역학(CFD) 전문기업 넥스트폼은 국내 첫 오픈소스 프리웨어 CFD 솔루션 '바람(BARAM)'을 공식 출시한다고 17일 밝혔다. 누구나 자유롭게 사용할 수 있는 오픈소스 기반 CFD 소프트웨어로, GUI 환경에서 메시 생성, 유동 해석, 결과 시각화까지 원스톱으로 수행할 수 있도록 지원한다."
        },
        {
            id: 6, image: news6,
            content: "전산유체역학(CFD) 전문기업 ㈜넥스트폼은 오픈소스 프리웨어 CFD 솔루션 'BARAM(바람)'을 공식 출시하고 상용화에 나섰다고 16일 밝혔다. GUI 환경에서 메시지 생성에서부터 유동 해석, 결과 시각화에 이르는 일련의 작업을 원스톱으로 끝마칠 수 있다."
        }
    ];

    const rows = [
        [newsArticles[0], newsArticles[1]],
        [newsArticles[2], newsArticles[3]],
        [newsArticles[4], newsArticles[5]],
    ];

    return (
        <div className="bg-white/8 w-full flex flex-col py-[8vw]">
            <div className="w-[60%] mx-auto">
                <Index text={"IN THE PRESS"} className={"mb-[3vw]"} />
                <div className="flex justify-between items-end mb-[3vw]">
                    <h2 className="text-white text-[4vw] leading-tight font-[600] tracking-tighter">
                        언론이 주목한 넥스트폼
                    </h2>
                </div>

                {/* 카드 3행 × 2열 — 호버 시 7:3 */}
                <div className="flex flex-col border border-white/30">
                    {rows.map((row, rowIdx) => {
                        const rowHoveredId = row.find(a => a.id === hoveredId)?.id ?? null;
                        return (
                            <div key={rowIdx} className="flex border-b border-white/30 last:border-b-0">
                                {row.map((article) => {
                                    const isHovered = hoveredId === article.id;
                                    const flex = isHovered ? '7 7 0%' : rowHoveredId ? '3 3 0%' : '1 1 0%';
                                    return (
                                        <div
                                            key={article.id}
                                            style={{ flex }}
                                            className="group cursor-pointer flex flex-col bg-black overflow-hidden border-r border-white/30 last:border-r-0 transition-[flex] duration-700 ease-in-out"
                                            onMouseEnter={() => setHoveredId(article.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                        >
                                            {/* 이미지 */}
                                            <div className="relative w-full h-[16vw] overflow-hidden bg-neutral-900 shrink-0">
                                                <Image
                                                    src={space}
                                                    alt=""
                                                    fill
                                                    className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                                                />
                                                <span className="absolute top-[1.2vw] right-[1.2vw] text-white group-hover:translate-x-[0.2vw] group-hover:-translate-y-[0.2vw] text-[1.2vw] transition-all duration-300">↗</span>
                                            </div>
                                            {/* 본문 (로고 + 텍스트) */}
                                            <div className="px-[1.2vw] pt-[1vw] pb-[1.2vw] border-t border-white/30 flex flex-col gap-[0.7vw] min-w-0">
                                                <div className="h-[1.4vw] flex items-center shrink-0">
                                                    <Image
                                                        src={article.image}
                                                        alt=""
                                                        className="h-full w-auto object-contain"
                                                    />
                                                </div>
                                                <p className="text-white text-[0.9vw] whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {article.content}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                <LearnMore className="mt-[3vw] mx-auto text-[1vw]" />
            </div>
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
        <div className="bg-white/8 w-full flex flex-col py-[8vw]">
            <div className="w-[60%] mx-auto mb-[5vw]">
                <Index text={"PARTNERSHIP"} className={"mb-[3vw]"} />
                <h2 className="text-white text-[4vw] leading-tight  font-[600] tracking-tighter">
                    넥스트폼과 함께하는 고객사
                </h2>
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
            className="overflow-hidden py-[2vw]"
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
    const releases = [
        { version: "v25.3", date: "2025.11", title: "Real-Time Simulator 성능 평가 및 압력 기반 솔버 업데이트", tag: "STABLE" },
        { version: "v25.2", date: "2025.08", title: "밀도 기반 솔버 안정성 개선 및 BaramMesh UI 개편", tag: "STABLE" },
        { version: "v25.1", date: "2025.04", title: "BaramMesh 성능 최적화 및 OpenFOAM 호환성 향상", tag: "STABLE" },
        { version: "v24.4", date: "2024.12", title: "다중 물리 해석 지원 및 병렬 처리 성능 개선", tag: "LTS" },
        { version: "v24.3", date: "2024.09", title: "ParaView 연동 강화 및 후처리 워크플로우 개선", tag: "STABLE" },
    ];

    return (
        <div className="bg-white/8 w-full flex flex-col py-[8vw]">
            <div className="w-[60%] mx-auto">
            <Index text={"RELEASE"} className={"mb-[3vw]"} />
            <div className="flex justify-between items-end mb-[5vw]">
                <h2 className="text-white text-[4vw] leading-tight font-light tracking-tighter uppercase">
                    최신 업데이트
                </h2>
                <span className="text-neutral-600 font-mono text-[0.75vw] tracking-widest self-end pb-[0.3vw]">
                    BARAM / OPEN-SOURCE CFD
                </span>
            </div>

            <div className="flex flex-col">
                {releases.map((release, idx) => (
                    <div
                        key={idx}
                        className="group relative flex items-center gap-[2vw] py-[1.5vw] border-b border-neutral-900 hover:border-white transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom" />

                        <span className="relative z-10 font-mono text-[0.75vw] text-neutral-600 w-[3vw] group-hover:text-black transition-colors duration-500">
                            {String(idx + 1).padStart(2, '0')}
                        </span>

                        <span className="relative z-10 font-mono text-[0.8vw] font-bold text-white w-[5vw] group-hover:text-black transition-colors duration-500 tracking-tight">
                            {release.version}
                        </span>

                        <span className="relative z-10 font-mono text-[0.65vw] px-[0.5vw] py-[0.15vw] border border-neutral-700 text-neutral-500 group-hover:border-black group-hover:text-black transition-colors duration-500 w-[5vw] text-center">
                            {release.tag}
                        </span>

                        <div className="relative z-10 flex-1 text-white text-[1.4vw] font-[400] group-hover:text-black transition-colors duration-500">
                            {release.title}
                        </div>

                        <span className="relative z-10 font-mono text-[0.75vw] text-neutral-500 group-hover:text-black transition-colors duration-500">
                            {release.date}
                        </span>
                        <span className="relative z-10 text-white text-[1.5vw] group-hover:text-black transform group-hover:rotate-45 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                            ↗
                        </span>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

const CompanyNewsPage = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(1);

    const newsItems = [
        { id: 1, category: "EVENT", title: "제12회 한국 OpenFOAM 사용자 모임 주관", date: "2025.12.01" },
        { id: 2, category: "RELEASE", title: "BARAM v25.3 공식 릴리즈 발표", date: "2025.11.28" },
        { id: 3, category: "CONFERENCE", title: "한국항공우주학회 특별세션 참가 및 발표", date: "2025.11.15" },
        { id: 4, category: "CASE STUDY", title: "공공기관 CFD 솔루션 도입 사례 공개", date: "2025.11.10" },
        { id: 5, category: "NEWS", title: "산업통상자원부 R&D 과제 최종 선정", date: "2025.11.05" },
    ];

    return (
        <div className="bg-white/8 w-full flex flex-col py-[8vw]">
            <div className="w-[60%] mx-auto">
                <Index text={"COMPANY NEWS"} className={"mb-[3vw]"} />
                <div className="flex justify-between items-end mb-[3vw]">
                    <h2 className="text-white text-[4vw] leading-tight font-[600] tracking-tighter">
                        넥스트폼 소식
                    </h2>
                </div>

                <div className="flex flex-col border border-white/30">
                    {newsItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className="cursor-pointer border-b border-white/30 last:border-b-0"
                            onMouseEnter={() => setHoveredId(item.id)}
                        >
                            {/* 텍스트 행 */}
                            <div className="flex items-center gap-[2vw] px-[1vw] py-[1.5vw]">
                                <span className="font-mono text-[0.75vw] text-white/60 w-[2.5vw] shrink-0">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <span className="font-mono text-[0.65vw] px-[0.5vw] py-[0.2vw] border border-white/40 text-white/80 w-[7vw] text-center shrink-0">
                                    {item.category}
                                </span>
                                <div className="flex-1 text-white text-[1.3vw] font-normal">
                                    {item.title}
                                </div>
                                <span className="font-mono text-[0.75vw] text-white/60 shrink-0">
                                    {item.date}
                                </span>
                                <span
                                    className="text-white text-[1.2vw] shrink-0 transition-transform duration-500 ease-in-out"
                                    style={{ transform: hoveredId === item.id ? 'translate(0.2vw, -0.2vw)' : 'none' }}
                                >
                                    ↗
                                </span>
                            </div>

                            {/* 이미지 — 호버 시 펼쳐짐 */}
                            <div
                                className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
                                style={{ maxHeight: hoveredId === item.id ? '18vw' : '0' }}
                            >
                                <div className="relative w-full h-[18vw] border-t border-white/30">
                                    <Image
                                        src={space}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-[1.5vw] left-[1.5vw]">
                                        <span className="font-mono text-[0.65vw] px-[0.5vw] py-[0.2vw] border border-white/50 text-white/80">
                                            {item.category}
                                        </span>
                                        <p className="text-white text-[1.1vw] font-medium mt-[0.5vw]">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <LearnMore className="mt-[3vw] mx-auto text-[1vw]" />
            </div>
        </div>
    );
};

const JoinTeamPage = () => {
    const positions = [
        { dept: "ENGINEERING", title: "CFD 해석 엔지니어", type: "정규직" },
        { dept: "ENGINEERING", title: "소프트웨어 개발자 (C++ / Python)", type: "정규직" },
        { dept: "RESEARCH", title: "수치해석 연구원", type: "정규직" },
        { dept: "BUSINESS", title: "기술 영업 / 컨설팅", type: "정규직" },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-[8vw]" style={{ background: "#1427FF", "--color-white": "#ffffff", "--color-black": "#000000" } as React.CSSProperties}>
            {/* 상단 레이블 */}
            <div className="text-white/50 font-mono text-[0.75vw] tracking-[0.4em] mb-[5vw] uppercase">
                CAREERS — 함께 만들어가는 CFD의 미래
            </div>

            {/* 메인 타이틀 */}
            <div className="text-white text-[11vw] leading-[0.88] font-[700] tracking-tighter text-center mb-[3vw]">
                Join<br />Our Team
            </div>

            <div className="text-white/50 text-[1.3vw] font-[300] text-center mb-[8vw]">
                기술로 엔지니어링 패러다임을 바꾸고 싶은 분들의 지원을 기다립니다.
            </div>

            {/* 포지션 리스트 */}
            <div className="w-[72%] flex flex-col border-t border-white/20">
                {positions.map((pos, idx) => (
                    <div
                        key={idx}
                        className="group relative flex items-center gap-[2vw] py-[1.8vw] border-b border-white/20 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom" />

                        <span className="relative z-10 font-mono text-[0.7vw] text-white/30 w-[3vw] group-hover:text-[#1427FF] transition-colors duration-300 shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                        </span>

                        <span className="relative z-10 font-mono text-[0.65vw] px-[0.7vw] py-[0.2vw] border border-white/25 text-white/40 group-hover:border-[#1427FF] group-hover:text-[#1427FF] transition-colors duration-300 w-[10vw] text-center shrink-0">
                            {pos.dept}
                        </span>

                        <div className="relative z-10 flex-1 text-white text-[2vw] font-[400] group-hover:text-[#1427FF] transition-colors duration-300">
                            {pos.title}
                        </div>

                        <span className="relative z-10 font-mono text-[0.7vw] text-white/30 group-hover:text-[#1427FF] transition-colors duration-300 shrink-0">
                            {pos.type}
                        </span>
                        <span className="relative z-10 text-white/40 text-[1.4vw] group-hover:text-[#1427FF] transform group-hover:rotate-45 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shrink-0">
                            ↗
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA 버튼 */}
            <div className="mt-[5vw]">
                <button className="group relative px-[3.5vw] py-[1.1vw] text-white border-2 border-white overflow-hidden transition-all duration-500">
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="relative z-10 text-[0.9vw] group-hover:text-[#1427FF] transition-colors duration-300 uppercase tracking-widest font-light">
                        채용 공고 보기 ↗
                    </span>
                </button>
            </div>
        </div>
    );
};

