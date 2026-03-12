"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import React, { useState } from "react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

const schedule = [
    {
        course: "CFD 실전교육 BARAM",
        days: "2일",
        fee: "80만원",
        dates: ["1/29~30", "", "3/23~24", "", "6/23~24", "", "8/19~20", ""],
    },
    {
        course: "OpenFOAM 사용자 교육",
        days: "3일",
        fee: "120만원",
        dates: ["1/21~23", "3/25~27", "", "4/24~26", "", "7/26~28", "8/25~27", ""],
    },
    {
        course: "비행체 공력성능 평가 교육",
        days: "2일",
        fee: "80만원",
        dates: ["", "", "4/09~10", "", "", "", "", ""],
    },
];

const months = ["1월", "3월", "4월", "6월", "7월", "8월", "11월"];

const courseOptions = [
    "CFD 실전교육 BARAM",
    "OpenFOAM 사용자 교육",
    "비행체 공력성능 평가 교육",
    "OpenFOAM 코드개발자 교육 (On-site)",
    "OpenFOAM 열전달 교육 (On-site)",
    "CAE/AI 엔지니어를 위한 HPC 교육 (On-site)",
];

const scheduleByCourse: Record<string, string[]> = {
    "CFD 실전교육 BARAM": ["2026년 1월 29~30일", "2026년 3월 23~24일", "2026년 6월 23~24일", "2026년 8월 19~20일"],
    "OpenFOAM 사용자 교육": ["2026년 1월 21~23일", "2026년 3월 25~27일", "2026년 4월 24~26일", "2026년 7월 26~28일", "2026년 8월 25~27일"],
    "비행체 공력성능 평가 교육": ["2026년 4월 09~10일"],
};

const privacyText = `1. 개인정보의 처리 목적
넥스트폼은 고객 가입의사 확인, 본인 식별·인증, 회원자격 유지·관리, 서비스 제공 등의 목적으로 개인정보를 처리합니다.

2. 개인정보의 처리 및 보유 기간
서비스 이용계약 또는 회원가입 해지 시까지 보유합니다.

5. 처리하는 개인정보의 항목
필수항목: 로그인ID, 이름, 이메일 / 선택항목: 휴대전화번호, 회사명, 부서

8. 개인정보 보호책임자
성명: 이경진 / 연락처: 070-8796-3025, kjlee@nextfoam.co.kr`;

