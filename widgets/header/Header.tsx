export const Header = () => {
    return (
        <header className="flex w-full bg-black text-white justify-between items-center py-[0.875rem] px-[1rem] fixed z-10000">
            <span className="text-[1.5rem]">
                NEXTFOAM
            </span>
            <span className="">
                <span className="ml-[2rem]">ABOUT</span>
                <span className="ml-[2rem]">PRODUCT</span>
                <span className="ml-[2rem]">CONSULT</span>
                <span className="ml-[2rem]">EDUCAITON</span>
                <span className="ml-[2rem]">DOCS</span>
                <span className="ml-[2rem]">COMMUNITY</span>

                <span className="ml-[2rem] bg-white text-black">CONTACT US</span>
            </span>
        </header>
    )
}