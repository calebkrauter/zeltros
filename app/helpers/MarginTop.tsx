type MarginT = "mt-5" | "mt-2.5"

interface MarginTopProps {
    m?: MarginT;
}
export default function MarginTop({m = "mt-5"}: MarginTopProps) {
    return (
        <div className={m}></div>
    )
}