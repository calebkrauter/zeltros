import { ReactNode } from "react";
type MarginR = "mr-10" | "mr-5" | "mr-2.5"
interface MarginRightProps {
    children?: ReactNode;
    m?: MarginR;
}

export default function MarginRight({children, m = "mr-5"}: MarginRightProps) {
    return (
        <div className={`flex justify-center ${m}`}>
            {children}
        </div>
    )
}