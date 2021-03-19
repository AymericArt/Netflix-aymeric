import {FETCH_CATEGORIES, FETCH_HOMEPAGE} from '../actions/actionType'

let initialState = {
    homepageImage: null,
    categories: []
};

export default (state = initialState = 0, action) => {
    switch (action.type) {
        case FETCH_HOMEPAGE:
            return Object.assign({}, state, {
                homepageImage: action.payload
            })
        case FETCH_CATEGORIES:
            return Object.assign({}, state, {
                categories: action.payload
            })
        default:
            return state
    }
}