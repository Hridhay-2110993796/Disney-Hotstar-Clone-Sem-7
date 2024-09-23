import { FETCH_MOVIES } from './actions';

const initialState = {
  movies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;