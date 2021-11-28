import { useDispatch } from "react-redux"
import { rotateTile } from '../../store/actions/tile'
import { Tile } from "../../models/Tile"
import Item from '../Tile/tile'
import './board.css'


interface Props {
    data: string[]
    level: number
}

const levelsClasses = ['max-w-sm', 'max-w-2xl', 'max-w-4xl' , 'max-w-full', 'max-w-full']

const Board = ({ data, level }: Props): JSX.Element => {
    const dispatch = useDispatch();
    const onTileRotate = (tile: Tile) => {
        dispatch(rotateTile(tile));
    }
    return (
        <div className="">
            <div className={`p-0 ${levelsClasses[level - 1]} mx-auto bg-white shadow-md flex items-center flex-col`} >
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