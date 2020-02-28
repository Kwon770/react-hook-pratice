import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    // For Prevent Error from chrome
    event.returnValue = "";
  };

  // "beforeunload" : 브라우저 탭이 닫히기 전에 해당 함수를 실행
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
