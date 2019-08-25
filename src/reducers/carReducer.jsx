import { FETCH_CARS, FETCH_CAR, CREATE_CAR, UPDATE_CAR, DELETE_CAR } from '../actions/types'
import _ from 'lodash'


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, ..._.mapKeys(action.payload, 'id_car') };
    case FETCH_CAR:
      return { ...state, [action.payload.id_car]: action.payload };
    case CREATE_CAR:
      return { ...state, [action.payload.id_car]: action.payload };
    case UPDATE_CAR:
      return { ...state, [action.payload.id_car]: action.payload };
    case DELETE_CAR:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
