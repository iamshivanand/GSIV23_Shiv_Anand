import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UpcomingMovies from "./components/UpcomingMovies";
import Navbar from "./components/navbar/Navbar";
import DetailsPage from "./components/detailsPage/DetailsPage";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Router>
      <div className="App">
        <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Routes>
          <Route
            exact
            path="/"
            element={<UpcomingMovies searchQuery={searchQuery} />}
          />
          <Route exact path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
