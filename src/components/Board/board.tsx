import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { rotateTile } from '../../store/actions/tile'
import { Store } from "../../models/Store"
import { Tile } from "../../models/Tile"
import Item from '../Tile/tile'
import './board.css'


interface Props {
    data: string[]
}


const Board = ({ data }: Props): JSX.Element => {
    const dispatch = useDispatch();
    const onTileRotate = (tile: Tile) => {
        dispatch(rotateTile(tile));
    }
    return (
        <div className="">
            <div className="p-0 max-w-md mx-auto bg-white shadow-md flex items-center flex-col" >
                {data.map((a, y) =>
                    <div key={y} className="flex w-full">
                        {a.split('').map((b, x) =>
                            <Item data={b} x={x} y={y} onRotate={onTileRotate}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Board