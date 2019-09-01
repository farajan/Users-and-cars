import { FETCH_LOGGED_USER } from './types'
import axios from 'axios'
import { API_BASE_URL } from '../constants'

export const signIn = (signInBody, callback) => () => {
    const request = axios(`${API_BASE_URL}/login`, {
        method: 'post',
        data: signInBody,
        withCredentials: true
    });

    request
        .then(() => callback(true))
        .catch(() => callback(false));

};

export const fetchLoggedUser = (callback) => dispatch => {
    const request = axios(`${API_BASE_URL}/auth/getLoggedUser`, {
        method: 'get',
        withCredentials: true
    });
     
    request.then(({data}) => {
        dispatch({type: FETCH_LOGGED_USER, payload: data});
        callback();
    }).catch(
        callback()
    ); 
};

