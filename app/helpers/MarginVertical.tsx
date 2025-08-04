import { ReactNode } from "react";

type MarginY =  "my-10"| "my-5" | "my-2.5";

interface MarginVerticalProps {
    children?: ReactNode;
    m?: MarginY;
}

export default function MarginVertical({children, m = "my-5"}: MarginVerticalProps) {
    return (
        <div className={`flex justify-center w-full ${m}`}>
            {children}
        </div>
    )
}