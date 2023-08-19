import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovies } from "../actions";

const UpcomingMovies = () => {
  const result = useSelector((state) => state.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("coming here");
    dispatch(getUpcomingMovies(1));
  }, []);

  return (
    <div className="upcoming-movies-div-container">
      {result?.map((movie) => (
        <div className="movie-card" key={movie?.id}>
          <div className="card-image">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt="poster"
            />
          </div>
          <div className="card-details">
            <div className="card-title-and-rating-container">
              <div className="card-title">{movie?.title}</div>
              <div>
                <span>({movie?.vote_average})</span>
              </div>
            </div>
            <div className="description-container">
              Description:{movie?.overview}
            </div>
            {/* <p></p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMovies;
