import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchReviews = () => dispatch => {
    return fetch(baseUrl + 'reviews')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const postReview = (houseId, rating, author, text) => dispatch => {
    const newReview = {
        houseId,
        rating,
        author,
        text
    };
    newReview.date = new Date().toISOString();

    setTimeout(() => {
        dispatch(addReview(newReview));        
    }, 2000);
}

export const addReview = review => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
});

export const fetchHouses = () => dispatch => {

    dispatch(housesLoading());

    return fetch(baseUrl + 'houses')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(houses => dispatch(addHouses(houses)))
        .catch(error => dispatch(housesFailed(error.message)));
};

export const housesLoading = () => ({
    type: ActionTypes.HOUSES_LOADING
});

export const housesFailed = errMess => ({
    type: ActionTypes.HOUSES_FAILED,
    payload: errMess
});

export const addHouses = houses => ({
    type: ActionTypes.ADD_HOUSES,
    payload: houses
});

export const fetchNewton = () => dispatch => {
    
    dispatch(newtonLoading());

    return fetch(baseUrl + 'newton')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(newton => dispatch(addNewton(newton)))
        .catch(error => dispatch(newtonFailed(error.message)));
};

export const newtonLoading = () => ({
    type: ActionTypes.NEWTON_LOADING
});

export const newtonFailed = errMess => ({
    type: ActionTypes.NEWTON_FAILED,
    payload: errMess
});

export const addNewton = newton => ({
    type: ActionTypes.ADD_NEWTON,
    payload: newton
});

export const fetchVendors = () => dispatch => {
    
    dispatch(vendorsLoading());

    return fetch(baseUrl + 'vendors')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(vendors => dispatch(addVendors(vendors)))
        .catch(error => dispatch(vendorsFailed(error.message)));
};

export const vendorsLoading = () => ({
    type: ActionTypes.VENDORS_LOADING
});

export const vendorsFailed = errMess => ({
    type: ActionTypes.VENDORS_FAILED,
    payload: errMess
});

export const addVendors = vendors => ({
    type: ActionTypes.ADD_VENDORS,
    payload: vendors
});

export const postFavorite = houseId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(houseId));
    }, 2000);
};

export const addFavorite = houseId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: houseId
});

export const deleteFavorite = houseId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: houseId
}); 