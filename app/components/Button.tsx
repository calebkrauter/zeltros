import { Button as HeroButton } from "@heroui/button";

interface ButtonProps {
    text?: string;
    onPress: () => void;
    playing?: boolean;
}
export default function Button({text, onPress, playing}: ButtonProps) {
    return (
        <HeroButton className="w-[100px] bg-violet-800 h-[30px] rounded-lg border-2 border-gray-500 transition-all duration-300" onPress={onPress}>
            {text}
            {!text && playing && ("||")}
            {!text && !playing && ("I>")}
        </HeroButton>
    )
}