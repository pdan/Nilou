import React from "react"
import './Board.css'


interface Props {
    data: string[]
    onRotate: (x: number, y: number) => void
}


const Board = ({ data, onRotate }: Props): JSX.Element => {
    const onTailClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, x: number, y: number) => {
        e.preventDefault()
        onRotate(x,y)
    }
    return (
        <div className="">
            <div className="p-0 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center flex-col" >
                {data.map((a, y) =>
                    <div key={y} className="flex w-full">
                        {a.split('').map((b, x) =>
                            <div className="flex w-full item" key={x} onClick={(e) => onTailClick(e, x, y)} data-character={b}><img src={`/images/pipes/${b}.png`} /></div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Board