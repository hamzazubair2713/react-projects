import React, { useState } from "react";
import "./popCorn.css";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

const PopCorn = () => {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
};

export default PopCorn;
