import { SET_ACTIVE_LINK } from './types';

export const setActiveLink = (link) => dispatch => dispatch({type: SET_ACTIVE_LINK, payload: link});
