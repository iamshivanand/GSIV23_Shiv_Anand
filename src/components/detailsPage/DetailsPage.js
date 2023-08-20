import React, { useEffect } from "react";
import "./DetailsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { switchNavbar } from "../../actions/genericActions";
const DetailsPage = () => {
  const data = useSelector((state) => state?.movieDetail);
  console.log("local storage", localStorage.getItem("movieDetail"));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("qwerty inside useEffect and switch is going to dispatch");
    dispatch(switchNavbar(false));
  }, []);
  console.log("hello2", data);
  let director;
  if (data.director) {
    director = data.director[0].name;
  }
  return (
    <div className="details-main-container">
      <div className="details-image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            data?.poster_path || data?.backdrop_path
          }`}
          alt="poster"
        />
      </div>
      <div className="details-description-container">
        <div className="details-title">{data.title} (rating)</div>
        <div className="details-year-director details">
          {data?.releaseDate} | {data?.length} | {director}
        </div>
        <div className="details-cast details">
          Cast:
          {data?.cast?.map((each) => (
            <span>{each.name},&nbsp;</span>
          ))}
        </div>
        <div className="details-description details">
          Description:{data?.description}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
