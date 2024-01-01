import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  search: [],
  singleMovie: [],
  filterMovie: [],
  shows: [],
  // backdrop: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      //   state.movies.push(action.payload);
    },

    setSingleMovie: (state, action) => {
      state.singleMovie = action.payload;
    },

    setSearch: (state, action) => {
      state.movies = action.payload;
    },
    setShows: (state, action) => {
      state.shows = action.payload;
    },
    setRemoveMovie: (state, action) => {
      state.movies.filter((film, index) => (film.vote_average >= 7).push(action.payload));
    },

    setFilter: (state, action) => {
      state.movies = action.payload;
    },
    // setBackdrop: (state, action) => {
    //   state.singleMovie = action.payload;
    // },
  },
});

export const {
  setMovies,
  setSearch,
  setSingleMovie,
  setShows,
  setRemoveMovie,
  setFilter,
} = movieSlice.actions;

// To get all
export const selectMovies = (state) => state.movies.movies;
// To get single
export const selectSingle = (state) => state.movies.singleMovie;

// To get searched
export const selectSearch = (state) => state.movies.search;

// To get shows
export const selectShows = (state) => state.movies.shows;
// To get shows
export const selectRemoveMovie = (state) => state.movies.shows;

// To get filtered
export const selectFilter = (state) => state.movies.setFilter;
// export const selectBackdrop = (state) => state.movies.setFilter;

export default movieSlice.reducer;
