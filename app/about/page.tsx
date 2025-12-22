"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Calendar, BarChart3 } from "lucide-react";

// 이미지는 실제 경로로 수정 (기존 nextfoam 이미지 활용)
import aboutImage from "@/public/introduce/nextfoam.jpg"; 

// 1. 데이터 분리 (유지보수 용이성)
const STATS = [
  { label: "Founded", value: "2011", sub: "Since", icon: Calendar },
  { label: "Experts", value: "24", sub: "Specialists", icon: Users },
  { label: "Projects", value: "300+", sub: "Completed", icon: CheckCircle2 },
  { label: "Partners", value: "100+", sub: "Institutions", icon: BarChart3 },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 패럴랙스 효과를 위한 스크롤 훅 (이미지가 스크롤보다 천천히 움직임)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#080808] overflow-hidden"
    >
      {/* 배경 장식 (Tech 느낌의 그리드 패턴) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 상단 레이블 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-8 h-[1px] bg-emerald-500"></span>
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">
            Who We Are
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: 텍스트 스토리텔링 */}
          <div className="flex flex-col gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Beyond Simulation, <br />
              <span className="text-gray-500">Engineering Reality.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed font-light"
            >
              <p>
                넥스트폼은 2011년, 3명의 엔지니어가 모여 오픈소스 CFD 코드인 
                <strong className="text-white font-medium"> OpenFOAM</strong>을 기반으로 시작되었습니다.
                우리는 단순한 해석을 넘어, 물리현상 시뮬레이션 분야의 
                패러다임 전환을 목표로 하는 전문 엔지니어링 컨설팅 기업입니다.
              </p>
              <p>
                현재는 다양한 산업 분야의 최고 수준 전문 인력들이 합류하여, 
                국내를 대표하는 열유체 분야 컨설팅 기업으로 성장했습니다.
                우리는 오픈소스의 가능성을 현실의 솔루션으로 증명합니다.
              </p>
            </motion.div>

            {/* CTA 버튼 */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="pt-4"
            >
              <button className="group flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300">
                <span className="font-mono text-sm uppercase tracking-wider">Read Our Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT: 이미지 & 통계 (Visuals) */}
          <div className="relative">
            {/* 메인 이미지 프레임 */}
            <motion.div 
              style={{ y }} // 스크롤 시 살짝 위로 올라가는 효과
              className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <Image
                src={aboutImage}
                alt="Nextfoam Office Culture"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* 이미지 위 오버레이 텍스트 (선택사항) */}
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-mono text-xs text-emerald-400 uppercase mb-1">Our Team</p>
                <p className="text-white text-lg font-medium">Innovating Together</p>
              </div>
            </motion.div>

            {/* 통계 그리드 (이미지 아래 또는 겹치게 배치) */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-sm hover:border-white/20 transition-colors group"
                >
                  <stat.icon className="w-5 h-5 text-gray-500 mb-4 group-hover:text-emerald-400 transition-colors" />
                  <div className="text-3xl font-bold text-white mb-1 tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    {stat.sub} <br/> {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};