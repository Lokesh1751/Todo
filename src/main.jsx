import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TodoReducer from "./Reducer/TodosReducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoReducer>
      <App />
    </TodoReducer>
  </React.StrictMode>
);
