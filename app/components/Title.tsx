interface TitleProps {
    title: string;
    author: string;
}

export default function Title({title, author}: TitleProps) {
    return (
        <div className='flex flex-col text-center text-black'>
            <div className="font-bold text-xl">{title}</div>
            <div className="font-normal text-lg">{author}</div>
        </div>
    )    
}