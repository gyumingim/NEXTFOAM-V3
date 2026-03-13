"use client"
import {
    PageLayout, SectionLabel, CtaButton,
    PageHero, ProductImage, BodyText,
    FeatureList, KeyValueTable, BulletPanel,
} from "@/shared/ui/page";
import Image from "next/image";

export default function FamusPage() {
    const features = [
        "압축성 simulation solver",
        "CAD clean up",
        "자동 질점계 생성",
        "6 DoF 이동물체 해석",
        "평형/비평형 플라즈마 해석",
    ];

    const numerics = [
        { label: "Solver", value: "Meshless CFD Solver" },
        { label: "기법", value: "Geometric Conservation Least Squares Method (GC-LSM)" },
        { label: "수치기법", value: "AUSMPW+, LU-SGS, Dual time stepping" },
        { label: "공간정확도", value: "3차 MLP3 — 초음속 충격파 해석" },
        { label: "전처리", value: "CAD clean up, 표면격자 (Netgen)" },
    ];

    const cadFormats = ["IGES", "STL", "STEP", "NASTRAN"];

    const formatItems = [
        "Netgen을 이용한 표면 형상 구현",
        "NASTRAN 포맷 import",
        "3차원 질점 자동 생성",
    ];

    const motionFeatures = [
        "6DoF 운동 해석",
        "외력 작용 물체 / 추진 물체 해석",
        "강제 운동(Prescribed motion) 입력",
        "이동물체 궤적 및 자세각 출력",
    ];

    const validationCases = [
        { title: "EGLIN 외장 분리 문제", desc: "분리체 다물체 해석", img: "/famus/famus3.jpg" },
        { title: "Sparrow III 미사일", desc: "초음속 유동", img: "/famus/famus4.webp" },
        { title: "Sparrow III 미사일", desc: "초음속 유동", img: "/famus/famus5.jpg" },
    ];

    return (
        <PageLayout>

            {/* Hero */}
            <PageHero title="FAMUS" subtitle="Fully Automated Multi-physics Simulator" />

            {/* 메인 이미지 */}
            <ProductImage src="/famus/famus1.jpg" alt="FAMUS simulation" height={500} />

            {/* 제품 소개 */}
            <div className="flex flex-col gap-5 mb-14">
                <BodyText>
                    FAMUS는 무격자 계산 기법을 사용하여 공간 격자 생성이 필요 없는 압축성 CFD 해석 프로그램입니다.
                    국방과학연구소의 압축성 무격자 기술을 이전 받아 넥스트폼과 서울대 극초음속연구실에서 공동 개발하였습니다.
                </BodyText>

            
                <BodyText>
                    FAMUS는 공간상에 분포된 질점만을 사용하여 유한체적법과 유사한 방법으로 계산하기 때문에 입자를 라그랑지안 기법으로 계산하거나 Lattice Boltzmann Method 를 사용하는 기존 프로그램과는 완전히 다릅니다.
                    FAMUS는 기존 무격자 기법의 한계인 비보존성을 FVM 수준으로 개선한 GC-LSM 기법을 사용하여 정확성을 확보하였습니다. AUSMPW+, 3차 공간 정확도의 MLP3 사용을 통해 충격파에서 수치적 불안정성을극복했고 초음속 영역에서도 고차 정확도의 유동 해석이 가능합니다.
                </BodyText>

                <ProductImage src="/famus/famus2.jpg" alt="FAMUS simulation result" height={400} className="mb-14 border-white/20 mt-14" />

                <BodyText>
                    공간격자 없이 질점만을 이용하기 때문에 기존 격자 기법 방법에서 발생하는 과도한 전처리 작업시간을 줄일 수 있으며 격자 상태에 의한 솔버의 불안정성 및 해의 부정확성에 관한 문제가 없습니다. 또한 물체의 복잡한 운동, 다물체간 상대운동, 물체의 변형 등을 격자의 재생성 없이 쉽게 구현할 수 있는 획기적인 방법입니다.
                </BodyText>

                <ProductImage src="/famus/famus3.jpg" alt="FAMUS simulation result" height={400} className="mb-14 border-white/20 mt-14" />
                
                <BodyText>
                    또한, 압축성 유동 뿐 아니라 플라즈마 현상을 해석할 수 있는 다물리 해석 프로그램입니다. NASA Glenn Research Center의 CEA(Chemical Equilibrium with Application)를 활용하여 2000종 이상의 기체에 대해 평형 상태 물성치 테이블을 구현할 수 있습니다.
                </BodyText>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-14 items-center">
                <div className="border border-white/60">
                    <div className="px-6 py-4 border-b border-white/60">
                        <span className="text-white/80 text-[11px] tracking-[0.2em] uppercase">FAMUS의 기능</span>
                    </div>
                    {features.map((item, i) => (
                        <div key={i} className="flex items-center gap-5 px-6 py-4 border-b border-white/60 last:border-b-0">
                            <span className="text-white/60 text-[12px] font-mono w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-white text-[15px]">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="relative w-full aspect-video border border-white/20 overflow-hidden">
                    <Image
                        src="/famus/famus4.webp"
                        alt="FAMUS software screenshot"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* 수치해석 기법 / CAD clean up / 이동물체 해석 */}
            <div className="grid grid-cols-3 gap-px bg-white/25 border border-white/25 mb-14">
                <BulletPanel
                    title="수치해석 기법"
                    items={[
                        "Meshless CFD solver",
                        "Geometric Conservation Least Squares Method",
                        "AUSMPW+, LU-SGS, Dual time stepping",
                    ]}
                />
                <BulletPanel
                    title="CAD clean up, 표면격자"
                    tags={["IGES", "STL", "STEP"]}
                    items={[
                        "Netgen 을 이용한 표면 형상 구현",
                        "NASTRAN 포맷 import",
                        "3차원 질점 자동 생성",
                    ]}
                />
                <BulletPanel
                    title="이동물체 해석"
                    items={[
                        "6DoF 운동 해석",
                        "외력 작용 물체 / 추진 물체 해석",
                        "강제 운동(Prescribed motion) 입력",
                        "이동물체 궤적 및 자세각 출력",
                    ]}
                />
            </div>

            <CtaButton href="/contact" variant="blue">도입 문의하기</CtaButton>

        </PageLayout>
    );
}
