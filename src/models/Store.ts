import { Tile } from './Tile'
export type Store = {
    /* 
        Tiles which is changed by user actions.
        It will be cleaned when user update the map 
    */

    tilesStore: Tile[]
}