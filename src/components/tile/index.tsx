import React from "react"
import { useDispatch } from 'react-redux';
import { Tile } from '../../models/tile'
import './tile.css'


interface Props {
    data: string
    x: number
    y: number
    onRotate: (tile: Tile) => void
}


const Item = ({ data, x, y, onRotate }: Props): JSX.Element => {



    const onTailClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        const rotateRate: number = e.currentTarget.dataset.rotate ? +e.currentTarget.dataset.rotate + 90 : 0;
        e.currentTarget.setAttribute('data-rotate', `${rotateRate}`)
        e.currentTarget.style.transform = 'rotate(' + rotateRate + 'deg)'

        const tile: Tile = { x, y };
        onRotate(tile)
    }

    return (
        <div className="flex w-full item" key={x} onClick={(e) => onTailClick(e)} data-rotate="0">
            <img src={`/images/pipes/${data}.png`} />
        </div>
    )
}

export default Item