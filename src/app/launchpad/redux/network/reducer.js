import actions from './actions';

const initState = {
  networkType: -1,
  settings: {},
};

export default function networkReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_NETWORK_TYPE:
      return {
        ...state,
        networkType: action.data || 0,
      };

    default:
      return state;
  }
  return state;
}
