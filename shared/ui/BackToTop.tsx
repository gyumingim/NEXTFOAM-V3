"use client"

export const BackToTop = () => {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-[2.5vw] right-[2.5vw] w-[3.2vw] h-[3.2vw] rounded-full border border-white/25 bg-black/70 backdrop-blur-sm flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 hover:bg-black transition-all duration-300 z-[9999] text-[1vw]"
        >
            ↑
        </button>
    );
};
