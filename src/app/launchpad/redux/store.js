/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import rootReducer from './root-reducer';

const store = createStore(rootReducer);

export { store };
