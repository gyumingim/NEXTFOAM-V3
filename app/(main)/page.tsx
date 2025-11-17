import { Header } from "@/widgets/header/Header";
import Image from "next/image";
import space from "@/public/space.png"

export default function Home() {
  return (
    <div className="w-full h-full">
        <Header/>
        <HeroPage/>
        <DescriptionPage/>
    </div>
  );
}

const HeroPage = () => {
    return (
        <div className="w-full h-[100vh] overflow-hidden">
            <Image src={space} alt="null" className="overflow-hidden"/>
            <div className="absolute bottom-0 left-0 text-white text-[4rem]">
                Opening <br/>
                next-generation <br/>
                CFD simulation
            </div>
        </div>
    )
}

const DescriptionPage = () =>{
    return (
        <div className="w-full h-[100vh]">

        </div>
    )
}