import { FETCH_LOGGED_USER, SIGN_OUT } from '../actions/types'

const initialState = { 
  user: null,
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGGED_USER:
      return {
        user: action.payload,
        isAuth: true
      };

    case SIGN_OUT:
      return {
        user: null,
        isAuth: false
      }

    default:
      return state;
  }
};
