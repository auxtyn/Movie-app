import { selectSearch, setSearch } from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";
  const dispatch = useDispatch();

  const searchMovies = useSelector(selectSearch);
  console.log(searchMovies);

  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
    setQuery(query);
  };

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&region=harry&api_key=${API_KEY}`
    ).then((response) => {
      const res = response.data;
      console.log(res.results);
      dispatch(setSearch(res.results));
    });
  }, [dispatch, query]);

  return (
    <>
    <div className="bg-grey">
      <form className="form " onSubmit={submitHandler}>
        <div className="input-form">
          <input
            className="form-control text-center w-50"
            placeholder="search movies "
            name="query" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          {/* <i className="fa fa-search fa-2x"></i> */}
          <div>
            {/* <button className="btn btn-info form-btn text-white">Search</button> */}
          </div>
        </div>
      </form>
      </div>

      {searchMovies.map((movies) => (
        <h2>Title of movie{movies.title}</h2>
      ))}
      {/* <h1></h1> */}
    </>
  );
};

export default Search;
