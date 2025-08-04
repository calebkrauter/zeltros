import { ReactNode } from "react";
import MarginHorizontal from "../helpers/MarginHorizontal";

interface SliderWrapper {
    children: ReactNode;
}
export default function SliderWrapper({children}: SliderWrapper) {
    return (
        <div className="mb-5 flex w-full">
            <MarginHorizontal>
                <div className="flex justify-center items-center w-full h-[30px] bg-gray-100 rounded-lg">
                    <div className="flex flex-row w-full h-full justify-center items-center">
                        {children}
                    </div>
                </div>
            </MarginHorizontal>
        </div>
    )
}