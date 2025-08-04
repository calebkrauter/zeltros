type MarginBottom = "mb-5"

interface MarginBottomProps {
    m?: MarginBottom;
}
export default function MarginBottom({m = "mb-5"}: MarginBottomProps) {
    return (
        <div className={m}></div>
    )
}