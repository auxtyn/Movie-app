import React  from 'react';
import { useSelector } from "react-redux";
import { selectSingle, setSingleMovie } from "../features/movieSlice";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const DetailsPage = () => {
  const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&&api_key=${API_KEY}`
    ).then((response) => {
      const res = response.data;
      console.log(res);
      dispatch(setSingleMovie(res));
    });
  }, [dispatch, id]);

  let movie = useSelector(selectSingle);

  // console.log(movie)

  const API_IMG = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {
        <>
          <div className="row single-row mt-5 pt-5 ">
            <div className="text-white single-parent">
              <div className="col-4 col-md-12">
                <img
                  src={API_IMG + movie.backdrop_path}
                  alt=""
                  className="w-100 "
                />
              </div>

              {/* <div className="col-12 col-md-8">
                <img
                  src={API_IMG + movie.poster_path}
                  alt=""
                  className="w-100 "
                />
                </div> */}

              <h1>{movie.title}</h1>
              <h2>{movie.vote_average}</h2>
              <div className="single-child hero pt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum libero animi qui possimus repellat facilis illo? Neque
                  laudantium eum, facilis, dolore quaerat odio vitae molestiae
                  mollitia exercitationem vel molestias minima quo sapiente.
                  Nihil quibusdam facere, laborum cupiditate in sunt? Aut
                  blanditiis vero ratione repellat magnam quam expedita,
                  suscipit vel soluta beatae inventore commodi! Labore repellat
                  eaque, cupiditate commodi eum consequatur perferendis nisi
                  accusantium aperiam maiores, nesciunt atque dicta harum quo
                  quisquam consectetur? In saepe debitis, doloribus labore
                  corrupti nulla asperiores beatae perferendis? Dolor qui
                  tempore fugiat veritatis provident sequi, ea vitae voluptate
                  aliquam nisi numquam nobis sed modi adipisci quia?
                </p>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};
export default DetailsPage;
