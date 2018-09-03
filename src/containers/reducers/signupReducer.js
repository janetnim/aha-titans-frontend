import { CREATE_USER, CREATE_USER_ERROR, SEND_REQUEST, } from '../actions/types';

const prevState = {
  items: [],
  item: {},
  error: {},
};
const signupReducer = (state = prevState, action) => {
  switch (action.type) {
  case SEND_REQUEST:
    return { ...state, isFetching: true, };
  case CREATE_USER:
    if (action.payload.errors) {
      return {
        ...state,
        isFetching: false,
        error: action.payload.errors,
      };
    }
    return {
      ...state,
      isFetching: false,
      item: action.payload.user,
    };
  case CREATE_USER_ERROR:
    return { ...state, error: action.payload.error, };

  default:
    return state;
  }
};

export default signupReducer;
