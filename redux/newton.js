import * as ActionTypes from './ActionTypes';

export const newton = (state = { isLoading: true,
                                        errMess: null,
                                        newton: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEWTON:
            return {...state, isLoading: false, errMess: null, newton: action.payload};

        case ActionTypes.NEWTON_LOADING:
            return {...state, isLoading: true, errMess: null, newton: []}

        case ActionTypes.NEWTON_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};