"use client"
import { PageLayout, SectionLabel, CtaButton, PageHero, BodyText } from "@/shared/ui/page";
import Image from "next/image";

const steps = [
    { num: "01", title: "실험계획법 기반 해석점 샘플링", desc: "마하수, 받음각, 옆미끄럼각, 핀의 변위각도 등의 샘플링 변수를 결정하고 전체 설계 공간에 해석점이 고르게 분포하도록 샘플링합니다. Latin Hypercube, Random 등 다양한 방법을 사용할 수 있습니다.", img: "/db/db3.png" },
    { num: "02", title: "배치 작업을 통한 CFD 유동 해석", desc: "샘플점들에 대한 해석 케이스를 자동으로 생성합니다. 배치 작업을 통해 유동해석을 수행하고 각 요소별 관찰 값을 도출합니다. CFD 코드는 FAMUS(무격자)와 OpenFOAM(BARAM)을 사용할 수 있습니다.", img: "/db/db4.png" },
    { num: "03", title: "Surrogate model 구축 및 신뢰성 평가", desc: "계산된 결과 데이터들을 이용해서 Surrogate model을 구축합니다. 수렴성 평가, 특이점 필터링, 최종 정확도 평가를 통해 DB 모델을 도출합니다.", img: "/db/db5.png" },
    { num: "04", title: "공력 DB 구성 및 후처리", desc: "공력 DB 구성안을 도출하여 대체 모델의 정확성과 효율성을 확보합니다. 랜덤 샘플링 기반 민감도 분석과 파라메트릭 스터디를 수행하며, 아음속·천음속·초음속 구간으로 DB 모델을 구획화합니다.", img: "/db/db6.png" },
];

const uiFeatures = [
    { label: "메인 화면", desc: "인풋 편집 버튼, 실행 버튼, 출력창" },
    { label: "DoE Sampling", desc: "실험 파라미터 구속조건 및 입력" },
    { label: "Numerical Analysis", desc: "FAMUS/BARAM batch run 패키지 생성" },
    { label: "Surrogate Model", desc: "크리깅 방법으로 대체 모델 생성" },
    { label: "Post-processing", desc: "공력 계수 예측, 반응표면, 교차 검증" },
];

const dbDetails = [
    "공력 DB 구획화 : 아음속, 천음속, 초음속 구간으로 DB 모델 구성",
    "샘플점 개수 변화 : 개수를 증가시키며 적정 개수 도출",
    "Outlier 필터링 : 교차 검증 결과에서 outlier 판별 및 필터링",
    "DoE 샘플링 파라미터 범위 조절로 균일한 샘플점 분포 확보",
    "크리깅 모델 생성 및 교차 검증을 통한 CFD 해석 값 비교",
];

