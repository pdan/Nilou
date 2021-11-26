import { combineReducers, Reducer } from 'redux';
import { Store } from '../../models/store'
import { tileReducer } from './tile';

export const reducers: Reducer = combineReducers<Store>({ tilesStore: tileReducer })