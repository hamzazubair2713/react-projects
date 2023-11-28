import React, { useEffect, useState } from "react";

const Weather = () => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9e3947b2926d9362fcfb6078c43ed83d`;
  async function getWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    setLatitude(position.coords.longitude);
    setLongitude(position.coords.latitude);
  }
  useEffect(() => {
    // getLocation();
    // console.log({ longitude, latitude });
    getWeather();
  }, []);
  console.log(longitude, latitude);
  return (
    <div>
      {loading ? "Loading....." : "Weather"}
      <a
        href={`https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`}
        target="blank"
      >
        click here
      </a>
    </div>
  );
};

export default Weather;
