import { FETCH_ALL_USERS, FETCH_USER } from '../actions/types'

const initialState = { 
    users: [],
    user: {}, 
  };

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };

        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };

        default: 
            return state;
    }
  }
