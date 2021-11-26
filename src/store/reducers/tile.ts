
import { Tile } from '../../models/Tile'
import { TileActionType, ROTATE_TILE, CLEAR_LIST } from '../actions/tile'

export const tileReducer = (state = [] as Tile[], action: TileActionType) : Tile[] => {
    switch (action.type) {
        case ROTATE_TILE:
            return [...state, action.payload]
        case CLEAR_LIST:
            return []
        default:
            return state
    }
}
