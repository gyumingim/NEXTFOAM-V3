import Image from "next/image";

interface ProductImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export const ProductImage = ({ src, alt, width = 800, height = 500, className = "mb-14" }: ProductImageProps) => (
    <div className={`relative w-full overflow-hidden border border-white/15 ${className}`}>
        <Image src={src} alt={alt} className="w-full h-auto object-cover" width={width} height={height} />
    </div>
);
