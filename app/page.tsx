'use client'
import Image from "next/image";
import {Howl, Howler} from 'howler';
import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import Slider from "@mui/material/Slider";
export default function Home() {

  const sound = useRef<Howl | null>(null);
  const [progress, setProgress] = useState(0);
const startMusic = () => {
    if (!sound.current) {
      sound.current = new Howl({
        src: ['/the-bell.mp3'],
        loop: true,
        volume: 0.5,
      });
      sound.current.play();
    } else if (!sound.current.playing()) {
      sound.current.play();
    }
  };
  const terminate = () => {
    if ( sound.current?.playing()) {
      sound.current.stop();
    }
  }
  const toggleMusic = () => {
    if (sound.current?.playing()) {
      pause();
    } else {
      play()
    }
  }
  const pause = () => {
    if (sound.current && sound.current.playing())  
      sound.current.pause();

  }
  const resume = () => {
    if (sound.current && !sound.current.playing()) {
      sound.current.play();
    }
  }

  const play = () => {
    if (sound.current) {
      resume()
    } else {
      startMusic();
    }
   
  }


useEffect(() => {
  const interval = setInterval(() => {
    if (sound.current?.playing()) {
      const position = sound.current.seek() as number;
      setProgress(position);
    }
  }, 300)
  return () => clearInterval(interval);
}, []);
  const [seeking, setSeeking] = useState(false);
  const handleSeek = (_e: Event, value: number | number[]) => {
    if (typeof value === 'number' && sound.current) {
      setSeeking(true);
      sound.current.seek(value);
      setProgress(value);
    }
  };

return (
     <div>
       <nav className="fixed flex justify-center items-center h-20 w-full bg-gray-900/30 backdrop-blur-xl border-b-1 border-gray-500 rounded-b-xl">
        <div className="font-semibold text-3xl">
                 CALEB KRAUTER
        </div>
        
       </nav>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex items-center w-full flex-col gap-[32px] row-start-2">
            
          <div className="flex flex-col w-[500px] h-[500px]bg-amber-50  items-center">
            <div className="flex flex-row w-[450px]">

              <Button className="bg-red-600 w-full h-full" onPress={play}>
                PLAY
              </Button>
              <Button className="bg-red-600 w-full h-full" onPress={terminate}>
                STOP
              </Button>
              <Button className="bg-red-600 w-full h-full" onPress={pause}>
                PAUSE
              </Button>
              <Button className="bg-red-600 w-full h-full" onPress={toggleMusic}>
                Play / Pause
              </Button>
            </div>
            <Slider defaultValue={0} max={sound.current?.duration() as number} step={0.01} value={progress} onChange={handleSeek} onChangeCommitted={toggleMusic}/>
          </div>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
     </div>
  );
}
