
import { SliderProps } from "@mui/material/Slider";
import SliderWrapper from "../wrappers/SliderWrapper";
import MySlider from "./MySlider";



export default function Volume({...props}: SliderProps) {
    return (
        <SliderWrapper>
            <MySlider {...props}/>
        </SliderWrapper>
                   
    )
}