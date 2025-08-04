import { SliderProps } from "@mui/material/Slider";
import MarginRight from "../helpers/MarginRight";
import SongTime from "./SongTime";
import SliderWrapper from "../wrappers/SliderWrapper";
import MySlider from "./MySlider";

interface SeekerProps extends SliderProps {
    time: number;
}

export default function Seeker ({time, ...props}: SeekerProps) {
    return (
        <SliderWrapper>
            <MySlider {...props}/>
            <SongTime time={time}/>
            <MarginRight/>
        </SliderWrapper>



    )
}