import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { Store } from '../../models/store';
import { Tile } from '../../models/tile';


export const ROTATE_TILE = 'ROTATE_TILE';
export const ROTATE_TILES = 'ROTATE_TILES';
export type TileActionType =
    | { type: typeof ROTATE_TILE, payload: Tile }
    | { type: typeof ROTATE_TILES, payload: Tile[] }

export const rotateTile = (tile: Tile): TileActionType => ({
    type: ROTATE_TILE,
    payload: tile
})

// export const rotateTiles = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch, getState) => {
//     // Rotate all tiles by ws and get new map
//     // And clear Store
// }