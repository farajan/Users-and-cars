import { SET_ACTIVE_LINK } from './types';

export const setActiveLink = (data) => dispatch => {
    dispatch({type: SET_ACTIVE_LINK, payload: data});
};