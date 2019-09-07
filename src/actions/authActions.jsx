import { FETCH_LOGGED_USER, SIGN_OUT } from './types'
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
    }).catch((error) => {
        callback();
    }); 
};

export const register = (user, callback) => () => {
    const request = axios(`${API_BASE_URL}/auth/register`, {
        method: 'post',
        data: user,
        withCredentials: true
    });

    request
        .then(() => callback(true))
        .catch(() => callback(false));

};

export const signOut = () => dispatch => {
    const request = axios(`${API_BASE_URL}/logout`, {
      method: 'post',
      withCredentials: true
    });  
  
    request.then(() => dispatch({type: SIGN_OUT}));
};


