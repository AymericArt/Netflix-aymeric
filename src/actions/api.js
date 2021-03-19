import {FETCH_CATEGORIES, FETCH_HOMEPAGE} from './actionType'

export const fetchHomepage = (payload) => {
    return {
        type: FETCH_HOMEPAGE,
        payload: payload
    }
}

export const fetchCategories = (payload) => {
    return {
        type: FETCH_CATEGORIES,
        payload: payload
    }
}