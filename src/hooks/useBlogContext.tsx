import { BlogContext } from "../Context/BlogContext";
import { useContext } from "react";
export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw Error("useBlogContext must be used inside a BlogContextProvider");
  }
  return context;
};
