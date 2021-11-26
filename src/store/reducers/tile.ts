
import { Tile } from '../../models/tile'
import { TileActionType, ROTATE_TILE, ROTATE_TILES } from '../actions/tile'

export const tileReducer = (state = [] as Tile[], action: TileActionType) : Tile[] => {
    switch (action.type) {
        case ROTATE_TILE:
            return [...state, action.payload]
        default:
            return state
    }
}
