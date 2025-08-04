import Image, { ImageProps } from "next/image";
import MarginVertical from "../helpers/MarginVertical";
import MarginHorizontal from "../helpers/MarginHorizontal";


export default function CoverArt({...props}: ImageProps) {
    return (
        <div className="w-full">
            <MarginVertical>
                <MarginHorizontal m="mx-10">
                    <div className={`bg-red-300 rounded-lg items-center w-full h-full`}>
                        <Image className={`w-full h-full`} {...props}/>
                    </div>
                </MarginHorizontal>
            </MarginVertical>
        </div>
    )
}