export default function AeroDbPage() {
    return (
        <PageLayout>

            {/* Hero */}
            <PageHero title="공력 DB 구축 프레임워크" subtitle="Aerodynamic force Database Framework" />
            <div className="flex flex-col gap-5 mb-12">
                <div className="w-full border border-white/10">
                    <Image src="/db/db.png" alt="공력 DB 프레임워크 개요" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <BodyText>
                    항공기, 유도무기, 드론, UAM, 잠수함, 어뢰 등 다양한 이동체의 개발 과정에서 고정밀도 유체력 데이터베이스는 필수적입니다. 그러나 풍동시험에 의한 데이터 획득은 매우 제한적이며, CFD 역시 방대한 계산량 때문에 활용에 어려움이 있습니다.
                    <br/><br/>
                    본 제품은 대체 모델 기반의 공력 데이터베이스 구축 자동화 프레임워크입니다. 마하수, 받음각, 옆미끄럼각, 핀의 변위각도에 따른 공력 DB를 구축할 수 있습니다.
                    <br/><br/>
                    · 대체 모델(Surrogate model) 기법의 필요성
                    <br/><br/>
                    다양한 조건에서 설계 변수가 증가하게 될 경우 고 신뢰도의 full factorial 실험이나 계산은 사실상 불가능합니다. 따라서 대체 모델 기법은 적은 비용(시간 및 자원)으로 실제 모델의 반응을 모델링함으로써 실제 모델을 대체할 수 있는 방법입니다. 공력 DB 구축 시 (1)구축에 필요한 비용을 크게 줄일 수 있고, (2)실험점 외의 연속적인 모든 조합의 조건에 대해서도 공력 특성을 도출하는데 활용될 수 있습니다.
                    <br/><br/>
                    · 자동화 프레임워크의 필요성
                    <br/><br/>
                    대체 모델 구축에서는 DoE(Design of Experiment) 기반 해석점 선정, 유동해석, 대체 모델 생성 및 검증의 여러 층위의 작업이 필요합니다. 상호 이질적인 작업들을 하나의 프레임워크로 통합하여 작업의 효율성과 확장성을 갖는 것이 필요합니다. 추출된 다수의 해석점에 대한 해석 시 CFD 설정 작업의 효율화가 필수적이며, 자동화 기술을 통해 다양한 설계변수를 변화시켜가며 계산의 효율성 제고할 수 있습니다.
                    <br/><br/>
                    마하수, 받음각, 옆미끄럼각, 핀의 변위각도에 따른 공력 DB를 구축할 수 있는 프레임워크입니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db2.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    프레임워크는 (1) 실험계획법 기반 해석 조건 샘플링, (2) CFD를 이용한 유동해석, (3) 대체 모델 기반 데이터베이스 구축, (4) 후처리의 순서로 진행됩니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db3.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    마하수, 받음각, 옆미끄럼각, 핀의 변위각도 등의 샘플링 변수를 먼저 결정합니다. 각 변수의 범위 및 속성을 결정하고, 전체 설계 공간에 해석점이 고르게 분포하도록 샘플링합니다.

                    Latin Hypercude, Random 등의 다양한 방법을 사용할 수 있습니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db4.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    샘플점들에 대한 해석 케이스를 자동으로 생성합니다. 배치 작업을 통해 유동해석을 수행하고 각 요소별 관찰 값을 도출합니다.

                    CFD 해석 코드는 무격자(meshless) 코드인 FAMUS와 공개소스 코드인 OpenFOAM(BARAM)을 사용할 수 있습니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db5.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    계산된 결과 데이터들을 이용해서 Surrogate model을 구축합니다. Surrogate model의 수렴성을 평가하고 특이점 필터링, 최종 정확도 평가를 통해 DB 모델을 도출합니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db5.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    공력 DB 구성안을 도출하여 대체 모델의 정확성과 효율성을 확보합니다. 전체 설계 공간에 대한 민감도 분석을 위해 랜덤 샘플링 기반 민감도 분석과 파라메트릭 스터디를 수행합니다. 각 설계 변수의 영향성에 대한 상대 평가, 설계 변수에 따른 공력계수 변화 양상을 확인합니다.
                    <br/><br/>
                    공력 DB 구획화 : 아음속, 천음속, 초음속 구간으로 나누어 DB 모델을 구성하고, 경계에서의 overlap 개수를 조정합니다.
                    <br/>
                    샘플점 개수 변화 : 개수를 증가시키면서 적정 개수를 도출합니다.
                    <br/>
                    Outlier 필터링 : 교차 검증 결과에서 outlier를 판별하여 필터링합니다.
                    <br/>
                    균일한 샘플점 분포를 위해 DoE 샘플링 파라미터 범위를 조절합니다.
                    <br/>
                    크리깅 모델을 생성하고 검증합니다. 교차 검증을 통해 크리깅 예측 값과 CFD 해석 값을 비교합니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db6.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db7.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    프레임워크의 동작은 (1)샘플링, (2)시뮬레이션, (3)대체 모델 생성, (4)후처리 및 신뢰성 평가의 순서로 진행됩니다.
                </BodyText>
            </div>

            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db8.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    프레임워크의 구성
                    메인 화면 : 인풋 편집 버튼, 실행 버튼, 출력창으로 구성
                    DoE Sampling : 실험 파라미터 구속조건, 실험 파라미터 입력
                    Numerical analysis : bash 스크립트, FAMUS/Baram input을 통한 batch run 패키지 생성
                    Surrogate model : 대체 모델 파라미터, 학습 데이터 편집 및 크리깅 방법으로 대체 모델 생성
                    Post-processing : 공력 계수 예측, 반응표면 생성, 교차 검증
                </BodyText>
            </div>

            
            <div className="flex flex-col gap-2 mb-14">
                <div className="relative w-full h-[500px] overflow-hidden border border-white/10">
                    <Image src="/db/db9.png" alt="프레임워크 흐름도" fill className="object-cover" />
                    <span className="absolute bottom-3 left-4 text-white/50 text-[11px] tracking-[0.15em] uppercase">Framework Flowchart</span>
                </div>
            </div>


            <CtaButton href="/contact" variant="blue">for more information, contact us</CtaButton>

          
        </PageLayout>
    );
}
