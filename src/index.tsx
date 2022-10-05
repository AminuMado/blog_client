import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BlogsContextProvider } from "./Context/BlogsContext";
import { BlogContextProvider } from "./Context/BlogContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BlogsContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </BlogsContextProvider>
  </React.StrictMode>
);
