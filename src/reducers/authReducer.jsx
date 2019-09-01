import { FETCH_LOGGED_USER } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOGGED_USER:
      return action.payload;
    default:
      return state;
  }
};
