"use client"
import { toast } from 'sonner';

export const Footer = () => {
    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        toast.success(`${label} 복사됨`);
    };

    const linkClass = "cursor-pointer hover:bg-white hover:text-black px-[0.2vw]";
    const copyClass = "cursor-pointer hover:bg-white hover:text-black px-[0.2vw]";

    return (
        <div className="relative w-full h-[110vh] bg-black flex flex-col justify-between select-none overflow-hidden">
            <div className="mt-[8vw] text-[2.2vw]">
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span
                        className={copyClass}
                        onClick={() => copyToClipboard("서울 금천구 디지털로9길 32 A동 1106호", "주소")}
                    >
                        서울 금천구 디지털로9길 32 A동 1106호
                    </span>
                    <span className="text-white/10"> ASDNVOI IVHOAS </span>
                    <a href="https://github.com/nextfoam/" target="_blank" rel="noopener noreferrer" className={linkClass}>Github</a>
                    <span className="text-white/10"> BJZM </span>
                    <a href="https://blog.naver.com/nextfoam7" target="_blank" rel="noopener noreferrer" className={linkClass}>Naver Blog</a>
                    <span className="text-white/10"> VUIXJNOBIZBWE</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <a href="mailto:marketing@nextfoam.co.kr" className={linkClass}>marketing@nextfoam.co.kr</a>
                    <span className="text-white/10"> ASDVASD K DJSOPV SDA </span>
                    <a href="https://www.youtube.com/channel/UCQbWiBLTnF6JVxOcdUCXoZw" target="_blank" rel="noopener noreferrer" className={linkClass}>Youtube</a>
                    <span className="text-white/10"> ASD </span>
                    <a href="https://baramcfd.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>Baram Portal</a>
                    <span className="text-white/10">SAIND CIASJDS</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span
                        className={copyClass}
                        onClick={() => copyToClipboard("070-8796-3019", "전화번호")}
                    >
                        070-8796-3019
                    </span>
                    <span className="text-white/10"> BIASNUD USDHAJW DK AKSL ASDAI </span>
                    <a href="https://www.linkedin.com/company/nextfoam/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className={linkClass}>Linkedin</a>
                    <span className="text-white/10"> LUX </span>
                    <a href="https://blog.naver.com/nextfoam7" target="_blank" rel="noopener noreferrer" className={linkClass}>Nextfoam Blog</a>
                    <span className="text-white/10"> BNOAJIBXND</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <a href="https://place.map.kakao.com/15865339" target="_blank" rel="noopener noreferrer" className={linkClass}>찾아오는 길</a>
                    <span className="text-white/10"> AGLI PAISD LKQ JSGI ANWJGVB QKSD HGL </span>
                    <a href="https://www.instagram.com/nextfoam/" target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a>
                    <span className="text-white/10"> GHOQL ZLFG PQND SGJAA KJS</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/10">AOBXH QKXGHAOHBN UHDAJ KBFIUASHDA BFGIIAAI </span>
                    <a href="https://www.facebook.com/NEXTFOAM/" target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a>
                    <span className="text-white/10"> ZM OV HGQ JSHGAIBG PPXUSN</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/10">BHOA HQNP BSAUD JZHXGUOIQMZ PQASIFHQEU HZNCM BVHFHASG ZHUFQH WFOUA SHAGM</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <span className="text-white/10">JSIDFJIAJ GZPUJQWNTNSJA HZXUHVKMZ VIHWHASK HDIUHABG UYHIOAYUDNI DQIUA IMLYA</span>
                </div>
                <div className="text-white font-[700] whitespace-nowrap leading-[2.5vw] text-justify">
                    <a href="/privacy-policy" className={linkClass}>Privacy Policy</a>
                    <span className="text-white/10"> NBAIOSH DBQUGASKJG HBA SUN ZKNQKJWHRIUASHGAUSNFUIASG </span>
                    <a href="https://x.com/baramcfd" target="_blank" rel="noopener noreferrer" className={linkClass}>@Nextfoam</a>
                </div>
            </div>
            <div className="text-white text-[clamp(23vw,23vw,23vw)] absolute left-0 bottom-0 leading-[17vw]">
                Nextfoam
            </div>
        </div>
    );
};
