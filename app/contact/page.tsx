"use client"
import React, { useState } from "react";
import { PageLayout } from "@/shared/ui/page";

const privacyText = `1. 개인정보의 처리 목적
넥스트폼은 고객 가입의사 확인, 본인 식별·인증, 회원자격 유지·관리, 서비스 제공 등의 목적으로 개인정보를 처리합니다.

2. 개인정보의 처리 및 보유 기간
서비스 이용계약 또는 회원가입 해지 시까지 보유합니다.

5. 처리하는 개인정보의 항목
필수항목: 로그인ID, 이름, 이메일 / 선택항목: 휴대전화번호, 회사명, 부서

8. 개인정보 보호책임자
성명: 이혜진 / 연락처: 070-8796-3025, hjlee@nextfoam.co.kr`;

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    return (
        <PageLayout>

            {/* Hero */}
            <h1 className="text-white text-[64px] font-bold tracking-tighter leading-none mb-4">
                Contact Us
            </h1>
            <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-6">
                Get in touch with NEXTFOAM
            </p>
            <p className="text-white/80 text-[16px] leading-[1.9] mb-16">
                상담이 필요한 내용과 연락처를 남겨 주시면 최대한 빨리 연락 드리겠습니다.
            </p>

            {/* 연락처 정보 */}
            <div className="mb-16 border border-white/40 bg-white/5 divide-y divide-white/20">
                {[
                    { label: "컨설팅 / 영업 문의", value: "오광호 책임  |  070-8796-3019  ·  010-4602-0316  ·  gwangeo@nextfoam.co.kr" },
                    { label: "교육 문의", value: "이혜진 부장  |  070-8796-3025  ·  hjlee@nextfoam.co.kr" },
                    { label: "일반 문의", value: "marketing@nextfoam.co.kr" },
                    { label: "주소", value: "서울특별시 금천구 디지털로9길 32, A동 1106호" },
                ].map((info, i) => (
                    <div key={i} className="px-6 py-4">
                        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase block mb-2">{info.label}</span>
                        <span className="text-white text-[15px]">{info.value}</span>
                    </div>
                ))}
            </div>

            {/* 문의 폼 */}
            <div className="pt-14">
                <h2 className="text-white text-[26px] font-semibold tracking-tight mb-8">문의하기</h2>

                <div className="flex flex-col gap-6">
                    {[
                        { label: "기관 / 부서", placeholder: "소속 기관 또는 부서명", required: true },
                        { label: "이름", placeholder: "성함을 입력해 주세요", required: true },
                        { label: "직위 / 과정", placeholder: "직위 또는 과정명", required: false },
                        { label: "Email", placeholder: "example@company.com", required: true },
                        { label: "Phone", placeholder: "010-0000-0000", required: true },
                    ].map((field) => (
                        <div key={field.label} className="flex flex-col gap-2">
                            <label className="text-white/75 text-[12px] tracking-[0.15em] uppercase">
                                {field.label} {field.required && <span className="text-white/50 ml-1">*</span>}
                            </label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="bg-white/12 border border-white/40 text-white text-[14px] placeholder:text-white/40 outline-none px-4 py-3 focus:border-white/70 transition-colors duration-200"
                            />
                        </div>
                    ))}

                    {/* 문의사항 */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/75 text-[12px] tracking-[0.15em] uppercase">문의 사항</label>
                        <textarea
                            rows={6}
                            placeholder="문의하실 내용을 입력해 주세요"
                            className="bg-white/12 border border-white/40 text-white text-[14px] placeholder:text-white/40 outline-none px-4 py-3 resize-none focus:border-white/70 transition-colors duration-200"
                        />
                    </div>

                    {/* 개인정보 동의 */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setAgreed(!agreed)}
                                className={`w-5 h-5 border flex items-center justify-center transition-colors duration-200 shrink-0 ${agreed ? "bg-white border-white" : "bg-transparent border-white/55"}`}
                            >
                                {agreed && <span className="text-black text-[11px] leading-none font-bold">✓</span>}
                            </button>
                            <span className="text-white/85 text-[14px]">
                                개인정보 취급 방침에 동의합니다.
                                <span className="text-white/55"> (필수)</span>
                            </span>
                            <button
                                onClick={() => setShowPolicy(!showPolicy)}
                                className="text-white/55 text-[12px] underline underline-offset-2 hover:text-white transition-colors duration-200 ml-auto shrink-0"
                            >
                                {showPolicy ? "닫기" : "내용 보기"}
                            </button>
                        </div>

                        {showPolicy && (
                            <div className="border border-white/35 bg-white/12 p-5 text-white/70 text-[13px] leading-[1.8] max-h-60 overflow-y-auto whitespace-pre-line">
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
                                    : "border-white/35 text-white/35 cursor-not-allowed"
                                }`}
                        >
                            {agreed && (
                                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            )}
                            <span className="relative z-10">Send Message →</span>
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    );
}
