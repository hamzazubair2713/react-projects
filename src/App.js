import React, { useEffect } from "react";
// import Datafetch from "./Components/Async/Datafetch";
import Steps from "./Components/MultiSteps/Steps";
import DaystoDate from "./Components/daysTodate/DaystoDate";
import TravelList from "./Components/TravelApp/TravelList";
import ToastNotification from "./Components/Toastify/Toast";
import Toasttest from "./Components/Toastify/Toasttest";
import SplitBill from "./Components/splitBill/SplitBill";
import PopCorn from "./Components/usePopcorn/PopCorn";
import Weather from "./Components/Weather/Weather";
import Ripple from "./Components/rippleButton/Ripple";
const App = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=31.4738496&lon=74.3647208&appid=9e3947b2926d9362fcfb6078c43ed83d`;
  // const url = `https://nominatim.openstreetmap.org/search?format=json&q=lahore`;
  // async function getWeather() {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // const latitude = 31.4738496;
  // const longitude = 74.3647208;

  // const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const country = data.address.country;
  //     const city = data.address.city;

  //     console.log(`Country: ${country}`);
  //     console.log(`City: ${city}`);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // }
  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <>
      <Ripple />
      {/* <Weather /> */}
      {/* <PopCorn /> */}
    </>
  );
};

export default App;
{
  /* <Datafetch /> */
}
{
  /* <Steps /> */
}
{
  /* <DaystoDate /> */
}
{
  /* <TravelList /> */
}
{
  /* <SplitBill /> */
}
