import { ReactNode } from "react";
import MarginTop from "../helpers/MarginTop";
import MarginBottom from "../helpers/MarginBottom";
import MarginHorizontal from "../helpers/MarginHorizontal";
import MarginVertical from "../helpers/MarginVertical";

interface SongPlayerWrapperProps {
    children: ReactNode;
}
export default function SongPlayerWrapper({children}: SongPlayerWrapperProps) {
    return (
        <div className="flex flex-col bg-amber-50 justify-center items-center rounded-lg">
            <MarginVertical>
                <div className="flex items-center justify-center flex-col">
                    {children}
                </div>
            </MarginVertical>
        </div>
    )
}