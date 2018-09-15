import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ReduxReducers';

const store = createStore(
  rootReducer,
  null,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
