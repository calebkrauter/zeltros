import { ReactNode } from "react";
import MarginHorizontal from "../helpers/MarginHorizontal";

interface MediaButtonWrapperProps {
    children: ReactNode;
}

export default function MediaButtonWrapper({children}: MediaButtonWrapperProps ) {
    return (
        <MarginHorizontal>
            <div className="flex flex-row justify-center gap-5">
                {children}
            </div>
        </MarginHorizontal>
    )
}