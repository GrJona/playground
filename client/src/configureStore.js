import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
    )
  );
};

export default configureStore;
