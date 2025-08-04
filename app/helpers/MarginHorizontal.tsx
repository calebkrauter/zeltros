import { ReactNode } from "react";
type MarginX = "mx-10" | "mx-5" | "mx-2.5"
interface MarginHorizontalProps {
    children: ReactNode;
    m?: MarginX;
}

export default function MarginHorizontal({children, m = "mx-5"}: MarginHorizontalProps) {
    return (
        <div className={`flex justify-center ${m} w-full`}>
            {children}
        </div>
    )
}