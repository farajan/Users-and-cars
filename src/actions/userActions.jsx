import { FETCH_USERS, FETCH_USER, COUNT_CARS, FETCH_LOGGED_USER, FETCH_CAR } from './types'
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

export const updateUser = (data) => dispatch => {
    const request = axios.post(`${API_BASE_URL}/user/update`, data);

    request.then(({data}) => {
        dispatch({type: FETCH_LOGGED_USER, payload: data});
    });
}

export const buyCar = (id_user, id_car) => dispatch => {
    const request = axios.post(`${API_BASE_URL}/user/${id_user}/buyCar/${id_car}`);

    request.then(({data}) => {
        dispatch({type: FETCH_CAR, payload: data});
    });
}