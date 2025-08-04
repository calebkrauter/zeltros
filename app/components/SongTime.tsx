interface SongTimeProps {
    time: number
}

export default function SongTime({time}: SongTimeProps) {
    const min = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return (
        <div className="flex flex-row text-black bg-red-300 h-[20px] w-[100px] justify-center items-center rounded-lg px-1">
            {min}:{seconds}
        </div>
    )
}