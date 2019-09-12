import { FETCH_CARS, FETCH_CAR } from './types';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const fetchAllCars = () => dispatch => {
    const request = axios.get(`${API_BASE_URL}/car/getAll`);

    request.then(({data}) => {
        dispatch({type: FETCH_CARS, payload: data});
    });

};

export const fetchCarById = (id, callback) => dispatch => {
    const request = axios.get(`${API_BASE_URL}/car/getById/${id}`);

    request.then(({data}) => {
        if(data.user) {
            callback(data.user);
        }
        dispatch({type: FETCH_CAR, payload: data});
    });
};