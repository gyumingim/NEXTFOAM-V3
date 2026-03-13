"use client"
import { Header } from "@/widgets/header/Header";
import { BackToTop } from "@/shared/ui/BackToTop";
import { Footer } from "@/widgets/footer/Footer";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full bg-black transition-colors duration-300">
        <Header />
        <BackToTop />
        <div className="max-w-[850px] mx-auto px-10 pt-40 pb-40">
            {children}
        </div>
        <Footer />
    </div>
);
