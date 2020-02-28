import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = onClick => {
  // useRef() = getElementById(), potato으로 해당 input이 접근할 수 있음
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // return : ComponentWillUnMount function
    return () => element.current.removeEventListner("click", onClick);
  }, []);
  // ComponentDidMount, ComponentWillUnMount 에만 실행할 것이므로 ,[] 추가
  return element;
};

const App = () => {
  const sayHello = () => console.log("Say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
