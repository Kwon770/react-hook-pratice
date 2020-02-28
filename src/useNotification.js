import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// Notication Decument : https://developer.mozilla.org/ko/docs/Web/API/notification
const useNotification = (title, options) => {
  // Notification 지원하는지 확인
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("lol", { body: "funny" });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
