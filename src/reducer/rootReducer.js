import { SET_MOVIES, SET_SERIES } from "../actionNames";
const initialState = {
  movies: [],
  series:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
    case SET_MOVIES:{
    return{
      ...state,
      movies: action.payload
    }
    }
    case SET_SERIES:{
      return{
        ...state,
        series: action.payload
      }
    }
  }
}

export default rootReducer;