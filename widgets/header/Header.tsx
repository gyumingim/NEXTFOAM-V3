export const Header = () => {
    return (
        <header className="flex w-full bg-black text-white justify-between items-center py-[0.5vw] px-[1vw] fixed z-10000">
            <span className="text-[1.25vw] font-[500]">
                NEXTFOAM
            </span>
            <span className="flex items-center">
                <span className="ml-[1.75vw] text-[.8vw]">ABOUT</span>
                <span className="ml-[1.75vw] text-[.8vw]">PRODUCT</span>
                <span className="ml-[1.75vw] text-[.8vw]">CONSULT</span>
                <span className="ml-[1.75vw] text-[.8vw]">EDUCAITON</span>
                <span className="ml-[1.75vw] text-[.8vw]">DOCS</span>
                <span className="ml-[1.75vw] text-[.8vw]">COMMUNITY</span>

                <span className="ml-[1.75vw] leading-[1vw] text-[.8vw] bg-white text-black">CONTACT US</span>
            </span>
        </header>
    )
}