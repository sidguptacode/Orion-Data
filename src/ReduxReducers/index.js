import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  videoReducer: videoReducer,
  dataReducer: dataReducer
});
