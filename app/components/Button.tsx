'use client'
import { Button } from "@heroui/button";
import MarginVertical from "../helpers/MarginVertical";
import MarginTop from "../helpers/MarginTop";

interface ButtonProps {
    text?: string;
    onPress: () => void;
    playing?: boolean;
    toggle?: boolean;
}
export default function MyButton({text, onPress, playing, toggle}: ButtonProps) {
    return (
            <Button className={`mt-5 relative w-[75px] sm:w-[100px] h-[30px] rounded-lg text-black ${toggle ? "bg-orange-300" : "bg-red-300"}`} onPress={onPress}>
                {text}
                {!text && playing && ("||")}
                {!text && !playing && ("I>")}
            </Button>

    )
}