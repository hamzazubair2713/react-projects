import React, { useState } from "react";
import MovieListBox from "./MovieListBox";
import WatchedList from "./WatchedList";

const MovieList = () => {
  return (
    <main className="main">
      <MovieListBox />
      <WatchedList />
    </main>
  );
};

export default MovieList;
