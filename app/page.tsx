'use client'
import Image from "next/image";
import {Howl, Howler} from 'howler';
import { useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import Button from "./components/Button";
import { i } from "framer-motion/client";
export default function Home() {

  const sound = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [looping, setLooping] = useState(false)
const [justStarted, setJustStarted] = useState(false);
const startMusic = () => {
    if (!sound.current) {
      sound.current = new Howl({
        src: ['/the-bell.mp3'],
        loop: looping,
        volume: 0.5,
      });
      sound.current.play();
    } else if (!sound.current.playing()) {
      sound.current.play();
    }
    setPlaying(sound.current?.playing())
    setJustStarted(true);
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
    if (sound.current) {
      setProgress(sound.current.seek());
      setPlaying(sound.current?.playing());
    }
  }, 100)
  return () => clearInterval(interval);
}, [sound.current]);

// Debugging:
useEffect(() => {
  console.log(looping)
},[looping])

  const [seeking, setSeeking] = useState(false);
  const handleSeek = (_e: Event, value: number | number[]) => {
    pause();
    if (typeof value === 'number' && sound.current) {
      setSeeking(true);
      sound.current.seek(value);
      setProgress(value);
    }

  };

  

  const handleLooping = () => {
    if (sound.current) {
      toggleLooping();
    } else if (!justStarted) {
      setLooping(!looping);
    }

  }

  const toggleLooping = () => {
    if (sound.current) {
      let invertLooping: boolean;
      if (justStarted) {
        invertLooping = looping;
        setJustStarted(false);
      } else {
        invertLooping = !sound.current.loop();
      }
      sound.current.loop(invertLooping)
      setLooping(invertLooping)
    }
  }
return (
     <div>
       <nav className="fixed flex justify-center items-center h-20 w-full bg-gray-900/30 backdrop-blur-xl border-b-1 border-gray-500 rounded-b-xl">
        <div className="font-semibold text-3xl">
                 CALEB KRAUTER
        </div>
        
       </nav>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex items-center justify-center w-full flex-col gap-[32px] row-start-2">
            
          <div className="flex flex-col w-[400px] sm:w-[500px] h-[500px] bg-amber-50 justify-center items-center rounded-lg">

            <div className="bg-red-300 rounded-lg mb-10">
              <Image className="w-[300px] sm:w-[300px]" src={"/mountains.svg"} alt="mountains" width={300} height={300}></Image>

            </div>

            <div className="flex items-center justify-center w-[300px] sm:w-[475px] h-[100px] bg-gray-200 rounded-lg">
              <div>
                <div className="flex flex-row justify-center gap-5">
                

                <Button onPress={toggleMusic} playing={playing}/>
                <Button text="STOP" onPress={terminate}/>
                <Button text="Loop" onPress={handleLooping} toggle={looping}/>

              </div>

              <div className="my-3"></div>

                <div className="flex justify-center items-center w-full sm:w-[425px] bg-gray-100 rounded-lg">
                  <div className="flex justify-center items-center w-[175px] sm:w-[375px]">
                    <Slider defaultValue={0} max={sound.current?.duration() as number} step={0.01} value={progress} onChange={handleSeek} onChangeCommitted={() => {
                      if (!playing) {
                        toggleMusic()
                      }
                    }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
     </div>
  );
}
