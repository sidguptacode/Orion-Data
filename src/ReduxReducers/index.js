import { combineReducers } from 'redux';
import videoReducer from "videoReducer";

// The rootReducer; it contains state which is changed automatically after certain actions are excecuted.
const appReducer = combineReducers({
  videoReducer: videoReducer
});

export default rootReducer;
