import { FETCH_USERS, FETCH_USER, CREATE_USER, UPDATE_USER, DELETE_USER, COUNT_CARS } from '../actions/types'
import _ from 'lodash'

const initialState = { 
  userList: {},
  carCount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return { 
          ...state, 
          userList: {
            ..._.mapKeys(action.payload, 'id_user') 
          }
        };

      case FETCH_USER:
        return { 
          ...state,
          userList: { 
            [action.payload.id_user]: action.payload 
          }
        };

      case CREATE_USER:
        return { 
          ...state, 
          userList: {
            [action.payload.id_user]: action.payload 
          }
        };

      case UPDATE_USER:
        return { 
          ...state, 
          userList: {
            [action.payload.id_user]: action.payload 
          }
        };

      case DELETE_USER:
        return {
          ...state,
          userList: _.omit(state, action.payload)
        };

      case COUNT_CARS:
        return {
          ...state,
          carCount: action.payload
        };
        
      default:
        return state;
    }
  };