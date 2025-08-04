import { Button as HeroButton } from "@heroui/button";

interface ButtonProps {
    text?: string;
    onPress: () => void;
    playing?: boolean;
    toggle?: boolean;
}
export default function Button({text, onPress, playing, toggle}: ButtonProps) {
    return (
        <HeroButton className={`w-[100px] h-[30px] rounded-lg text-black ${toggle ? "bg-orange-300" : "bg-red-300"}`} onPress={onPress}>
            {text}
            {!text && playing && ("||")}
            {!text && !playing && ("I>")}
        </HeroButton>
    )
}