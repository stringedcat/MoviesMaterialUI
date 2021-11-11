import { SET_MOVIES, SET_SERIES } from "../actionNames";
import data from "../data/sample.json";
export function getMovies() {
  return (dispatch) => {
    const movies = data.entries.filter( movie => movie.releaseYear >= 2010).filter(movie => movie.programType === "movie");
    dispatch({ type: SET_MOVIES, payload: movies });
  };
}
export function getSeries() {
    return (dispatch) => {
      const series = data.entries.filter( serie => serie.releaseYear >= 2010).filter(serie => serie.programType === "series");
      dispatch({ type: SET_SERIES, payload: series });
    };
  }
