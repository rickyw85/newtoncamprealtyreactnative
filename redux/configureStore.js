import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { houses } from './houses';
import { reviews } from './reviews';
import { newton } from './newton';
import { vendors } from './vendors';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            houses,
            reviews,
            vendors,
            newton
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}