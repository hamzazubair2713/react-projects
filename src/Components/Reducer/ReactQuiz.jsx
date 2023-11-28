import React from "react";
import "./index.css";
import DateCounter from "./DateCounter";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";

const ReactQuiz = () => {
  return (
    <>
      <Header />
      <DateCounter />
      <Error />
      <Loader />
    </>
  );
};

export default ReactQuiz;
