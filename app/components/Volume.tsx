import Slider, { SliderProps } from "@mui/material/Slider";
import MarginHorizontal from "../helpers/MarginHorizontal";
import MarginRight from "../helpers/MarginRight";
import SliderWrapper from "../wrappers/SliderWrapper";



export default function Volume({...props}: SliderProps) {
    return (
        <SliderWrapper>
            <MarginHorizontal>
                <Slider {...props}/>
            </MarginHorizontal>
        </SliderWrapper>
                   
    )
}