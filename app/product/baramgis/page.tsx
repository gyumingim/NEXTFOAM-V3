"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import Image from "next/image";
import Link from "next/link";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-white/40" />
        <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
);

const terrainSteps = [
    "등고선 데이터 불러오기 (F10000.shp, OsGeo 변환)",
    "정보 포인트 추출 — 다중 라인 문자열 형태 등고선 점의 위치 및 높이 값",
    "선형 보간을 이용한 높이 계산 — 격자 형태 신규 점 생성",
    "높이 보정 — 최저 고도 z=0 기준, 경계부 점진적 감소",
    "vtk 라이브러리로 표면 격자 변환 (STL / OBJ)",
    "미래 디지털 지형도 반영 및 최신 변경 사항 보정",
];

const buildingSteps = [
    "B0010000.shp에서 건물 정보를 Python 객체로 변환",
    "건물 층 정보 및 평면도 표면 데이터 추출",
    "각 지점 좌표 추출",
    "OpenCaseCade 라이브러리로 점·선·표면 생성",
    "표면을 특정 높이까지 돌출하여 3차원 형상 완성",
];

const pipeline = [
    { label: "형상 정보", desc: "국토지리정보원 API 수치지형도 (GIS 표준)\nOsGeo Python 라이브러리로 기하 정보 추출" },
    { label: "형상 생성 및 처리", desc: "3D 데이터 불러오기 및 boolean 연산\n격자 생성 프로그램으로 형상 내보내기" },
    { label: "격자 생성", desc: "OpenFOAM snappyHexMesh로\n3차원 격자 자동 생성" },
];

export default function BaramGisPage() {
    return (
        <div className="w-full bg-black">
            <Header />
            <BackToTop />

            <div className="max-w-[720px] mx-auto px-10 pt-40 pb-40">

                {/* Hero */}
                <h1 className="text-white text-[72px] font-bold tracking-tighter leading-none mb-4">BaramGIS</h1>
                <p className="text-white/50 text-[13px] tracking-[0.2em] uppercase mb-14">
                    수치지형도를 이용한 CFD 전처리 자동화 프로그램
                </p>

                <p className="text-white text-[17px] leading-[1.9] mb-5">
                    전산유체역학(CFD)을 이용하여 풍환경이나 오염물 확산을 분석하기 위해,
                    수치지형도를 이용하여 형상과 격자를 생성하는 전처리 프로그램입니다.
                </p>
                <p className="text-white/80 text-[16px] leading-[1.9] mb-12">
                    모두 오픈소스 소프트웨어를 이용합니다. 전처리 과정은 지형 및 건물 정보를 불러오고,
                    3차원 형상을 만들고, 격자를 구성하는 단계로 구성됩니다.
                </p>

                <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                    <Image src="/GIS/main-3.webp" alt="BaramGIS" fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>

                <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-white px-8 py-3.5 text-[13px] font-medium tracking-widest mb-20"
                >
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">for more information, contact us</span>
                    <span className="relative z-10 text-white/50 group-hover:text-black transition-colors duration-300 text-[16px] leading-none">→</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                </Link>

                {/* 전처리 파이프라인 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>전처리 파이프라인</SectionLabel>
                    <div className="grid grid-cols-3 gap-px bg-white/15">
                        {pipeline.map((p, i) => (
                            <div key={i} className="bg-black px-6 py-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-white/30 text-[11px] tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-white text-[14px] font-medium tracking-tight">{p.label}</span>
                                </div>
                                <p className="text-white/70 text-[13px] leading-[1.8] whitespace-pre-line">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 지형 형상 생성 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>지형 형상 생성</SectionLabel>
                    <div className="flex flex-col mb-10">
                        {terrainSteps.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10">
                                <span className="text-white/30 text-[11px] tracking-widest w-6 pt-[3px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-white text-[15px] leading-[1.8]">{s}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="relative w-full h-[300px] overflow-hidden border border-white/10">
                            <Image src="/GIS/등고선.png" alt="Contour lines" fill className="object-cover" />
                            <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Contour lines and grid point examples using QGIS</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative w-full h-[200px] overflow-hidden border border-white/10">
                                <Image src="/GIS/지표면-1024x376.webp" alt="Surface shapes" fill className="object-cover" />
                                <span className="absolute bottom-3 left-3 text-white/50 text-[11px] tracking-[0.15em] uppercase">Surface shapes</span>
                            </div>
                            <div className="relative w-full h-[200px] overflow-hidden border border-white/10">
                                <Image src="/GIS/pre-1024x715.webp" alt="Shape generation program" fill className="object-cover" />
                                <span className="absolute bottom-3 left-3 text-white/50 text-[11px] tracking-[0.15em] uppercase">Shape generation program</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 건물 형상 만들기 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>건물 형상 만들기</SectionLabel>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        수치지형도에서 건물의 평면 데이터를 가져와서 3D 형상을 만들고,
                        건물의 메타데이터를 사용하여 건물 정보를 확인합니다.
                    </p>
                    <div className="flex flex-col mb-10">
                        {buildingSteps.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10">
                                <span className="text-white/30 text-[11px] tracking-widest w-6 pt-[3px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-white text-[15px] leading-[1.8]">{s}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="relative w-full h-[360px] overflow-hidden border border-white/10">
                            <Image src="/GIS/건물.png" alt="Case study Dongtan Tunnel" fill className="object-cover" />
                            <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Case study — Dongtan Tunnel, 4×4 km</span>
                        </div>
                        <div className="relative w-full h-[220px] overflow-hidden border border-white/10">
                            <Image src="/GIS/meta-1.png" alt="Building metadata" fill className="object-cover" />
                            <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Building metadata</span>
                        </div>
                    </div>
                </div>

                {/* 추가 구조물 생성 */}
                <div className="border-t border-white/20 pt-14 mb-16">
                    <SectionLabel>추가 구조물 생성</SectionLabel>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        디지털 지형도에 미포함된 탱크, 대형 파이프 등 대형 구조물 모델과
                        오염 물질 누출원의 기하학적 모델을 추가할 수 있습니다.
                        구, 원통, 정육면체, 파이프 등의 모델 생성이 가능합니다.
                    </p>
                    <div className="relative w-full h-[340px] overflow-hidden border border-white/10">
                        <Image src="/GIS/추가.png" alt="Additional structures" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Additional structures</span>
                    </div>
                </div>

                {/* 격자 생성 */}
                <div className="border-t border-white/20 pt-14">
                    <SectionLabel>격자 생성</SectionLabel>
                    <p className="text-white/80 text-[16px] leading-[1.9] mb-8">
                        OpenFOAM의 blockMesh 유틸리티로 전체 계산 영역을 육면체 격자로 구성합니다.
                        SnappyHexMesh를 사용하여 지형과 구조물을 포함한 3차원 격자를
                        최소한의 사용자 입력으로 자동 생성합니다.
                    </p>
                    <div className="relative w-full h-[340px] overflow-hidden border border-white/10">
                        <Image src="/GIS/격자.png" alt="3D mesh generation" fill className="object-cover" />
                        <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">3D mesh generation</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
