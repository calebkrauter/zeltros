import { ReactNode } from "react";
import MarginVertical from "../helpers/MarginVertical";
import MarginHorizontal from "../helpers/MarginHorizontal";

interface MediaWrapperProps {
    children: ReactNode;
}

export default function MediaWrapper({children}: MediaWrapperProps ) {
    return (
        <MarginVertical>
            <MarginHorizontal m="mx-10">

                <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 rounded-lg">
                    {children}
                </div>
            </MarginHorizontal>
        </MarginVertical>
    )
}