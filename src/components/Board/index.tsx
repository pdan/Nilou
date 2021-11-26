import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { rotateTile } from '../../store/actions/tile'
import { Store } from "../../models/store"
import { Tile } from "../../models/tile"
import Item from '../tile'
import './board.css'


interface Props {
    data: string[]
}


const Board = ({ data }: Props): JSX.Element => {
    const dispatch = useDispatch();
    const savedTiles = useSelector((state: Store) => state.tilesStore)
    const onTileRotate = (tile: Tile) => {
        console.log(tile)
        
        dispatch(rotateTile(tile));
    }
    return (
        <div className="">
            {savedTiles.map(t => <span>[{t.x} {t.y}]</span>)}
            <div className="p-0 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center flex-col" >
                {data.map((a, y) =>
                    <div key={y} className="flex w-full">
                        {a.split('').map((b, x) =>
                            <Item data={b} x={x + 1} y={y + 1} onRotate={onTileRotate}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Board