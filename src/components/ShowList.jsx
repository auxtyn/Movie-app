import React from "react";
import { useSelector } from "react-redux";
import ShowCard from "./ShowCard";
import { selectShows } from "../features/movieSlice";
import Slider from "react-slick";

const ShowList = () => {
  const shows = useSelector(selectShows);
  // console.log(shows)

  var settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-left">Shows</h1>

      {shows.length >= 1 ? (
        <Slider {...settings}>
          {shows.map((show, index) => (
            <ShowCard key={index} show={show} />
          ))}
        </Slider>
      ) : (
        <h3>Loading shows...</h3>
      )}
    </>
  );
};

export default ShowList;
