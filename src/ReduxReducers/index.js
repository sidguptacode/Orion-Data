import { combineReducers } from 'redux';
import videoReducer from './videoReducer';

export default combineReducers({
  videoReducer: videoReducer
});
