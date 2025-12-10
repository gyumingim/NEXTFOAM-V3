"use client"
import { Header } from "@/widgets/header/Header";
import Image from "next/image";
import space from "@/public/space.png"
import arrow from "@/public/arrow.svg"
import React, { useState } from 'react';

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
    return (
        <div className="w-full h-[100vh] overflow-hidden relative">
            <Image src={space} alt="Background" className="overflow-hidden object-cover" />
            <div className="absolute bottom-[1rem] left-[1rem] text-white text-[6rem] leading-[5.875rem]">
                About <br />
                Nextfoam
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

const CompanyIntroPage = () => {
    return (
        <div className="bg-black w-full min-h-[140vh] flex flex-col p-[1rem]">
            <Index text={"SINCE 2011"} className={"mt-[8rem] mb-[6rem]"} />
            <div className="text-white text-[3.5rem] leading-[4.3rem] text-white/60">
                <span className="text-white/100">넥스트폼</span>은 2011년 3명이 모여 공개소스 CFD 코드인 <br />
                OpenFOAM을 기반으로, 기술 기반의 <span className="text-white/100">전문 엔지니어링 컨설팅 기업</span>으로 <br />
                발전 및 물리현상 시뮬레이션 분야의 <span className="text-white/100">패러다임 전환</span>을 목표로 <br />
                출발하였습니다. 이후 다양한 산업 분야의 전문 인력들이 동참하여 <br />
                <span className="text-white/100">열유체 분야에서 국내의 대표적인 컨설팅 기업</span>으로 발전하였습니다. <br /><br />
                열유체 분야 뿐만 아니라 <span className="text-white/100">광학 및 인공지능을 이용한 영상계측 분야</span>로 <br />
                영역을 확장하여 현재 <span className="text-white/100">총 22명</span>으로 운영하고 있습니다. <br /><br />
                2025년 현재 15년째를 맞이하는 넥스트폼은 지금까지 <br />
                <span className="text-white/100">산업체, 연구소, 대학, 공공기관 등 100여 개의 기관</span>과 <br />
                <span className="text-white/100">300여건의 컨설팅 프로젝트</span>를 수행하였습니다. <br /><br />
                한국전산유체공학회, 한국항공우주학회, 대한조선학회 등의 여러 학회에서 <br />
                특별세션, 후원, 전시부스 등의 학술활동을 계속해 오고 있으며, <br />
                국내외 학술지와 학술대회에 <span className="text-white/100">130편 이상의 논문</span>을 발표하였습니다.
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

    return (
        <div className="bg-black w-full min-h-[160vh] flex flex-col p-[1rem]">
            <Index text={"COMPANY INFO"} className={"mt-[8rem] mb-[8rem]"} />

            <div className="grid grid-cols-2 gap-16 mb-[8rem]">
                <div>
                    <h3 className="text-white text-[2.5rem] mb-[2rem]">기업 정보</h3>
                    <div className="space-y-[1.5rem]">
                        <InfoRow label="설립일" value="2011년 01월 03일" />
                        <InfoRow label="위치" value="(본사) 서울특별시 금천구" />
                        <InfoRow label="" value="(지사) 부산광역시 금정구" />
                        <InfoRow label="기업분류" value="중소기업, 벤처기업" />
                        <InfoRow label="" value="공학연구개발업 전문연구사업자" />
                        <InfoRow label="" value="병역특례 지정업체" />
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-[2.5rem] mb-[2rem]">구성원</h3>
                    <div className="text-white text-[1.5rem] leading-[2.2rem]">
                        총원 <span className="text-white/100">24명</span><br />
                        박사 <span className="text-white/100">5명</span>,
                        석사 <span className="text-white/100">17명</span>,
                        학사 <span className="text-white/100">2명</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-white text-[2.5rem] mb-[2rem]">주요 임원</h3>
                <div className="grid grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="border-l-2 border-white/20 pl-[1.5rem] py-[1rem]">
                            <h4 className="text-white text-[1.8rem] mb-[0.5rem]">{member.name}</h4>
                            <p className="text-white/80 text-[1.2rem]">{member.role}</p>
                            <p className="text-white/60 text-[1rem] mt-[0.5rem]">{member.education}</p>
                            {member.additional && (
                                <p className="text-white/60 text-[1rem]">{member.additional}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const InfoRow = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className="flex text-white text-[1.3rem]">
            {label && <span className="text-white/60 min-w-[8rem]">{label}</span>}
            {!label && <span className="min-w-[8rem]"></span>}
            <span className="text-white/100">{value}</span>
        </div>
    )
}

const VisionPage = () => {
    return (
        <div className="bg-black w-full min-h-[140vh] flex flex-col p-[1rem]">
            <Index text={"VISION"} className={"mt-[8rem] mb-[8rem]"} />

            <div className="text-white text-[4.5rem] leading-[5.5rem] mb-[4rem]">
                CFD for Everyone!
            </div>

            <div className="text-white text-[1.8rem] leading-[2.8rem] text-white/80 mb-[4rem]">
                CFD는 아직 석사, 박사 학위를 소지한 소수의 전문 인력들이 활용할 수 있는 <br />
                연구개발 도구로 연구실 밖의 제품 설계, 개발, AS 등으로 확대되지 못하고 있습니다. <br /><br />
                이는 <span className="text-white/100">고가의 해석 프로그램 가격의 문제</span>와 함께 적절한 격자계, 경계조건, <br />
                수치해석 기법의 사용이 결과의 정확도에 미치는 영향이 크기 때문입니다. <br /><br />
                저희 넥스트폼은 <span className="text-white/100">공개소스 프로그램을 통해 비용의 문제를 해결</span>하고, <br />
                <span className="text-white/100">문제별로 특화된 솔루션 제공 및 전문 컨설팅</span>을 통하여 이런 문제를 해결하려 합니다.
            </div>

            <div className="p-[3rem] border border-white/10 rounded-lg">
                <div className="text-white text-[1.6rem] leading-[2.5rem] text-white/80">
                    이를 통해 열,유체 문제의 강력한 솔루션인 CFD를 필요로하는 <br />
                    <span className="text-white/100">누구나 쉽게 활용</span>할 수 있게 하여 제품이나 시스템의 성능 향상과 <br />
                    보다 안전하고 쾌적한 삶을 구현하려 합니다. <br /><br />
                    또한 CFD 분야의 전문가들을 <span className="text-white/100">반복적인 모델링에서 벗어나</span> <br />
                    보다 수준 높은 연구 개발에 집중할 수 있게 하고자 합니다.
                </div>
            </div>
        </div>
    )
}

const OpenFOAMPage = () => {
    return (
        <div className="bg-black w-full min-h-[140vh] flex flex-col p-[1rem]">
            <Index text={"OPENFOAM & OKUC"} className={"mt-[8rem] mb-[8rem]"} />

            <div className="mb-[6rem]">
                <h3 className="text-white text-[3.5rem] mb-[3rem]">OpenFOAM, NextFOAM</h3>
                <div className="text-white text-[1.6rem] leading-[2.6rem] text-white/80">
                    <span className="text-white/100">OpenFOAM®</span>(Open Field Operation and Manipulation)은 <br />
                    공개 소스 CFD 코드입니다. <br /><br />
                    GNU GPL(일반 공중 사용 허가서 : General Public License)을 사용하기 때문에 <br />
                    누구나 자유롭게 다운로드 받아 사용할 수 있으며 전 세계의 많은 연구자들에 의해 <br />
                    계속 개발되고 있습니다. <br /><br />
                    저희들은 OpenFOAM의 발전을 위해 자체적으로 개발한 포크를 <br />
                    <span className="text-white/100">NextFOAM</span>이란 이름으로 공개하고 있습니다.
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg"></div>
                <div className="relative p-[3rem] border-l-4 border-white/30">
                    <h3 className="text-white text-[3.5rem] mb-[3rem]">OKUC</h3>
                    <div className="text-white text-[1.6rem] leading-[2.6rem] text-white/80">
                        <span className="text-white/100">OKUC</span>는 2012년에 만들어진 국내 사용자들의 커뮤니티입니다. <br /><br />
                        2012년에 처음 커뮤니티 모임을 가진 이래 저희는 매년 <br />
                        <span className="text-white/100">OKUCC(OpenFOAM Korea Users' Community Conference)</span>라는 <br />
                        커뮤니티 행사를 개최하고 있습니다. <br /><br />
                        <span className="text-white/100">100명 이상</span>의 OpenFOAM 사용자와 관심 있는 분들이 1박 2일간 <br />
                        서로의 사례를 공유하고 친목을 도모하는 행사입니다.
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
        <div className="bg-black w-full min-h-[180vh] flex flex-col p-[1rem]">
            <Index text={"HISTORY"} className={"mt-[8rem] mb-[8rem]"} />

            <div className="space-y-[3rem]">
                {historyItems.map((item, index) => (
                    <div key={index} className="flex gap-8 border-b border-white/10 pb-[2rem] hover:border-white/30 transition-all duration-300">
                        <div className="text-white text-[3rem] font-[600] min-w-[8rem]">
                            {item.year}
                        </div>
                        <div className="flex-1 space-y-[1rem]">
                            {item.events.map((event, eventIndex) => (
                                <div key={eventIndex} className="text-white text-[1.5rem] leading-[2.2rem] text-white/80 hover:text-white/100 transition-all duration-300">
                                    {event}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-[1rem] mt-[8rem] mx-auto">
                <Image src={arrow} alt="arrow" className="scale-[-1]" />
                <div className="text-white text-[1.5rem]">Learn more about our journey</div>
            </div>
        </div>
    )
}

const FooterPage = () => {
    return (
        <div className="relative w-full h-[110vh] bg-black flex flex-col justify-between p-8 select-none overflow-hidden">
            <div className="mt-[8rem]">
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    서울 금천구 디지털로9길 32 A동 1106호 <span className="text-white/20">ASDNVOI IVHOAS</span> Github<span className="text-white/20"> BJZM</span> Naver Blog <span className="text-white/20">VUIXJNOBIZBWE</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    marketing@nextfoam.co.kr <span className="text-white/20">ASDVASD K DJSOPV SDA </span>Youtube<span className="text-white/20"> ASD </span>Baram Portal<span className="text-white/20">SAIND CIASJDS</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    070-8796-3019 <span className="text-white/20">BIASNUD USDHAJW DK AKSL ASDAI </span>Linkedin<span className="text-white/20"> LUX </span>Nextfoam Blog<span className="text-white/20"> BNOAJIBXND</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    찾아오는 길 <span className="text-white/20">AGLI PAISD LKQ JSGI ANWJGVB QKSD HGL </span>Instagram<span className="text-white/20"> GHOQL ZLFG PQND SGJAA KJS</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    <span className="text-white/20">AOBXH QKXGHAOHBN UHDAJ KBFIUASHDA BFGOUZ </span>Facebook<span className="text-white/20"> ZM OV HGQ JSHGAIBG PPXUSN</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    <span className="text-white/20">BHOA HQNP BSAUD JZHXGUOIQMZ PQASIFHQEU HZNCM BVHFHASG ZHUFQH WFOUA SHAGM</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    <span className="text-white/20">JSIDFJIAJ GZPUJQWNTNSJA HZXUHVKMZ VIHWHASK HDIUHABG UYHIOAYUDNI DQIUA IMLYA</span>
                </div>
                <div className="text-white text-[clamp(2.12187vw,2.12187vw,2.12187vw)] font-[700] leading-[2.5rem] text-justify">
                    Privacy Policy <span className="text-white/20">NBAIOSH DBQUGASKJG HBA SUN ZKNQKJWHRIUASHGAUSNFUIASG</span> @Nextfoam
                </div>
            </div>
            <div className="text-white text-[clamp(23vw,23vw,23vw)] absolute left-0 bottom-0 leading-[17vw]">
                Nextfoam
            </div>
        </div>
    );
};
