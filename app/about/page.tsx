"use client"
import { Header } from "@/widgets/header/Header";
import Image from "next/image";
import space from "@/public/space.png"
import React, { useState, useRef, useEffect } from 'react';

export default function AboutPage() {
    return (
        <div className="w-full h-full">
            <Header />
            <HeroPage />
            <CompanyIntroPage />
            <CompanyInfoPage />
            <VisionPage />
            <OpenFOAMPage />
            <HistoryPage />
            <FooterPage />
        </div>
    );
}

const HeroPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full h-[100vh] bg-black flex items-center justify-center relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500 rounded-full blur-[200px] animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center px-[2rem]">
                <div className="text-white/40 text-[1.5rem] mb-[2rem] tracking-[0.5rem]">SINCE 2011</div>
                <h1 className="text-white text-[clamp(4rem,12vw,15rem)] font-[700] leading-[0.9] mb-[3rem]">
                    NEXTFOAM
                </h1>
                <p className="text-white/60 text-[clamp(1.2rem,2.5vw,2rem)] max-w-[800px] mx-auto leading-[1.6]">
                    CFD 시뮬레이션 분야의<br />패러다임을 전환하는 기업
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-[3rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[1rem] animate-bounce">
                <div className="text-white/40 text-[0.9rem] tracking-[0.3rem]">SCROLL TO EXPLORE</div>
                <div className="w-[1px] h-[60px] bg-gradient-to-b from-white/40 to-transparent"></div>
            </div>
        </div>
    )
}

