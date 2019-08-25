import { FETCH_USERS, FETCH_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return { ...state, ..._.mapKeys(action.payload, 'id_user') };
      case FETCH_USER:
        return { ...state, [action.payload.id_user]: action.payload };
      case CREATE_USER:
        return { ...state, [action.payload.id_user]: action.payload };
      case UPDATE_USER:
        return { ...state, [action.payload.id_user]: action.payload };
      case DELETE_USER:
        return _.omit(state, action.payload);
      default:
        return state;
    }
  };