// ToastNotification.jsx
import React, { useState } from "react";
import "./Toast.css";

export const createToast = (id, notifications, setNotifications) => {
  const toastDetails = {
    timer: 5000,
    success: {
      icon: "fa-circle-check",
      text: "Success: This is a success toast.",
    },
    error: {
      icon: "fa-circle-xmark",
      text: "Error: This is an error toast.",
    },
    warning: {
      icon: "fa-triangle-exclamation",
      text: "Warning: This is a warning toast.",
    },
    info: {
      icon: "fa-circle-info",
      text: "Info: This is an information toast.",
    },
  };

  const removeToast = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const { icon, text } = toastDetails[id];
  const toast = {
    id: Date.now(),
    className: `toast ${id}`,
    html: (
      <>
        <div className="column">
          <i className={`fa-solid ${icon}`}></i>
          <span>{text}</span>
        </div>
        <i
          className="fa-solid fa-xmark"
          onClick={() => removeToast(toast.id)}
        ></i>
      </>
    ),
  };

  setNotifications((prevNotifications) => [...prevNotifications, toast]);

  // Setting a timeout to remove the toast after the specified duration
  setTimeout(() => removeToast(toast.id), toastDetails.timer);
};

const ToastNotification = () => {
  const [notifications, setNotifications] = useState([]);

  // ... The rest of your ToastNotification component ...

  return (
    <div>
      <ul className="notifications">
        {notifications.map((notification) => (
          <li key={notification.id} className={notification.className}>
            {notification.html}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToastNotification;
