import * as ActionTypes from './ActionTypes';

export const vendors = (state = { isLoading: true,
                                    errMess: null,
                                    vendors: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_VENDORS:
            return {...state, isLoading: false, errMess: null, vendors: action.payload};

        case ActionTypes.VENDORS_LOADING:
            return {...state, isLoading: true, errMess: null, vendors: []}

        case ActionTypes.VENDORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};