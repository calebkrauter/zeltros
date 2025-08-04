'use client'
import { Button } from "@heroui/button";
import { ReactNode } from "react";

interface VolumeButtonProps {
    onPress: () => void;
    children?: ReactNode;
}
export default function VolumeButton({onPress, children}: VolumeButtonProps) {
    return (
        <Button className={`flex justify-center items-center mt-5 mb-5 relative w-[30px] h-[24px] rounded-lg text-black bg-red-300`} onPress={onPress}>
            {children}
        </Button>

    )
}