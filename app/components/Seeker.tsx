import Slider, { SliderProps } from "@mui/material/Slider";
import MarginHorizontal from "../helpers/MarginHorizontal";

interface SeekerProps extends SliderProps {
    
}

export default function Seeker ({...props}: SeekerProps) {
    return (
        <div className="flex w-full">
            <MarginHorizontal>
                <div className="flex justify-center items-center w-full bg-gray-100 rounded-lg">
                    <MarginHorizontal>
                        <Slider {...props}/>
                    </MarginHorizontal>
                </div>
            </MarginHorizontal>
        </div>

    )
}