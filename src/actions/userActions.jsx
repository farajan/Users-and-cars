import { FETCH_USERS, FETCH_USER, COUNT_CARS } from './types'
import axios from 'axios'
import { API_BASE_URL } from '../constants'


export const fetchAllUsers = () => dispatch => {
    const request = axios.get(`${API_BASE_URL}/user/getAll`);

    request.then(({data}) => {
        dispatch({type: FETCH_USERS, payload: data});
    });
};

export const fetchUserById = (id) => dispatch => {
    const request = axios.get(`${API_BASE_URL}/user/getById/${id}`);

    request.then(({data}) => {
        dispatch({type: FETCH_USER, payload: data});
    });
};

export const countCars = (id) => dispatch => {
    const request = axios.get(`${API_BASE_URL}/user/countCars/${id}`);

    request.then(({data}) => {
        dispatch({type: COUNT_CARS, payload: data});
    });
}
