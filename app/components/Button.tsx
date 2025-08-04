import { Button as HeroButton } from "@heroui/button";

interface ButtonProps {
    text: string;
    onPress: () => void;
}
export default function Button({text, onPress}: ButtonProps) {
    return (
        <HeroButton className="w-[100px] bg-violet-800 h-[30px] rounded-lg border-2 border-gray-500" onPress={onPress}>
            {text}
        </HeroButton>
    )
}