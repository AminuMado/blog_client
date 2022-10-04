import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BlogsContextProvider } from "./Context/BlogsContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </React.StrictMode>
);
