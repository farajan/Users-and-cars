import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carReducer from './carReducer';
import urlActiveLinkReducer from './urlActiveLinkReducer';

export default combineReducers({
    user: userReducer,
    car: carReducer,
    activeLink: urlActiveLinkReducer,
  });
  