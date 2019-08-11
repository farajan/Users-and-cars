import { FETCH_ALL_USERS } from './types';
import axios from 'axios';
import { API_BASE_URL } from '../constants';


export const fetchAllUsers = () => dispatch => {
    const request = axios.get(`${API_BASE_URL}/user/getAll`);

    request.then(({data}) => {
        dispatch({type: FETCH_ALL_USERS, payload: data});
    });

};