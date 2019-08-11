import { FETCH_ALL_CARS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_CARS:
          return action.payload;

        default: 
          return state;
    }
  }
