import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";
// bagian 4 dari set favorites dengan redux menambahkan provider dan store
import { store } from "./utils/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
