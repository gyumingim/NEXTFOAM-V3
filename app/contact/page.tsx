"use client"

import React, { useState } from 'react';
import { Header } from '@/widgets/header/Header';
import Image from 'next/image';

const Index = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={className}>
            <span className="text-black bg-white px-[.5vw] py-[.25vw] text-[0.75rem]">{text}</span>
            <span className="text-white px-[.5vw] text-[0.75rem]">{text}</span>
        </div>
    )
}

const ContactPage = () => {
    const [agreed, setAgreed] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    return (
        <div className="bg-black w-full min-h-screen flex flex-col items-center p-[1vw] mt-[6vw] ">
            <Header />

            <div className="w-[1000px] flex flex-col border-1 border-white p-[4vw]">
                <div className="text-white text-[4vw] mb-[1vw] leading-tight font-[700]">
                    Contact us
                </div>
                <p className="text-white/80 text-[1vw] mb-[4vw]">
                    상담이 필요한 내용과 연락처를 남겨 주시면 최대한 빨리 연락 드리겠습니다.<br />
                    담당자 : 오광호 책임 &nbsp;070-8796-3019 &nbsp;|&nbsp; 010-4602-0316
                </p>

                {/* 필드 1열 */}
                <div className="flex flex-col gap-[2vw] mb-[2vw]">
                    {[
                        { label: "기관 / 부서", required: true, placeholder: "소속 기관 또는 부서명" },
                        { label: "이름", required: true, placeholder: "성함을 입력해 주세요" },
                        { label: "직위 / 과정", required: false, placeholder: "직위 또는 과정명" },
                        { label: "Email", required: true, placeholder: "example@company.com" },
                        { label: "Phone", required: true, placeholder: "010-0000-0000" },
                    ].map((field) => (
                        <div key={field.label} className="flex flex-col gap-[0.5vw]">
                            <label className="text-white text-[0.9vw] font-[500] tracking-widest uppercase">
                                {field.label}
                                {field.required && <span className="text-white/50 ml-1">*</span>}
                            </label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="bg-white/10 border border-white/20 text-white text-[1vw] placeholder:text-white/60 outline-none px-[1vw] py-[0.8vw] rounded-[0.3vw] focus:border-white/60 transition-colors duration-200"
                            />
                        </div>
                    ))}
                </div>

                {/* 문의사항 */}
                <div className="flex flex-col gap-[0.5vw] mb-[3vw]">
                    <label className="text-white text-[0.9vw] font-[500] tracking-widest uppercase">
                        문의 사항
                    </label>
                    <textarea
                        rows={6}
                        placeholder="문의하실 내용을 입력해 주세요"
                        className="bg-white/10 border border-white/20 text-white text-[1vw] placeholder:text-white/60 outline-none px-[1vw] py-[0.8vw] rounded-[0.3vw] resize-none focus:border-white/60 transition-colors duration-200"
                    />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex flex-col gap-[1vw] mb-[3vw]">
                    <div className="flex items-center gap-[0.8vw]">
                        <button
                            onClick={() => setAgreed(!agreed)}
                            className={`w-[1.2vw] h-[1.2vw] border border-white/40 flex items-center justify-center transition-colors duration-200 rounded-[0.2vw] ${agreed ? "bg-white" : "bg-transparent"}`}
                        >
                            {agreed && <span className="text-black text-[0.8vw] leading-none">✓</span>}
                        </button>
                        <span className="text-white/70 text-[0.9vw]">
                            개인정보 취급 방침에 동의합니다.
                            <span className="text-white/40"> (필수)</span>
                        </span>
                        <button
                            onClick={() => setShowPolicy(!showPolicy)}
                            className="text-white/40 text-[0.85vw] underline underline-offset-2 hover:text-white transition-colors duration-200"
                        >
                            {showPolicy ? "닫기" : "내용 보기"}
                        </button>
                    </div>

                    {showPolicy && (
                        <div className="border border-white/10 bg-white/5 p-[1.5vw] text-white/60 text-[0.8vw] leading-[1.8] max-h-[20vh] overflow-y-auto rounded-[0.3vw]">
                            <p className="mb-[0.8vw] font-[600] text-white/60">1. 개인정보의 처리 목적</p>
                            <p className="mb-[0.8vw]">넥스트폼은 고객 가입의사 확인, 본인 식별·인증, 회원자격 유지·관리, 서비스 제공 등의 목적으로 개인정보를 처리합니다.</p>
                            <p className="mb-[0.8vw] font-[600] text-white/60">2. 개인정보의 처리 및 보유 기간</p>
                            <p className="mb-[0.8vw]">서비스 이용계약 또는 회원가입 해지 시까지 보유합니다.</p>
                            <p className="mb-[0.8vw] font-[600] text-white/60">5. 처리하는 개인정보의 항목</p>
                            <p className="mb-[0.8vw]">필수항목: 로그인ID, 이름, 이메일 / 선택항목: 휴대전화번호, 회사명, 부서</p>
                            <p className="mb-[0.8vw] font-[600] text-white/60">8. 개인정보 보호책임자</p>
                            <p>성명: 이혜진 / 연락처: 070-8796-3025, hjlee@nextfoam.co.kr</p>
                        </div>
                    )}
                </div>

                {/* 제출 버튼 */}
                <div className="flex justify-end mb-[8vw]">
                    <button
                        disabled={!agreed}
                        className={`group relative px-[3vw] py-[1vw] border text-[0.9vw] uppercase tracking-widest overflow-hidden transition-all duration-500
                            ${agreed
                                ? "border-white text-white hover:text-black cursor-pointer"
                                : "border-white/20 text-white/20 cursor-not-allowed"
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
    );
};

export default ContactPage;