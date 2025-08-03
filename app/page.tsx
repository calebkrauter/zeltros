'use client'
import Image from "next/image";
import {Howl, Howler} from 'howler';
import { useEffect, useRef } from "react";
import { Button } from "@heroui/button";
export default function Home() {

  const sound = useRef<Howl | null>(null);
const playSound = () => {
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
  const stopSound = () => {
    if ( sound.current?.playing()) {
      sound.current.stop();
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
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Button className="bg-red-600 w-full h-full" onPress={playSound}>
              Play
            </Button>
                        <Button className="bg-red-600 w-full h-full" onPress={stopSound}>
              STOP
            </Button>
            <div className="w-10">
              Here’s a block of dummy text using various sentence structures and tones. Let me know if you want a specific topic, tone, or format.

The sky shimmered with a dull amber hue as the city awoke, stretching its limbs in the glow of early light. Beneath steel arches and silent windows, the hum of machines merged with the distant chatter of life beginning again. Ideas flickered like static in the minds of those passing by—brief, weightless, and often forgotten.

Meanwhile, somewhere behind thick glass, a screen flickered to life. Words lined up in code and color, pushing the day forward pixel by pixel. Deadlines loomed like shadows, soft and certain. Coffee cooled slowly beside a notepad full of scribbled half-thoughts.

In another room, music played softly through worn-out speakers—notes reverberating against the walls like memory. Frosted glass caught the sunlight, breaking it into soft rainbows across an empty floor.

No one noticed the moment when the ordinary turned meaningful. It rarely announces itself. It sneaks in like breath—silent, essential, and easy to miss.

Let me know if you want this styled as prose, marketing copy, lorem ipsum, poetry, or something else.


ChatGPT can make mistakes. Check important info.

            </div>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
     </div>
  );
}
