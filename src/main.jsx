import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

import { store } from "./store/store.js";
import { PokemonApp } from "./PokemonApp.jsx";
import { TodosApp } from "./TodosApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="box counter">
        <App />
      </div>
      <div className="cont">
        <div className="box">
          <TodosApp />
        </div>
        <div className="box">
          <PokemonApp />
        </div>
      </div>
    </Provider>
  </React.StrictMode>
);
