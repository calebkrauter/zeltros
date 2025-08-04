'use client'
import {Howl} from 'howler';
import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import Seeker from "./components/Seeker";
import CoverArt from './components/CoverArt';
import MediaWrapper from './wrappers/MediaWrapper';
import MediaButtonWrapper from './wrappers/MediaButtonsWrapper';
import Title from './components/Title';
import SongPlayerWrapper from './wrappers/SongPlayerWrapper';
import MarginVertical from './helpers/MarginVertical';
export default function Home() {

  const sound = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [looping, setLooping] = useState(false)
const [justStarted, setJustStarted] = useState(false);
const startMusic = async () => {
    if (!sound.current) {
      sound.current = new Howl({
        src: ['/the-bell.mp3'],
        loop: looping,
        html5: true,
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

  const handleOnChangeCommitted = () => {
    if (!playing) {
      toggleMusic()
    }
  }
return (
     <div className='flex justify-center'>
       <nav className="fixed flex justify-center items-center h-20 w-full bg-gray-900/30 backdrop-blur-xl border-b-1 border-gray-500 rounded-b-xl">
          <div className="font-semibold text-3xl">
                  CALEB KRAUTER
          </div>
       </nav>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 p-8">
          <main className="flex items-center justify-center w-full flex-col gap-[32px] row-start-2">
          <SongPlayerWrapper>
            
            <CoverArt src={"/mountains.svg"} alt="mountains" width={300} height={300}/>
              <Title title="The Bell" author="Caleb Krauter"/>

            <MediaWrapper>
              <MediaButtonWrapper>
                  <Button onPress={toggleMusic} playing={playing}/>
                  <Button text="STOP" onPress={terminate}/>
                  <Button text="Loop" onPress={handleLooping} toggle={looping}/>
              </MediaButtonWrapper>
              <MarginVertical m={"my-2.5"}/>
              <Seeker defaultValue={0} max={sound.current?.duration() as number} step={0.01} value={progress} onChange={handleSeek} onChangeCommitted={handleOnChangeCommitted}/>
            </MediaWrapper>
          </SongPlayerWrapper>

          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
     </div>
  );
}