const CompanyIntroPage = () => {
    return (
        <div className="bg-black w-full min-h-[100vh] flex items-center p-[1rem] md:p-[4rem]">
            <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[8rem]">
                {/* Left: Statistics */}
                <div className="flex flex-col justify-center space-y-[4rem]">
                    <div className="border-l-4 border-white pl-[2rem]">
                        <div className="text-white text-[clamp(5rem,10vw,12rem)] font-[700] leading-[1]">15</div>
                        <div className="text-white/60 text-[1.5rem] mt-[1rem]">Years of Excellence</div>
                    </div>
                    <div className="border-l-4 border-white/40 pl-[2rem]">
                        <div className="text-white text-[clamp(5rem,10vw,12rem)] font-[700] leading-[1]">24</div>
                        <div className="text-white/60 text-[1.5rem] mt-[1rem]">전문 인력</div>
                    </div>
                    <div className="border-l-4 border-white/40 pl-[2rem]">
                        <div className="text-white text-[clamp(5rem,10vw,12rem)] font-[700] leading-[1]">300+</div>
                        <div className="text-white/60 text-[1.5rem] mt-[1rem]">프로젝트 수행</div>
                    </div>
                </div>

                {/* Right: Story */}
                <div className="flex flex-col justify-center">
                    <div className="inline-block mb-[3rem]">
                        <span className="text-black bg-white px-[1rem] py-[0.5rem] text-[1.2rem] font-[600]">OUR STORY</span>
                    </div>
                    <div className="text-white/70 text-[clamp(1.1rem,1.8vw,1.8rem)] leading-[1.8] space-y-[2rem]">
                        <p>
                            <span className="text-white font-[600]">넥스트폼</span>은 2011년 3명이 모여 공개소스 CFD 코드인
                            OpenFOAM을 기반으로, 기술 기반의 <span className="text-white font-[600]">전문 엔지니어링 컨설팅 기업</span>으로
                            발전 및 물리현상 시뮬레이션 분야의 <span className="text-white font-[600]">패러다임 전환</span>을 목표로 출발하였습니다.
                        </p>
                        <p>
                            이후 다양한 산업 분야의 전문 인력들이 동참하여
                            <span className="text-white font-[600]"> 열유체 분야에서 국내의 대표적인 컨설팅 기업</span>으로 발전하였습니다.
                        </p>
                        <p>
                            2025년 현재 15년째를 맞이하는 넥스트폼은 지금까지
                            <span className="text-white font-[600]"> 산업체, 연구소, 대학, 공공기관 등 100여 개의 기관</span>과
                            <span className="text-white font-[600]"> 300여건의 컨설팅 프로젝트</span>를 수행하였습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CompanyInfoPage = () => {
    const teamMembers = [
        { name: "김병윤", role: "대표이사", education: "서울대학교 항공우주공학 석사", additional: "전산유체공학회 부회장" },
        { name: "이상돈", role: "사업개발팀 기술이사", education: "KAIST 기계공학 박사" },
        { name: "윤정구", role: "IT팀 기술이사", education: "서울대학교 기계공학 석사" },
        { name: "길재흥", role: "융합기술팀 기술이사", education: "아주대학교 기계공학 석사" },
        { name: "이보성", role: "사업개발팀 기술이사", education: "서울대학교 항공우주공학 박사" },
        { name: "신재렬", role: "엔진공력솔루션팀 기술이사", education: "부산대학교 항공우주공학 박사" }
    ];

    const companyInfo = [
        { label: "설립일", value: "2011년 01월 03일" },
        { label: "본사", value: "서울특별시 금천구" },
        { label: "지사", value: "부산광역시 금정구" },
        { label: "구성원", value: "박사 5명 / 석사 17명 / 학사 2명" },
        { label: "분류", value: "중소기업 / 벤처기업 / 병역특례 지정업체" }
    ];

    return (
        <div className="bg-black w-full min-h-[100vh] flex flex-col p-[1rem] md:p-[4rem] py-[8rem]">
            <div className="max-w-[1800px] mx-auto w-full">
                <div className="inline-block mb-[5rem]">
                    <span className="text-black bg-white px-[1rem] py-[0.5rem] text-[1.2rem] font-[600]">COMPANY INFO</span>
                </div>

                {/* Company basic info cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-[6rem]">
                    {companyInfo.map((info, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-[2rem] rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                        >
                            <div className="text-white/50 text-[0.9rem] mb-[0.5rem] uppercase tracking-[0.2rem]">{info.label}</div>
                            <div className="text-white text-[1.3rem] leading-[1.6] group-hover:text-white transition-all">{info.value}</div>
                        </div>
                    ))}
                </div>

                {/* Team members */}
                <div className="mb-[3rem]">
                    <h3 className="text-white text-[2.5rem] font-[600] mb-[3rem]">주요 임원</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white/5 to-transparent border-l-4 border-white/30 pl-[1.5rem] pr-[1.5rem] py-[2rem] hover:border-white hover:from-white/10 transition-all duration-300 group"
                            >
                                <h4 className="text-white text-[1.8rem] font-[600] mb-[0.5rem] group-hover:text-white transition-all">{member.name}</h4>
                                <p className="text-white/70 text-[1.1rem] mb-[0.8rem]">{member.role}</p>
                                <p className="text-white/50 text-[0.95rem]">{member.education}</p>
                                {member.additional && (
                                    <p className="text-white/50 text-[0.95rem] mt-[0.3rem]">{member.additional}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const VisionPage = () => {
    return (
        <div className="bg-black w-full min-h-[100vh] flex items-center justify-center p-[1rem] md:p-[4rem] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="inline-block mb-[5rem]">
                    <span className="text-black bg-white px-[1rem] py-[0.5rem] text-[1.2rem] font-[600]">VISION</span>
                </div>

                <div className="text-white text-[clamp(3rem,8vw,9rem)] font-[700] leading-[1.1] mb-[5rem]">
                    CFD for<br />
                    <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">Everyone!</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] text-white/70 text-[clamp(1.1rem,1.5vw,1.5rem)] leading-[1.8]">
                    <div className="space-y-[2rem]">
                        <p>
                            CFD는 아직 석사, 박사 학위를 소지한 소수의 전문 인력들이 활용할 수 있는
                            연구개발 도구로 연구실 밖의 제품 설계, 개발, AS 등으로 확대되지 못하고 있습니다.
                        </p>
                        <p>
                            이는 <span className="text-white font-[600]">고가의 해석 프로그램 가격의 문제</span>와 함께 적절한 격자계, 경계조건,
                            수치해석 기법의 사용이 결과의 정확도에 미치는 영향이 크기 때문입니다.
                        </p>
                    </div>
                    <div className="space-y-[2rem]">
                        <p>
                            저희 넥스트폼은 <span className="text-white font-[600]">공개소스 프로그램을 통해 비용의 문제를 해결</span>하고,
                            <span className="text-white font-[600]"> 문제별로 특화된 솔루션 제공 및 전문 컨설팅</span>을 통하여 이런 문제를 해결하려 합니다.
                        </p>
                        <div className="bg-gradient-to-r from-white/10 to-transparent border-l-4 border-white pl-[2rem] py-[2rem]">
                            <p className="text-white">
                                CFD를 필요로하는 <span className="font-[600]">누구나 쉽게 활용</span>할 수 있게 하여
                                보다 안전하고 쾌적한 삶을 구현하려 합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OpenFOAMPage = () => {
    return (
        <div className="bg-black w-full min-h-[100vh] flex items-center p-[1rem] md:p-[4rem]">
            <div className="max-w-[1800px] mx-auto w-full">
                <div className="inline-block mb-[5rem]">
                    <span className="text-black bg-white px-[1rem] py-[0.5rem] text-[1.2rem] font-[600]">OPENFOAM & OKUC</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem]">
                    {/* OpenFOAM */}
                    <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-[3rem] rounded-2xl hover:border-white/30 transition-all duration-300">
                        <h3 className="text-white text-[3rem] font-[600] mb-[2rem]">OpenFOAM<br />NextFOAM</h3>
                        <div className="text-white/70 text-[1.3rem] leading-[2] space-y-[1.5rem]">
                            <p>
                                <span className="text-white font-[600]">OpenFOAM®</span> (Open Field Operation and Manipulation)은
                                공개 소스 CFD 코드입니다.
                            </p>
                            <p>
                                GNU GPL을 사용하기 때문에 누구나 자유롭게 다운로드 받아 사용할 수 있으며
                                전 세계의 많은 연구자들에 의해 계속 개발되고 있습니다.
                            </p>
                            <p>
                                저희들은 OpenFOAM의 발전을 위해 자체적으로 개발한 포크를
                                <span className="text-white font-[600]"> NextFOAM</span>이란 이름으로 공개하고 있습니다.
                            </p>
                        </div>
                    </div>

                    {/* OKUC */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 p-[3rem] rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-white text-[3rem] font-[600] mb-[2rem]">OKUC</h3>
                        <div className="text-white/70 text-[1.3rem] leading-[2] space-y-[1.5rem]">
                            <p>
                                <span className="text-white font-[600]">OKUC</span>는 2012년에 만들어진 국내 사용자들의 커뮤니티입니다.
                            </p>
                            <p>
                                2012년에 처음 커뮤니티 모임을 가진 이래 저희는 매년
                                <span className="text-white font-[600]"> OKUCC</span> (OpenFOAM Korea Users' Community Conference)라는
                                커뮤니티 행사를 개최하고 있습니다.
                            </p>
                            <p>
                                <span className="text-white font-[600]">100명 이상</span>의 OpenFOAM 사용자와 관심 있는 분들이 1박 2일간
                                서로의 사례를 공유하고 친목을 도모하는 행사입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HistoryPage = () => {
    const historyItems = [
        { year: "2025", events: ["[도로 절개사면 모니터링 시스템] 특허 등록", "[교량 모니터링 시스템] 특허 등록"] },
        { year: "2023", events: ["자체 개발 OpenFOAM 포크 NextFOAM 공개"] },
        { year: "2022", events: ["공개 소스 CFD 프로그램 BARAM 차세대 버전 공개"] },
        { year: "2019", events: ["[속도 압력 엔탈피 연계 해석 방법 및 이를 수행하기 위한 컴퓨팅 시스템] 특허 등록"] },
        { year: "2018", events: ["무격자 CFD 해석 프로그램 FAMUS 제품 출시", "[모델링을 활용한 건축물의 풍압 해석 시스템 및 방법] 특허 등록"] },
        { year: "2017", events: ["병역특례 업체 지정", "중소벤처기업부 기술전문기업(K-ESP) 지정"] },
        { year: "2016", events: ["국방과학연구소 무격자 해석 기술 이전"] },
        { year: "2013", events: ["연구개발서비스 업체 등록", "벤처기업 인증, 기업부설연구소 설립", "8th International OpenFOAM Workshop 개최"] },
        { year: "2012", events: ["제 1회 OpenFOAM 한국사용자모임(OKUCC) 개최"] },
        { year: "2011", events: ["(주)넥스트폼 설립"] }
    ];

    return (
        <div className="bg-black w-full min-h-[100vh] flex flex-col p-[1rem] md:p-[4rem] py-[8rem]">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="inline-block mb-[5rem]">
                    <span className="text-black bg-white px-[1rem] py-[0.5rem] text-[1.2rem] font-[600]">HISTORY</span>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[4rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-white/50 to-white/10"></div>

                    <div className="space-y-[4rem]">
                        {historyItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative pl-[8rem] group"
                            >
                                {/* Year marker */}
                                <div className="absolute left-0 top-0 w-[4rem] h-[4rem] flex items-center justify-end pr-[1rem]">
                                    <div className="text-white text-[2.5rem] font-[700]">{item.year}</div>
                                </div>
                                <div className="absolute left-[3.5rem] top-[1.5rem] w-[1rem] h-[1rem] bg-white rounded-full group-hover:scale-150 transition-all duration-300"></div>

                                {/* Events */}
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-[2rem] rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                    <div className="space-y-[1rem]">
                                        {item.events.map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className="text-white/80 text-[1.3rem] leading-[1.8] hover:text-white transition-all duration-300 flex items-start gap-[0.5rem]"
                                            >
                                                <span className="text-white/40 mt-[0.5rem]">•</span>
                                                <span>{event}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const FooterPage = () => {
    return (
        <div className="relative w-full min-h-[60vh] bg-black flex flex-col justify-between p-[2rem] md:p-[4rem] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="max-w-[1800px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] mb-[4rem]">
                    <div>
                        <h4 className="text-white/50 text-[0.9rem] uppercase tracking-[0.2rem] mb-[1.5rem]">Contact</h4>
                        <div className="space-y-[0.8rem] text-white/70 text-[1.1rem]">
                            <p>070-8796-3019</p>
                            <p>marketing@nextfoam.co.kr</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white/50 text-[0.9rem] uppercase tracking-[0.2rem] mb-[1.5rem]">Location</h4>
                        <div className="space-y-[0.8rem] text-white/70 text-[1.1rem]">
                            <p>서울 금천구 디지털로9길 32</p>
                            <p>A동 1106호</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white/50 text-[0.9rem] uppercase tracking-[0.2rem] mb-[1.5rem]">Social</h4>
                        <div className="space-y-[0.8rem] text-white/70 text-[1.1rem]">
                            <p className="hover:text-white transition-all cursor-pointer">Github</p>
                            <p className="hover:text-white transition-all cursor-pointer">Youtube</p>
                            <p className="hover:text-white transition-all cursor-pointer">LinkedIn</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white/50 text-[0.9rem] uppercase tracking-[0.2rem] mb-[1.5rem]">Resources</h4>
                        <div className="space-y-[0.8rem] text-white/70 text-[1.1rem]">
                            <p className="hover:text-white transition-all cursor-pointer">Baram Portal</p>
                            <p className="hover:text-white transition-all cursor-pointer">Nextfoam Blog</p>
                            <p className="hover:text-white transition-all cursor-pointer">Privacy Policy</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-[3rem] flex flex-col md:flex-row justify-between items-center gap-[2rem]">
                    <div className="text-white text-[clamp(2rem,6vw,5rem)] font-[700]">
                        NEXTFOAM
                    </div>
                    <div className="text-white/40 text-[1rem]">
                        © 2025 Nextfoam. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};
