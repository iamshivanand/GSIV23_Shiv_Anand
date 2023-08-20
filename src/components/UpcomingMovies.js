import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovies, updateMovieDetail, searchMovies } from "../actions";
import { switchNavbar } from "../actions/genericActions";

const UpcomingMovies = ({ searchQuery }) => {
  const result = useSelector((state) => state.upcomingMovies);
  const searchedMovies = useSelector((state) => state.searchedMovies);
  const location = useLocation();
  const prevLocation = useRef();
  const isFirstRender = useRef(true);
  console.log("searchedMovies", searchedMovies);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log("search", searchedMovies);
    searchQuery.length > 0 ? setMovies(searchedMovies) : setMovies(result);
  }, [searchedMovies, result, searchQuery]);
  useEffect(() => {
    if (page > 1) {
      searchedMovies.length > 0
        ? dispatch(searchMovies(searchQuery, page))
        : dispatch(getUpcomingMovies(page));
    }
  }, [page]);

  useEffect(() => {
    console.log("coming here");
    console.log("raiden", location, prevLocation.current);
    dispatch(switchNavbar(true));
    dispatch(getUpcomingMovies(1));
  }, []);
  const scrollToEnd = () => {
    console.log("this is the end of the page:", page);
    // console.log("next", !next, next);

    setPage(page + 1);

    return;
  };
  window.onscroll = function () {
    // if the page has reached to the bottom

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      scrollToEnd();
    }
  };

  return (
    <div className="upcoming-movies-div-container">
      {movies.length > 0 ? (
        movies?.map((movie) => (
          <Link
            to="/details"
            style={{ textDecoration: "none", color: "black" }}
            key={movie?.id + movie?.release_date}
          >
            <div
              className="movie-card"
              onClick={() => dispatch(updateMovieDetail(movie))}
            >
              <div className="card-image">
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie?.poster_path || movie?.backdrop_path
                  }`}
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
          </Link>
        ))
      ) : (
        <div>Nothing To show....</div>
      )}
    </div>
  );
};

export default UpcomingMovies;
