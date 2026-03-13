"use client"
import { PageLayout, SectionLabel, CtaButton, PageHero, BodyText } from "@/shared/ui/page";
import Image from "next/image";

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
        <PageLayout>

            {/* Hero */}
            <PageHero title="BaramGIS" subtitle="수치지형도를 이용한 CFD 전처리 자동화 프로그램" />

            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/main-3.webp" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>

             <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    전산유체역학(CFD)을 이용하여 풍환경이나 오염물 확산을 분석하기 위해, 수치지형도를 이용하여 형상과 격자를 생성하는 전처리 프로그램입니다. 모두 오픈소스 소프트웨어를 이용합니다.
                    <br/><br/>
                    전처리 과정은 지형 및 건물 정보를 불러오고, 3차원 형상을 만들고, 격자를 구성하는 단계로 구성됩니다.
                    <br/><br/>
                    형상 정보 : 국토지리정보원에서 API 형식으로 제공하는 수치지형도는 지리 정보 시스템(GIS)의 표준 형식을 따릅니다. 오픈소스 QGIS 프로그램용 Python 라이브러리인 OsGeo는 GIS 형식 데이터에서 기하 정보를 추출하고 처리하는 데 사용됩니다.
                    형상 생성 및 처리 : 형상에 대한 3차원 데이터를 불러오고, 형상 간의 boolean 연산을 수행하고, 형상을 격자 생성 프로그램으로 내보내는 기능이 포함됩니다.
                    격자 생성 : 격자는 오픈 소스 프로그램 OpenFOAM의 격자 생성 유틸리티인 snappyHexMesh를 사용하여 생성됩니다.
                    지형 형상 생성
                    수치지형도에서 3차원 표면 격자를 생성하기 위해 다음 단계를 수행합니다.
                    <br/><br/>
                    등고선 데이터 불러오기
                    국립지리정보원에서 제공하는 연속적인 디지털 지형도를 사용합니다.
                    F10000.shp 파일을 읽어 정보를 얻습니다.
                    OsGeo를 사용하여 Python 객체로 변환합니다.
                    정보 포인트 추출
                    수치지형도에서 다중 라인 문자열 형태로 저장된 등고선 점의 위치 및 높이 값을 추출합니다.
                    선형 보간을 이용한 높이 계산
                    추출된 점을 사용하여 전체 지형을 나타내는 새로운 점을 정의합니다.
                    새로운 점은 사용자가 임의로 설정한 간격으로 x, y 방향으로 정렬된 격자 형태로 생성됩니다.
                    새로 생성된 격자점의 높이 값은 주변 윤곽점으로부터 2차원 선형 보간을 통해 계산됩니다.
                    높이 보정
                    가장 낮은 고도의 z좌표가 0이 되도록 이동합니다.
                    지형의 끝이 경계에 도달하기 전에 z 값이 점차 감소하도록 지형을 이동합니다.
                    표면 격자 만들기
                    vtk 라이브러리(STL 또는 OBJ 형식)를 사용하여 점들을 표면 격자로 변환합니다.
                    추가 보정
                    미래에 예정된 디지털 지형도나 토목 공사에 반영되지 않은 최신 변경 사항을 포함합니다.
                </BodyText>
            </div>

            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/등고선.png" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>
            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/지표면-1024x376.webp" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>
            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/pre-1024x715.webp" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    건물 형상 만들기
                    수치지형도에서 건물의 평면 데이터를 가져와서 3D 형상을 만들고, 건물의 메타데이터를 사용하여 건물 정보를 확인합니다.

                    다음 단계를 거쳐 진행됩니다.

                    건물 평면도 가져오기 – 연속 디지털 지형도의 B0010000.shp 파일에서 건물 정보를 Python 객체로 변환합니다.
                    건물 층 정보를 추출합니다.
                    건물의 평면도를 나타내는 표면 데이터를 추출합니다.
                    각 지점의 좌표를 추출합니다.
                    OpenCaseCade 라이브러리를 사용하여 점, 선, 표면을 만듭니다.
                    표면을 특정 높이까지 끌어 당겨 3차원 모양을 만듭니다.
                </BodyText>
            </div>

            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/건물.png" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>
            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/meta-1.png" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>
            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    디지털 지형도에는 포함되지 않지만 모델링에 필요한 탱크나 대형 파이프와 같은 대형 구조물 모델과 오염 물질 누출원의 기하학적 모델을 추가할 수 있습니다. 구, 원통, 정육면체, 파이프 등의 모델을 생성할 수 있습니다.
                </BodyText>
            </div>

            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/추가.png" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>

            <div className="flex flex-col gap-5 mb-12">
                <BodyText>
                    전체 계산 영역은 오픈 소스 프로그램 OpenFOAM의 blockMesh 유틸리티를 사용하여 육면체 격자로 구성됩니다.

                    SnappyHexMesh(OpenFOAM의 격자 생성 유틸리티)를 사용하여 지형과 구조물을 포함한 3차원 격자를 최소한의 사용자 입력으로 자동 생성합니다.
                </BodyText>
            </div>

            <div className="relative w-full h-[460px] overflow-hidden border border-white/10 mb-14">
                <Image src="/GIS/격자.png" alt="BaramGIS" fill className="object-cover" />
                <div className="absolute inset-0" />
            </div>
            <CtaButton href="/contact" variant="blue">for more information, contact us</CtaButton>
        </PageLayout>
    );
}
