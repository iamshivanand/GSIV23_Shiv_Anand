import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../actions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
const Navbar = ({ setSearchQuery, searchQuery }) => {
  const showSearchbar = useSelector((state) => state.showSearchBar);
  console.log("showSearchbar", showSearchbar);
  const dispatch = useDispatch();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchQuery);
      // Send Axios request here
      dispatch(searchMovies(searchQuery, 1));
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);
  const handleSearchQuery = (e) => {
    console.log("click kiclcmasdklajsldjasljdla", e.target);
    setSearchQuery(e.target.value);
  };
  return (
    <div className="NavbarComponent">
      <div>
        {showSearchbar ? (
          <div className="search-input-container">
            <div className="search-input">
              <SearchIcon />{" "}
              <input placeholder="Search" onChange={handleSearchQuery} />
            </div>
          </div>
        ) : (
          <div className="navbar-tag">Movie Details</div>
        )}
        <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
