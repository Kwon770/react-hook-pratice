import defaultAxios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// Axios 는 customizing 을 허용하므로 매개변수로 받으되, 받지 않을 경우를 대비해
// 기본값은 axios 패키지로 부터 받음
const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  // if (!options.url) return;
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `loading: ${loading}\nerror:${error}\ndata:${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
