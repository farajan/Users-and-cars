import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carReducer from './carReducer';
import urlActiveLinkReducer from './urlActiveLinkReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    car: carReducer,
    activeLink: urlActiveLinkReducer,
  });
  