export default function EducationSchedulePage() {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const dateOptions = selectedCourse ? (scheduleByCourse[selectedCourse] ?? ["On-site 교육 — 일정 협의"]) : [];

    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[800px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                    교육 일정 및 신청
                </h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-6">
                    2026 Education Schedule & Registration
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-16">
                    넥스트폼 교육강좌를 찾아 주셔서 감사합니다. 현장에 대한 경험이 풍부한 컨설턴트와 엔지니어가 전문적인 교육을 통해 여러분을 도와드리고 있으니 많은 참여 부탁드립니다.
                </p>

                {/* 일정표 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>2026 Schedule</SectionLabel>

                    {/* 테이블 헤더 */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-[13px]">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left text-white/40 font-normal tracking-widest text-[11px] uppercase pb-3 pr-4 min-w-[180px]">과정</th>
                                    {months.map((m) => (
                                        <th key={m} className="text-center text-white/40 font-normal tracking-widest text-[11px] uppercase pb-3 px-2 min-w-14">{m}</th>
                                    ))}
                                    <th className="text-right text-white/40 font-normal tracking-widest text-[11px] uppercase pb-3 pl-4 min-w-20">교육비</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.map((row, ri) => (
                                    <tr key={ri} className="border-b border-white/10">
                                        <td className="py-4 pr-4">
                                            <div className="text-white text-[14px] font-medium leading-snug">{row.course}</div>
                                            <div className="text-white/40 text-[11px] mt-0.5">{row.days} 과정</div>
                                        </td>
                                        {row.dates.map((d, di) => (
                                            <td key={di} className="text-center py-4 px-2">
                                                {d ? (
                                                    <span className="text-white/80 text-[12px] whitespace-nowrap">{d}</span>
                                                ) : (
                                                    <span className="text-white/15 text-[11px]">—</span>
                                                )}
                                            </td>
                                        ))}
                                        <td className="text-right py-4 pl-4">
                                            <span className="text-white text-[13px] font-medium whitespace-nowrap">{row.fee}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex flex-col gap-1.5">
                        {[
                            "[CFD 실전교육 BARAM] 2일 과정으로 진행됩니다.",
                            "[OpenFOAM 사용자 교육] 3일 과정으로 진행됩니다.",
                            "모든 교육과정은 학생할인 30% 적용합니다. (박사과정까지 적용)",
                            "교육시간 : 오전 10:00 – 오후 5:00",
                            "교육 수강 후 한달 동안 무상 기술지원 (edusupport@nextfoam.co.kr).",
                        ].map((note, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <span className="text-white/30 text-[10px] mt-[5px]">●</span>
                                <span className="text-white/60 text-[13px] leading-[1.7]">{note}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* On-site 교육 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>On-Site Education</SectionLabel>
                    <h2 className="text-white text-[20px] font-medium tracking-tight mb-6">On-Site 교육</h2>
                    <div className="flex flex-col gap-1.5 mb-8">
                        {[
                            "교육을 희망하시는 개인이나 단체에서 신청이 가능합니다.",
                            "교육비 : 200만원 (부가세포함) / 1일",
                            "교육장, 실습 PC 제공 혹은 개별 노트북 지참",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <span className="text-white/30 text-[10px] mt-[5px]">●</span>
                                <span className="text-white/80 text-[15px] leading-[1.7]">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border border-white/15 px-6 py-4">
                        <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-2">상담 문의</span>
                        <span className="text-white text-[14px]">오광호 책임 &nbsp;|&nbsp; 070-8796-3019 &nbsp;·&nbsp; 010-4602-0316 &nbsp;·&nbsp; gwangeo@nextfoam.co.kr</span>
                    </div>
                </div>

                {/* 교육 안내 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>Education Info</SectionLabel>
                    <h2 className="text-white text-[20px] font-medium tracking-tight mb-8">교육 안내</h2>

                    <div className="flex flex-col gap-10">
                        {/* 시간 및 장소 */}
                        <div>
                            <p className="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-3">시간 및 장소</p>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-white/80 text-[15px]">오전 10:00 ~ 오후 5:00</span>
                                <span className="text-white/80 text-[15px]">[서울] 서울특별시 금천구 디지털로9길 32, A동 1106호</span>
                                <span className="text-white/50 text-[13px]">주차지원이 되지 않습니다. 대중교통 이용을 부탁드립니다.</span>
                            </div>
                        </div>

                        {/* 준비물 */}
                        <div>
                            <p className="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-3">교육 준비물</p>
                            <div className="flex flex-col gap-1.5">
                                {[
                                    "실습용 노트북 (운영체제 무관)",
                                    "OpenFOAM을 미리 설치해 오셔도 됩니다.",
                                    "Windows OS 사용자는 WSL(Windows Subsystem for Linux) 환경으로 실습을 진행하오니 미리 설치해오셔도 됩니다.",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <span className="text-white/30 text-[10px] mt-[5px]">●</span>
                                        <span className="text-white/80 text-[14px] leading-[1.7]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 신청 및 취소 */}
                        <div>
                            <p className="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-3">신청 및 취소</p>
                            <div className="flex flex-col gap-1.5">
                                {[
                                    "신청 : 교육일 1주 전까지 온라인이나 전화, 메일로 가능",
                                    "접수 확인 이메일 송부 → 교육 시작일 약 10일 전(또는 4인 이상 신청 시) 참가안내문 이메일 송부",
                                    "취소 및 연기 : 각 교육 시작 3일 전까지 연락",
                                    "각 교육은 선착순 마감됩니다.",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <span className="text-white/30 text-[10px] mt-[5px]">●</span>
                                        <span className="text-white/80 text-[14px] leading-[1.7]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 결제 */}
                        <div>
                            <p className="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-3">교육비 결제</p>
                            <div className="flex flex-col gap-1.5">
                                {[
                                    "세금계산서, 카드결제 가능",
                                    "세금계산서가 필요하신 분은 사업자등록증/세금계산서 수령 담당자 e-mail 송부 필요",
                                    "교재/중식 제공",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <span className="text-white/30 text-[10px] mt-[5px]">●</span>
                                        <span className="text-white/80 text-[14px] leading-[1.7]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 담당자 */}
                        <div className="border border-white/15 px-6 py-4">
                            <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase block mb-2">담당자</span>
                            <span className="text-white text-[14px]">이혜진 부장 &nbsp;|&nbsp; 070-8796-3025 &nbsp;·&nbsp; hjlee@nextfoam.co.kr</span>
                        </div>
                    </div>
                </div>

                {/* 교육 신청 폼 */}
                <div className="border-t border-white/20 pt-14">
                    <SectionLabel>Registration</SectionLabel>
                    <h2 className="text-white text-[20px] font-medium tracking-tight mb-8">교육 신청</h2>

                    <div className="flex flex-col gap-6">
                        {/* 과정 선택 */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                                교육 과정 <span className="text-white/30 ml-1">*</span>
                            </label>
                            <select
                                value={selectedCourse}
                                onChange={(e) => { setSelectedCourse(e.target.value); setSelectedDate(""); }}
                                className="bg-white/5 border border-white/20 text-white text-[14px] outline-none px-4 py-3 focus:border-white/50 transition-colors duration-200 appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-black">교육 과정을 선택하세요.</option>
                                {courseOptions.map((opt) => (
                                    <option key={opt} value={opt} className="bg-black">{opt}</option>
                                ))}
                            </select>
                        </div>

                        {/* 일정 선택 */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                                교육 일정 <span className="text-white/30 ml-1">*</span>
                            </label>
                            <select
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                disabled={!selectedCourse}
                                className="bg-white/5 border border-white/20 text-white text-[14px] outline-none px-4 py-3 focus:border-white/50 transition-colors duration-200 appearance-none cursor-pointer disabled:text-white/30 disabled:cursor-not-allowed"
                            >
                                <option value="" className="bg-black">교육 일정을 선택해 주세요.</option>
                                {dateOptions.map((opt) => (
                                    <option key={opt} value={opt} className="bg-black">{opt}</option>
                                ))}
                            </select>
                        </div>

                        {/* 텍스트 필드들 */}
                        {[
                            { label: "이름", placeholder: "성함을 입력해 주세요", required: true },
                            { label: "기관 / 부서", placeholder: "소속 기관 또는 부서명", required: true },
                            { label: "Email", placeholder: "example@company.com", required: true },
                            { label: "Phone", placeholder: "010-0000-0000", required: true },
                            { label: "연구분야 / 코멘트", placeholder: "연구 분야나 문의 사항을 입력해 주세요", required: false },
                        ].map((field) => (
                            <div key={field.label} className="flex flex-col gap-2">
                                <label className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                                    {field.label} {field.required && <span className="text-white/30 ml-1">*</span>}
                                </label>
                                <input
                                    type="text"
                                    placeholder={field.placeholder}
                                    className="bg-white/5 border border-white/20 text-white text-[14px] placeholder:text-white/25 outline-none px-4 py-3 focus:border-white/50 transition-colors duration-200"
                                />
                            </div>
                        ))}

                        {/* 개인정보 동의 */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setAgreed(!agreed)}
                                    className={`w-5 h-5 border flex items-center justify-center transition-colors duration-200 shrink-0 ${agreed ? "bg-white border-white" : "bg-transparent border-white/30"}`}
                                >
                                    {agreed && <span className="text-black text-[11px] leading-none font-bold">✓</span>}
                                </button>
                                <span className="text-white/70 text-[14px]">
                                    개인정보 취급 방침에 동의합니다.
                                    <span className="text-white/30"> (필수)</span>
                                </span>
                                <button
                                    onClick={() => setShowPolicy(!showPolicy)}
                                    className="text-white/30 text-[12px] underline underline-offset-2 hover:text-white transition-colors duration-200 ml-auto shrink-0"
                                >
                                    {showPolicy ? "닫기" : "내용 보기"}
                                </button>
                            </div>

                            {showPolicy && (
                                <div className="border border-white/10 bg-white/5 p-5 text-white/50 text-[13px] leading-[1.8] max-h-60 overflow-y-auto whitespace-pre-line">
                                    {privacyText}
                                </div>
                            )}
                        </div>

                        {/* 제출 버튼 */}
                        <div className="flex justify-end pt-2">
                            <button
                                disabled={!agreed}
                                className={`group relative px-10 py-3.5 border text-[13px] tracking-widest uppercase overflow-hidden transition-all duration-500
                                    ${agreed
                                        ? "border-white text-white hover:text-black cursor-pointer"
                                        : "border-white/20 text-white/20 cursor-not-allowed"
                                    }`}
                            >
                                {agreed && (
                                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                )}
                                <span className="relative z-10">교육 신청 →</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
