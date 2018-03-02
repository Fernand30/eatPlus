import { createStore } from 'redux'

export const counter = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  case 'ADD':
    return state*20;
  case 'RESET':
    return 0;
  default:
    return state;
  }
}

store = createStore(counter);

export default store;