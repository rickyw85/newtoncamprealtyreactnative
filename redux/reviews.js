import * as ActionTypes from './ActionTypes';

export const reviews = (state = { errMess: null, reviews: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, errMess: null, reviews: action.payload};

        case ActionTypes.REVIEWS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_REVIEW:
                let review = action.payload;
                review.id = state.reviews.length;
                return {...state, reviews: state.reviews.concat(review) };    

        default:
            return state;
    }
};