import { createContext, useState } from "react";
// Types for the blog
type author = {
  _id: string;
  username: string;
};
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  author: author;
  blogId: string;
};

type blog = {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: author;
  comments: comment[];
  likes: author[];
};

interface ContextType {
  blog: blog | null;
  setBlog: React.Dispatch<React.SetStateAction<blog | null>>;
}

type BlogContextProviderProps = {
  children: React.ReactNode;
};

export const BlogContext = createContext({} as ContextType);
export const BlogsContextProvider = ({
  children,
}: BlogContextProviderProps) => {
  const [blog, setBlog] = useState<blog | null>(null);
  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
