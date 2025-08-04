import { ReactNode } from "react";
type MarginL = "ml-10" | "ml-5" | "ml-2.5"
interface MarginLeftProps {
    children?: ReactNode;
    m?: MarginL;
}

export default function MarginLeft({children, m = "ml-5"}: MarginLeftProps) {
    return (
        <div className={`flex justify-center ${m}`}>
            {children}
        </div>
    )
}