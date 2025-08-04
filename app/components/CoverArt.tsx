import Image, { ImageProps } from "next/image";
import MarginVertical from "../helpers/MarginVertical";

interface CoverArtProps extends ImageProps {
    w?: number;
    h?: number;
}
export default function CoverArt({w = 300, h = 300, ...props}: CoverArtProps) {
    return (
        <MarginVertical>
            <div className={`bg-red-300 rounded-lg items-center w-[${w}px] sm:w-[${w}px] h-[${h}px] sm:h-[${h}px]`}>
                <Image className={`inset-0`} {...props}/>
            </div>
        </MarginVertical>
    )
}