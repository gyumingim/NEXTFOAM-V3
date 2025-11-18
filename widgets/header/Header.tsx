export const Header = () => {
    return (
        <header className="flex w-full bg-black text-white justify-between items-center py-[0.75rem] px-[1rem] fixed z-10000">
            <span className="text-[1.25rem] font-[500]">
                NEXTFOAM
            </span>
            <span className="flex items-center">
                <span className="ml-[2rem] text-[.875rem]">ABOUT</span>
                <span className="ml-[2rem] text-[.875rem]">PRODUCT</span>
                <span className="ml-[2rem] text-[.875rem]">CONSULT</span>
                <span className="ml-[2rem] text-[.875rem]">EDUCAITON</span>
                <span className="ml-[2rem] text-[.875rem]">DOCS</span>
                <span className="ml-[2rem] text-[.875rem]">COMMUNITY</span>

                <span className="ml-[2rem] leading-[1rem] text-[.875rem] bg-white text-black">CONTACT US</span>
            </span>
        </header>
    )
}