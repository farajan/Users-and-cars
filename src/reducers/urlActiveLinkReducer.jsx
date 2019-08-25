import { SET_ACTIVE_LINK } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case SET_ACTIVE_LINK:
          return action.payload;

        default: 
          return state;
    }
  }
