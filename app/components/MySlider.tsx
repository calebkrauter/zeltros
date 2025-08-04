import { Slider, SliderProps } from "@mui/material";
import MarginHorizontal from "../helpers/MarginHorizontal";

export default function MySlider({...props}: SliderProps) {
    return (
        <MarginHorizontal>
            <Slider {...props} sx={{
                color: '#5DA6B3', // bar and thumb color
                height: 5,
                '& .MuiSlider-thumb': {
                width: 16,
                height: 16,
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E3E3',
                },
                '& .MuiSlider-track': {
                border: 'none',
                },
                '& .MuiSlider-rail': {
                opacity: 0.3,
                backgroundColor: '#999',
                },
            }}/>
       </MarginHorizontal>
    )
}