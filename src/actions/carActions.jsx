import { FETCH_ALL_CARS } from './types';
import axios from 'axios';
import { API_BASE_URL } from '../constants';


export const fetchAllCars = () => dispatch => {
    const request = axios.get(`${API_BASE_URL}/car/getAll`);

    request.then(({data}) => {
        dispatch({type: FETCH_ALL_CARS, payload: data});
    });

};
