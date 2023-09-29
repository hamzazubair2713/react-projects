import React, { useState } from "react";

function Datafetch() {
  const [isLoading, setIsLoading] = useState(false);
  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error while Fetching", error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <button onClick={fetchData}>fetch</button>
      {isLoading ? <div>Loading....</div> : null}
    </div>
  );
}

export default Datafetch;
