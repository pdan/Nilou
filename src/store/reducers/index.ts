import { combineReducers, Reducer } from 'redux';
import { Store } from '../../models/Store'
import { tileReducer } from './tile';

export const reducers: Reducer = combineReducers<Store>({ tilesStore: tileReducer })