import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Navbar = ({ movies }) => {
  const [query, setQuery] = useState("");
  const InputRef = useRef();
  useEffect(() => {
    // console.log(InputRef.current);
    function callBack(e) {
      // console.log(e.code);
      if (e.code === "Enter") {
        console.log(InputRef.current.value);

        // InputRef.current.focus();
        // InputRef.current.classList.add("hamza");
      }
    }

    // document.addEventListener("keydown", callBack);
    // return () => document.addEventListener("keydown", callBack);
  }, []);

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        ref={InputRef}
      />
      <p className="num-results">
        Found <strong>{movies?.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
