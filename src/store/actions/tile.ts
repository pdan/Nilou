import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { Store } from '../../models/Store';
import { Tile } from '../../models/Tile';


export const ROTATE_TILE = 'ROTATE_TILE';
export const CLEAR_LIST = 'CLEAR_LIST';
export type TileActionType =
    | { type: typeof ROTATE_TILE, payload: Tile }
    | { type: typeof CLEAR_LIST }

export const rotateTile = (tile: Tile): TileActionType => ({
    type: ROTATE_TILE,
    payload: tile
})

export const clearList = (): TileActionType => ({
    type: CLEAR_LIST
})