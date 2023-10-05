import React, { useState } from "react";
import MovieListBox from "./MovieListBox";
import WatchedList from "./WatchedList";

const MovieList = ({ movies }) => {
  return (
    <main className="main">
      <MovieListBox movies={movies} />
      <WatchedList />
    </main>
  );
};

export default MovieList;
