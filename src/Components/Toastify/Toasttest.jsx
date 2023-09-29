import React, { useEffect, useState } from "react";
import { createToast } from "./Toast";

const Toasttest = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      if (res.status === 200) {
        createToast("success", notifications, setNotifications);
      }
    }
    getData();
  }, []);

  return <div>{/* <ToastNotification /> */}</div>;
};

export default Toasttest;
