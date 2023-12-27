import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  search: [],
  singleMovie: [],
  filterMovie: [],
  backdrop: [],
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
    setFilter: (state, action) => {
      state.movies = action.payload;
    },
    setBackdrop: (state, action) => {
      state.singleMovie = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const { setSearch } = movieSlice.actions;
export const { setSingleMovie } = movieSlice.actions;
export const { setFilter } = movieSlice.actions;
export const { setBackdrop } = movieSlice.actions;


// To get all
export const selectMovies = (state) => state.movies.movies;
// To get single
export const selectSingle = (state) => state.movies.singleMovie;

// To get searched
export const selectSearch = (state) => state.movies.search;

// To get filtered
export const selectFilter = (state) => state.movies.setFilter;
export const selectBackdrop = (state) => state.movies.setFilter;


export default movieSlice.reducer;
